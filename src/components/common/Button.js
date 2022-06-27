import styled, { css } from "styled-components";

const Button = styled.button`
  background: ${(props) =>
    props.secondary ? props.theme.secondaryColor : props.theme.primaryColor};
  color: ${(p) => p.theme.whiteColor};
  ${(props) =>
    props.large
      ? css`
          padding: 10px;
          font-size: 20px;
          border-radius: 6px;
        `
      : css`
          padding: 8px;
          font-size: 16px;
          border-radius: 4px;
        `}
  border: none;
  box-shadow: none;
  width: 100%;
  /* margin: 0 10px 10px 0; */

  &:disabled {
    background: #eee;
    color: #666;
  }
`;

export { Button };
