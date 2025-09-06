import React from 'react';

const Header = ({ className = '' }) => {
  return (
    <header className={`w-full bg-card border-b border-border elevation-subtle ${className}`}>
      <div className="flex items-center justify-between h-16 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <img 
                src="/assets/images/WhatsApp_Image_2025-09-01_at_23.01.47_1a7b7201-1757006885467.jpg" 
                alt="NIDAAN Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold text-foreground tracking-tight">
                NIDAAN
              </h1>
              <span className="text-xs text-muted-foreground font-medium">
                Login Portal
              </span>
            </div>
          </div>
        </div>

        {/* Security Indicators */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <div className="w-3 h-3 bg-success rounded-full"></div>
            <span className="font-medium">Secure Connection</span>
          </div>
          <div className="text-xs text-muted-foreground font-mono">
            SSL Encrypted
          </div>
        </div>

        {/* Mobile Security Indicator */}
        <div className="md:hidden flex items-center">
          <div className="w-3 h-3 bg-success rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;