import styled from "styled-components";

export const DashboardContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #eff6ff, #e0e7ff);
  transition: background 500ms ease, color 500ms ease;

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(to bottom right, #111827, #1e293b);
  }
`;
