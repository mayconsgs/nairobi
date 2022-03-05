import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  padding: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const LogoContainer = styled.figure`
  align-self: flex-end;
  margin-top: 3rem;
  position: relative;

  height: 3.5rem;
  aspect-ratio: 212 / 56;

  ${media.lessThan("medium")`
    height: 2.5rem;
  `}
`;

export const Content = styled.div`
  max-width: 980px;
  margin: auto 0;
  width: 100%;
`;

export const TextContainer = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  margin-top: 2rem;
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: bold;

  ${media.lessThan("medium")`
    font-size: 2rem;
  `}
`;

export const Description = styled.span`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  display: block;
  font-family: ${({ theme }) => theme.fonts.poppins};

  ${media.lessThan("medium")`
    font-size: 1rem;
  `}
`;
