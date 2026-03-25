import styled from "styled-components";

export const Container = styled.div`
  max-width: 64rem; 
  margin-left: auto;
  margin-right: auto;

  padding-left: 1rem;  
  padding-right: 1rem;

  padding-top: 2rem;  
  padding-bottom: 2rem;
  @media (min-width: 768px) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;
