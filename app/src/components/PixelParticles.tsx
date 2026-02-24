import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  color: string;
  opacity: number;
}

const PixelParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const colors = ['#E6695C', '#1C6890', '#00D9FF', '#4ADE80', '#FCD34D'];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 10,
      size: Math.random() * 6 + 4,
      speedY: Math.random() * 1 + 0.5,
      speedX: (Math.random() - 0.5) * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.5 + 0.3,
    });

    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 25; i++) {
        const particle = createParticle();
        particle.y = Math.random() * canvas.height;
        particlesRef.current.push(particle);
      }
    };

    const drawParticle = (particle: Particle) => {
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = particle.opacity;
      
      // Draw pixelated square
      const x = Math.floor(particle.x / particle.size) * particle.size;
      const y = Math.floor(particle.y / particle.size) * particle.size;
      ctx.fillRect(x, y, particle.size - 1, particle.size - 1);
      
      ctx.globalAlpha = 1;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        particle.y -= particle.speedY;
        particle.x += particle.speedX;

        // Reset particle if it goes off screen
        if (particle.y < -10) {
          particlesRef.current[index] = createParticle();
        }

        // Wrap around horizontally
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;

        drawParticle(particle);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    initParticles();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ imageRendering: 'pixelated' }}
    />
  );
};

export default PixelParticles;
