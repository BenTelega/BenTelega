interface CrystalIconProps {
  className?: string;
}

export function CrystalIcon({ className = 'w-5 h-5' }: CrystalIconProps) {
  return (
    <img 
      src="/prizes/crystal.png" 
      alt="Crystal"
      className={className}
    />
  );
}
