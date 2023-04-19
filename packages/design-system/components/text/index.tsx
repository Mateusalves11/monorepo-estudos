import React from "react";
import styled from "styled-components";

const StyledText = styled.span`
  background-color: red;
`;

interface TextProps {
  variant?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}

export function Text({ children, variant, ...props }: TextProps) {
  return (
    <StyledText as={variant} {...props}>
      {children}
    </StyledText>
  );
}
