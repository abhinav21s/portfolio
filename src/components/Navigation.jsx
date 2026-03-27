import { useState } from 'react';

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#hero' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Close mobile menu when navigation link is clicked
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-bg/95 backdrop-blur-sm border-b border-secondary-bg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name on left */}
          <div className="text-xl font-bold font-satoshi text-primary-text">
            Portfolio
          </div>

          {/* Desktop Navigation links on right - hidden on mobile */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-primary-text hover:text-accent transition-colors duration-150 font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger menu icon - visible only on mobile */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center"
            aria-label="Toggle mobile menu"
          >
            <span className={`w-6 h-0.5 bg-primary-text transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-primary-text transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-primary-text transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`md:hidden fixed inset-0 top-[73px] bg-primary-bg/98 backdrop-blur-md transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <ul className="flex flex-col items-center gap-8 pt-12">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl text-primary-text hover:text-accent transition-colors duration-150 font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
