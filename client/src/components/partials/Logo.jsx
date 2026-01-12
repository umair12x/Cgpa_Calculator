import React from "react";
import styled, { keyframes } from "styled-components";

const Logo = () => {
  return (
    <StyledWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Main gradient background */}
        <defs>
          <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#1447a6" />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.8" />
          </linearGradient>
          <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </radialGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Glow effect */}
        <circle
          cx="100"
          cy="100"
          r="75"
          fill="url(#glowGradient)"
          className="glow blue-"
        />

        {/* Outer rotating ring */}
        <g className="rotating-ring">
          <path
            d="M100,40 A60,60 0 1,1 100,160 A60,60 0 1,1 100,40"
            fill="none"
            stroke="url(#mainGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="188.5 188.5"
            strokeDashoffset="0"
            className="ring"
          />
        </g>

        {/* Main geometric shape - Diamond */}
        <g className="main-shape">
          <polygon
            points="100,50 150,100 100,150 50,100"
            fill="url(#mainGradient)"
            className="diamond"
          />

          {/* Inner diamond accent */}
          <polygon
            points="100,70 130,100 100,130 70,100"
            fill="url(#accentGradient)"
            className="inner-diamond"
          />

          {/* Center dot */}
          <circle
            cx="100"
            cy="100"
            r="8"
            fill="#fef9c2"
            className="center-dot"
          />
        </g>

        {/* Floating particles */}
        <g className="particles">
          <circle cx="70" cy="130" r="2" fill="##ff6467" className="particle" />
          <circle cx="130" cy="70" r="2" fill="#9810fa" className="particle" />
          <circle cx="70" cy="70" r="2" fill="#00bc7d" className="particle" />
          <circle cx="130" cy="130" r="2" fill="#fe9a00" className="particle" />
          <circle
            cx="100"
            cy="40"
            r="1.5"
            fill="#0ea5e9"
            className="particle yello"
          />
          <circle
            cx="100"
            cy="160"
            r="1.5"
            fill="#10b981"
            className="particle"
          />
          <circle
            cx="40"
            cy="100"
            r="1.5"
            fill="#0ea5e9"
            className="particle"
          />
          <circle
            cx="160"
            cy="100"
            r="1.5"
            fill="#10b981"
            className="particle"
          />
        </g>
      </svg>
    </StyledWrapper>
  );
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const particleFloat = keyframes`
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0.7;
  }
  33% {
    transform: translate(3px, -3px);
    opacity: 1;
  }
  66% {
    transform: translate(-2px, 2px);
    opacity: 0.5;
  }
`;

const glowPulse = keyframes`
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.05);
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  svg {
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 300px;
    min-width: 100px;
    min-height: 100px;
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
  }

  /* Responsive sizing */
  @media (max-width: 768px) {
    svg {
      max-width: 200px;
      max-height: 200px;
    }
  }

  @media (max-width: 480px) {
    svg {
      max-width: 150px;
      max-height: 150px;
    }
    .logo-text {
      font-size: 10px !important;
    }
  }

  .glow {
    animation: ${glowPulse} 4s ease-in-out infinite;
  }

  .rotating-ring {
    transform-origin: center;
    animation: ${rotate} 20s linear infinite;

    .ring {
      animation: ${pulse} 3s ease-in-out infinite;
    }
  }

  .main-shape {
    .diamond {
      animation: ${float} 4s ease-in-out infinite;
      filter: url(#glow);
    }

    .inner-diamond {
      animation: ${float} 4s ease-in-out infinite reverse;
    }

    .center-dot {
      animation: ${pulse} 2s ease-in-out infinite;
    }
  }

  .particles {
    .particle {
      &:nth-child(1) {
        animation: ${particleFloat} 3s ease-in-out infinite;
      }
      &:nth-child(2) {
        animation: ${particleFloat} 3s ease-in-out infinite 0.5s;
      }
      &:nth-child(3) {
        animation: ${particleFloat} 3s ease-in-out infinite 1s;
      }
      &:nth-child(4) {
        animation: ${particleFloat} 3s ease-in-out infinite 1.5s;
      }
      &:nth-child(5) {
        animation: ${particleFloat} 3s ease-in-out infinite 0.2s;
      }
      &:nth-child(6) {
        animation: ${particleFloat} 3s ease-in-out infinite 0.8s;
      }
      &:nth-child(7) {
        animation: ${particleFloat} 3s ease-in-out infinite 1.2s;
      }
      &:nth-child(8) {
        animation: ${particleFloat} 3s ease-in-out infinite 1.8s;
      }
    }
  }

  .logo-text {
    opacity: 0.8;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    svg {
      filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
    }

    .logo-text {
      fill: #ffffff;
      opacity: 0.7;
    }
  }
`;

export default Logo;
