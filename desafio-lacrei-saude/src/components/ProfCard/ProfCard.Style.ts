import styled from "styled-components";

export const ProfiCard = styled.div`
  border: 1px solid rgb(176, 224, 211);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 32px;
  margin-bottom: 32px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.04);
  }

  h2 {
    font-size: 22px;
    padding-bottom: 12px;
    font-weight: bold;
  }

  h3 {
    font-size: 16px;
    padding-bottom: 4px;
  }

  span {
    font-weight: bold;
    font-weight: 500;
  }
`;
