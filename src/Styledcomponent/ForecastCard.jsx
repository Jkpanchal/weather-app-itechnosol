import styled from "styled-components";

export const ForeCastCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;              
  border-radius: 1rem;       

  background: rgba(255, 255, 255, 0.6);  
  backdrop-filter: blur(12px);            

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); 
  border: 1px solid rgba(255, 255, 255, 0.2);

  transition: background-color 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.8); 
  }

  @media (prefers-color-scheme: dark) {
    background: rgba(31, 41, 55, 0.6); 
    border: 1px solid rgba(55, 65, 81, 0.3); 

    &:hover {
      background: rgba(55, 65, 81, 0.8); 
    }
  }
`;