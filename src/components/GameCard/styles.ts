import styled from "styled-components";

export const Container = styled.article`
  max-width: 23rem;
  padding: 1.75rem;
  background-color: ${({ theme }) => theme.colors.insideWidget};
  border-radius: 1.5rem;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
`;

export const DateText = styled.p`
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.oswald};
`;

export const DateRed = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;

export const h3 = styled.h3`
  font-family: ${({ theme }) => theme.fonts.oswald};
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const PropsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Props = styled.div`
  font-size: 0.75rem;
`;

export const PropsTitle = styled.h6`
  font-family: ${({ theme }) => theme.fonts.oswald};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.red};
  font-size: inherit;
  margin-bottom: 0.5rem;
`;

export const PropsText = styled.p`
  font-family: ${({ theme }) => theme.fonts.oswald};
  display: flex;
  align-items: center;
`;

export const PropsIcon = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  margin-right: 0.5rem;
`;
