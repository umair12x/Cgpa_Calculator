import React from "react";
import styled, { keyframes } from "styled-components";
import { FaSpinner } from "react-icons/fa";

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const Button = ({ text, disabled, isLoading, onClick, type = "button" }) => {
  return (
    <StyledWrapper>
      <button
        className={`gradient-button ${isLoading ? "loading" : ""} ${disabled ? "disabled" : ""}`}
        disabled={disabled || isLoading}
        onClick={onClick}
        type={type}
      >
        <span className="button-glow"></span>
        <span className="button-content">
          {isLoading ? (
            <>
              <FaSpinner className="spinner" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <span className="button-text">{text}</span>
              <span className="button-arrow">→</span>
            </>
          )}
        </span>
        <span className="button-shine"></span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .gradient-button {
    position: relative;
    width: 100%;
    height: 56px;
    border: none;
    border-radius: 16px;
    background: linear-gradient(
      135deg,
      #10b981 0%,
      #0ea5e9 50%,
      #10b981 100%
    );
    background-size: 200% 100%;
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 
      0 10px 30px rgba(16, 185, 129, 0.3),
      0 4px 12px rgba(14, 165, 233, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    
    &:hover:not(.disabled):not(.loading) {
      transform: translateY(-2px);
      box-shadow: 
        0 15px 40px rgba(16, 185, 129, 0.4),
        0 6px 20px rgba(14, 165, 233, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
      background-position: 100% 0;
    }
    
    &:active:not(.disabled):not(.loading) {
      transform: translateY(0);
      transition-duration: 0.1s;
    }
  }

  .gradient-button.disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%);
    box-shadow: 0 4px 12px rgba(148, 163, 184, 0.2);
  }

  .button-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .gradient-button:hover:not(.disabled):not(.loading) .button-glow {
    opacity: 1;
  }

  .button-content {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    height: 100%;
  }

  .button-text {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .button-arrow {
    font-size: 1.4rem;
    transition: transform 0.3s ease;
  }

  .gradient-button:hover:not(.disabled):not(.loading) .button-arrow {
    transform: translateX(4px);
  }

  .spinner {
    animation: spin 1s linear infinite;
    font-size: 1.2rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .button-shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    animation: ${shimmer} 2s infinite;
  }

  .gradient-button.loading {
    cursor: progress;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }

  /* Success Animation */
  .gradient-button.success {
    background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
    animation: successPop 0.6s ease-out;
  }

  @keyframes successPop {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  /* Responsive */
  @media (max-width: 768px) {
    .gradient-button {
      height: 52px;
      font-size: 1rem;
      border-radius: 14px;
    }
  }

  @media (max-width: 480px) {
    .gradient-button {
      height: 48px;
      font-size: 0.95rem;
      border-radius: 12px;
    }
    
    .button-content {
      gap: 8px;
    }
  }
`;

export default Button;