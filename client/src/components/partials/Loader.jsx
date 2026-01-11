import React from "react";
import styled, { keyframes } from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader-container">
        {/* Main Atom Spinner */}
        <div className="atom-spinner">
          <div className="nucleus">
            <div className="electron-ring electron-1">
              <div className="electron"></div>
            </div>
            <div className="electron-ring electron-2">
              <div className="electron"></div>
            </div>
            <div className="electron-ring electron-3">
              <div className="electron"></div>
            </div>
          </div>
        </div>
        
        {/* Floating Particles */}
        <div className="particles">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="particle" style={{ '--i': i }}></div>
          ))}
        </div>
        
        {/* Loading Text */}
        <div className="loading-text">
          <span className="text-char">A</span>
          <span className="text-char">n</span>
          <span className="text-char">a</span>
          <span className="text-char">l</span>
          <span className="text-char">y</span>
          <span className="text-char">z</span>
          <span className="text-char">i</span>
          <span className="text-char">n</span>
          <span className="text-char">g</span>
          <span className="text-dots">
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <div className="progress-text">Fetching academic records</div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
`;

const progress = keyframes`
  0% { width: 0%; }
  100% { width: 100%; }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

const StyledWrapper = styled.div`
  .loader-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 40px;
    background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,253,250,0.9) 100%);
    border-radius: 24px;
    backdrop-filter: blur(20px);
    border: 1px solid rgba(16, 185, 129, 0.1);
    box-shadow: 
      0 20px 60px rgba(16, 185, 129, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.5);
    
    @media (prefers-color-scheme: dark) {
      background: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(6, 78, 59, 0.9) 100%);
      border: 1px solid rgba(16, 185, 129, 0.2);
      box-shadow: 
        0 20px 60px rgba(16, 185, 129, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }
  }

  .atom-spinner {
    position: relative;
    width: 120px;
    height: 120px;
  }

  .nucleus {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    background: linear-gradient(135deg, #10b981, #0ea5e9);
    border-radius: 50%;
    animation: ${pulse} 2s ease-in-out infinite;
    box-shadow: 
      0 0 30px rgba(16, 185, 129, 0.5),
      0 0 60px rgba(14, 165, 233, 0.3);
  }

  .electron-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 2px dashed rgba(16, 185, 129, 0.3);
    
    &::before {
      content: '';
      position: absolute;
      inset: -2px;
      border-radius: 50%;
      border: 2px solid transparent;
      border-top: 2px solid #10b981;
      border-right: 2px solid #0ea5e9;
    }
  }

  .electron-1 {
    width: 100px;
    height: 100px;
    animation: ${rotate} 4s linear infinite;
    
    &::before {
      animation: ${rotate} 3s linear infinite reverse;
    }
  }

  .electron-2 {
    width: 80px;
    height: 80px;
    animation: ${rotate} 3s linear infinite reverse;
    
    &::before {
      animation: ${rotate} 4s linear infinite;
    }
  }

  .electron-3 {
    width: 60px;
    height: 60px;
    animation: ${rotate} 5s linear infinite;
    
    &::before {
      animation: ${rotate} 2s linear infinite reverse;
    }
  }

  .electron {
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    background: linear-gradient(135deg, #0ea5e9, #10b981);
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(14, 165, 233, 0.8);
  }

  .particles {
    position: absolute;
    width: 200px;
    height: 200px;
  }

  .particle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 4px;
    background: linear-gradient(135deg, #10b981, #0ea5e9);
    border-radius: 50%;
    animation: ${float} 3s ease-in-out infinite;
    animation-delay: calc(var(--i) * 0.25s);
    opacity: 0.6;
    
    &:nth-child(odd) {
      background: linear-gradient(135deg, #0ea5e9, #8b5cf6);
    }
  }

  .loading-text {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    
    @media (prefers-color-scheme: dark) {
      color: #f1f5f9;
    }
  }

  .text-char {
    display: inline-block;
    animation: ${bounce} 1s ease-in-out infinite;
    animation-delay: calc(var(--char-index) * 0.1s);
  }

  .text-dots {
    display: inline-flex;
    gap: 2px;
  }

  .dot {
    animation: ${bounce} 1.5s ease-in-out infinite;
    
    &:nth-child(1) { animation-delay: 0s; }
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.4s; }
  }

  .progress-container {
    width: 280px;
    max-width: 100%;
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background: rgba(16, 185, 129, 0.1);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 12px;
    
    @media (prefers-color-scheme: dark) {
      background: rgba(16, 185, 129, 0.2);
    }
  }

  .progress-fill {
    width: 0%;
    height: 100%;
    background: linear-gradient(90deg, #10b981, #0ea5e9, #8b5cf6);
    border-radius: 4px;
    animation: ${progress} 3s ease-in-out infinite;
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
  }

  .progress-text {
    font-size: 0.875rem;
    color: #64748b;
    text-align: center;
    font-weight: 500;
    
    @media (prefers-color-scheme: dark) {
      color: #94a3b8;
    }
  }

  /* Responsive */
  @media (max-width: 768px) {
    .loader-container {
      padding: 30px;
      gap: 30px;
    }
    
    .atom-spinner {
      width: 100px;
      height: 100px;
    }
    
    .electron-1 { width: 85px; height: 85px; }
    .electron-2 { width: 65px; height: 65px; }
    .electron-3 { width: 45px; height: 45px; }
    
    .loading-text {
      font-size: 1.25rem;
    }
    
    .progress-container {
      width: 240px;
    }
  }

  @media (max-width: 480px) {
    .loader-container {
      padding: 20px;
      gap: 20px;
    }
    
    .atom-spinner {
      width: 80px;
      height: 80px;
    }
    
    .electron-1 { width: 70px; height: 70px; }
    .electron-2 { width: 50px; height: 50px; }
    .electron-3 { width: 30px; height: 30px; }
    
    .nucleus {
      width: 20px;
      height: 20px;
    }
    
    .loading-text {
      font-size: 1.1rem;
    }
    
    .progress-container {
      width: 200px;
    }
  }
`;

export default Loader;