import styled, { css } from "styled-components";
import { ButtonVariant } from "./Button.types";

export const Button = styled.button<{ variant?: ButtonVariant }>`
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;
  line-height: 1.75rem;
  transition: 0.2s filter;

  &:hover,
  &:active {
    filter: brightness(0.7);
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.white};
  }

  &:disabled {
    filter: grayscale(0.8);
  }

  ${({ variant = "raised", theme }) => {
    switch (variant) {
      case "raised":
        return css`
          background-color: ${theme.colors.red};
          color: ${theme.colors.white};
          font-family: ${theme.fonts.inter};
          font-weight: normal;
        `;

      case "outline":
        return css`
          border: 2px solid ${theme.colors.red};
          background-color: unset;
          color: ${theme.colors.red};
          font-family: ${theme.fonts.inter};
          font-weight: bold;
        `;
    }
  }}
`;
