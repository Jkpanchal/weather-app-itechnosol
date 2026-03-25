import styled from "styled-components";

export const SearchButton = styled.button`
  position: absolute;
  right: 0.5rem; 

  padding: 0.5rem; 

  border-radius: 0.75rem; 

  color: #6b7280; 
  background: transparent;
  border: none;

  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    color: #2563eb; 
    background-color: #f3f4f6; 
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  @media (prefers-color-scheme: dark) {
    color: #9ca3af; 

    &:hover {
      color: #60a5fa; 
      background-color: #374151; 
    }
  }
`;