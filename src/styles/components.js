/* eslint-disable array-callback-return */
import styled, { css } from "styled-components";
import { breackpoints } from "./responsive";

export const MagicSquare = styled.div`
  width: 300px;
  height: 300px;
  border: 2px solid black;
  ${({ squareSize }) => {
    if (squareSize) {
      return breackpoints.map((breackpoint) => {
        if (squareSize[breackpoint.name]) {
          return css`
            @media (max-width: ${breackpoint.media}px) {
              width: ${squareSize[breackpoint.name]}px;
              height: ${squareSize[breackpoint.name]}px;
            }
          `;
        }
      });
    }
  }}
`;
