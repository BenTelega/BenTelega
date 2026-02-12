/**
 * Main JavaScript for BenTelega
 * Handles basic functionality and enhancements
 */

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('BenTelega loaded');
  
  // Initialize mobile menu if needed
  initMobileMenu();
  
  // Add smooth scrolling to anchor links
  initSmoothScrolling();
  
  // Add copy-to-clipboard functionality for code blocks
  initCopyToClipboard();
  
  // Add table of contents functionality
  initTableOfContents();
  
  // Add syntax highlighting
  initSyntaxHighlighting();
});

/**
 * Initialize mobile menu
 */
function initMobileMenu() {
  const navList = document.querySelector('.nav-list');
  
  if (navList) {
    // Add mobile menu button if needed
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuButton.addEventListener('click', function() {
      navList.classList.toggle('mobile-menu-open');
    });
    
    const siteNav = document.querySelector('.site-nav');
    if (siteNav) {
      siteNav.appendChild(mobileMenuButton);
    }
  }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL without scrolling to top
        history.pushState(null, null, targetId);
      }
    });
  });
}

/**
 * Initialize copy-to-clipboard for code blocks
 */
function initCopyToClipboard() {
  const codeBlocks = document.querySelectorAll('pre');
  
  codeBlocks.forEach(block => {
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.innerHTML = '<i class="fas fa-copy"></i>';
    copyButton.title = 'Copy to clipboard';
    
    copyButton.addEventListener('click', function() {
      const code = block.querySelector('code');
      if (code) {
        const text = code.textContent;
        navigator.clipboard.writeText(text).then(() => {
          copyButton.innerHTML = '<i class="fas fa-check"></i>';
          copyButton.title = 'Copied!';
          setTimeout(() => {
            copyButton.innerHTML = '<i class="fas fa-copy"></i>';
            copyButton.title = 'Copy to clipboard';
          }, 2000);
        }).catch(err => {
          console.error('Failed to copy: ', err);
        });
      }
    });
    
    block.appendChild(copyButton);
  });
}

/**
 * Initialize table of contents
 */
function initTableOfContents() {
  const toc = document.querySelector('.page-toc');
  
  if (toc) {
    // Add smooth scrolling for TOC links
    toc.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL
          history.pushState(null, null, targetId);
        }
      });
    });
  }
}

/**
 * Initialize syntax highlighting
 */
function initSyntaxHighlighting() {
  // Check if Prism.js is available
  if (typeof Prism !== 'undefined') {
    Prism.highlightAll();
  }
}

/**
 * Add dark mode toggle functionality
 */
function initDarkMode() {
  const darkModeToggle = document.createElement('button');
  darkModeToggle.className = 'dark-mode-toggle';
  darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  darkModeToggle.title = 'Toggle dark mode';
  
  darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // Save preference
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    
    // Update icon
    if (isDarkMode) {
      this.innerHTML = '<i class="fas fa-sun"></i>';
      this.title = 'Toggle light mode';
    } else {
      this.innerHTML = '<i class="fas fa-moon"></i>';
      this.title = 'Toggle dark mode';
    }
  });
  
  // Check for saved preference
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode === 'true') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    darkModeToggle.title = 'Toggle light mode';
  }
  
  // Add to header
  const siteHeader = document.querySelector('.site-header-content');
  if (siteHeader) {
    siteHeader.appendChild(darkModeToggle);
  }
}

// Initialize dark mode
initDarkMode();