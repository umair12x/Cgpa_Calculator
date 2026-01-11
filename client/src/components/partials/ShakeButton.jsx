import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const ShakeButton = ({ 
  icon, 
  link, 
  tooltip = "",
  variant = "primary",
  size = "medium"
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const sizeClasses = {
    small: "w-10 h-10 text-lg",
    medium: "w-12 h-12 text-xl",
    large: "w-14 h-14 text-2xl"
  };

  const variantClasses = {
    primary: "from-emerald-500 to-cyan-500",
    secondary: "from-sky-500 to-blue-500",
    success: "from-green-500 to-emerald-500",
    warning: "from-amber-500 to-yellow-500",
    danger: "from-red-500 to-pink-500",
    dark: "from-gray-700 to-gray-900",
    light: "from-gray-100 to-gray-300"
  };

  const handleClick = (e) => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <StyledWrapper>
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="button-link"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={false}
        animate={{
          scale: isClicked ? 0.9 : 1,
          rotate: isHovered ? [0, -10, 10, -10, 10, 0] : 0
        }}
        transition={{
          rotate: { duration: 0.6, ease: "easeInOut" },
          scale: { duration: 0.2 }
        }}
      >
        {/* Main Button */}
        <button 
          className={`gradient-button ${sizeClasses[size]} ${variantClasses[variant]} ${
            isHovered ? 'hovered' : ''
          } ${isClicked ? 'clicked' : ''}`}
        >
          {/* Button Glow */}
          <div className="button-glow"></div>
          
          {/* Button Content */}
          <div className="button-content">
            {React.cloneElement(icon, {
              className: `button-icon ${isHovered ? 'animate-bell' : ''}`
            })}
          </div>
          
          {/* Ripple Effect */}
          <div className={`ripple ${isClicked ? 'active' : ''}`}></div>
          
          {/* Particle Effects */}
          {isHovered && (
            <>
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
            </>
          )}
        </button>
        
        {/* Tooltip */}
        {tooltip && isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="tooltip"
          >
            {tooltip}
          </motion.div>
        )}
      </motion.a>
    </StyledWrapper>
  );
};

const bellRing = keyframes`
  0%, 100% { 
    transform: rotate(0deg); 
  }
  10% { 
    transform: rotate(15deg); 
  }
  20% { 
    transform: rotate(-15deg); 
  }
  30% { 
    transform: rotate(10deg); 
  }
  40% { 
    transform: rotate(-10deg); 
  }
  50% { 
    transform: rotate(5deg); 
  }
  60% { 
    transform: rotate(-5deg); 
  }
  70% { 
    transform: rotate(2deg); 
  }
  80% { 
    transform: rotate(-2deg); 
  }
  90% { 
    transform: rotate(1deg); 
  }
`;

const float = keyframes`
  0%, 100% { 
    transform: translateY(0) rotate(0deg); 
    opacity: 0; 
  }
  50% { 
    opacity: 1; 
  }
  0% { 
    transform: translateY(0) rotate(0deg); 
  }
  100% { 
    transform: translateY(-60px) rotate(360deg); 
  }
`;

const pulse = keyframes`
  0%, 100% { 
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); 
  }
  70% { 
    box-shadow: 0 0 0 20px rgba(16, 185, 129, 0); 
  }
  100% { 
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); 
  }
`;

const StyledWrapper = styled.div`
  .button-link {
    display: inline-block;
    position: relative;
    text-decoration: none;
  }

  .gradient-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
    color: white;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 
      0 10px 30px rgba(0, 0, 0, 0.2),
      0 4px 15px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 -1px 0 rgba(0, 0, 0, 0.2);
    
    &.hovered {
      animation: ${pulse} 1.5s infinite;
      box-shadow: 
        0 15px 40px rgba(0, 0, 0, 0.3),
        0 6px 20px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.4),
        inset 0 -1px 0 rgba(0, 0, 0, 0.1);
    }
    
    &.clicked {
      transform: scale(0.95);
    }
    
    /* Variant gradients */
    &.from-emerald-500\\/to-cyan-500 {
      --gradient-start: #10b981;
      --gradient-end: #06b6d4;
    }
    
    &.from-sky-500\\/to-blue-500 {
      --gradient-start: #0ea5e9;
      --gradient-end: #3b82f6;
    }
    
    &.from-green-500\\/to-emerald-500 {
      --gradient-start: #22c55e;
      --gradient-end: #10b981;
    }
    
    &.from-amber-500\\/to-yellow-500 {
      --gradient-start: #f59e0b;
      --gradient-end: #eab308;
    }
    
    &.from-red-500\\/to-pink-500 {
      --gradient-start: #ef4444;
      --gradient-end: #ec4899;
    }
    
    &.from-gray-700\\/to-gray-900 {
      --gradient-start: #374151;
      --gradient-end: #111827;
      color: #f3f4f6;
    }
    
    &.from-gray-100\\/to-gray-300 {
      --gradient-start: #f3f4f6;
      --gradient-end: #d1d5db;
      color: #374151;
    }
  }

  .button-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.3) 0%,
      transparent 70%
    );
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .gradient-button.hovered .button-glow {
    opacity: 1;
  }

  .button-content {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button-icon {
    transition: all 0.3s ease;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }

  .button-icon.animate-bell {
    animation: ${bellRing} 0.8s ease-in-out;
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    opacity: 0;
  }

  .ripple.active {
    animation: rippleEffect 0.6s linear;
  }

  @keyframes rippleEffect {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    pointer-events: none;
    opacity: 0;
  }

  .particle-1 {
    top: 20%;
    left: 20%;
    animation: ${float} 1s ease-out forwards;
  }

  .particle-2 {
    top: 30%;
    right: 20%;
    animation: ${float} 1s 0.1s ease-out forwards;
  }

  .particle-3 {
    bottom: 20%;
    left: 40%;
    animation: ${float} 1s 0.2s ease-out forwards;
  }

  .tooltip {
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    
    &::before {
      content: '';
      position: absolute;
      top: -6px;
      left: 50%;
      transform: translateX(-50%);
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid rgba(0, 0, 0, 0.9);
    }
  }

  /* Dark mode adjustments */
  @media (prefers-color-scheme: dark) {
    .gradient-button.from-gray-100\\/to-gray-300 {
      box-shadow: 
        0 10px 30px rgba(0, 0, 0, 0.3),
        0 4px 15px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.1),
        inset 0 -1px 0 rgba(0, 0, 0, 0.4);
    }
  }

  /* Responsive sizes */
  @media (max-width: 768px) {
    .gradient-button {
      &.w-14 {
        width: 12px;
        height: 12px;
        font-size: 1.5rem;
      }
      
      &.w-12 {
        width: 10px;
        height: 10px;
        font-size: 1.25rem;
      }
    }
  }

  @media (max-width: 480px) {
    .gradient-button {
      &.w-14, &.w-12 {
        width: 10px;
        height: 10px;
        font-size: 1.125rem;
      }
    }
    
    .tooltip {
      font-size: 11px;
      padding: 6px 12px;
      bottom: -35px;
    }
  }
`;

export default ShakeButton;