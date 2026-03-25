import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem; 
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3); 
  color: #1f2937; 
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); 
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4); 
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgba(31, 41, 55, 0.4); 
    border: 1px solid rgba(55, 65, 81, 0.5); 
    color: #e5e7eb; 

    &:hover {
      background-color: rgba(55, 65, 81, 0.6);
    }
  }
`;
