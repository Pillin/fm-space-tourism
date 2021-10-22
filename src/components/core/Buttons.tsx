import styled from "@emotion/styled";

export const PrimaryButton = styled.button<{ color?: string }>`
  border-style: solid;
  border: 0px;
  border-radius: 10px;
  min-width: 106px;
  height: 50px;
  font-weight: 700;
  font-size: 16px;
  background-color: #0079ff;
  color: white;
  &:hover {
    background-color: #60abff;
  }
`;
