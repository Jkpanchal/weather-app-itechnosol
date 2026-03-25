import styled from "styled-components";

export const Input = styled.input`
  display: block;
  width: 100%;

  padding: 1rem;        
  padding-left: 2.5rem; 

  font-size: 0.875rem;  

  color: #111827;       

  border: 1px solid #d1d5db; 
  border-radius: 1rem;       

  background-color: rgba(255, 255, 255, 0.8); 
  backdrop-filter: blur(4px); 

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); 

  transition: all 0.3s ease;

  &::placeholder {
    color: #9ca3af; 
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px #3b82f6; 
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgba(31, 41, 55, 0.8); 
    border: 1px solid #4b5563; 
    color: #ffffff;

    &::placeholder {
      color: #9ca3af; 
    }

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 1px #3b82f6;
    }
  }
`;
