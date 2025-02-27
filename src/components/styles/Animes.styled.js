import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

export const Pagination = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

export const PageButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: ${(props) => (props.active ? "#3498db" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${(props) => (props.active ? "#2980b9" : "#f1f1f1")};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
