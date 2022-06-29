import React from 'react';
import { Wrapper, StyledNavLink } from './styled';

export const Tabs = () => {
  return (
    <Wrapper>
      <StyledNavLink to="/">Search</StyledNavLink>
      <StyledNavLink to="tags">Tags</StyledNavLink>
      <StyledNavLink to="article">Article</StyledNavLink>
      <StyledNavLink to="widget">Widget</StyledNavLink>
    </Wrapper>
  )
}
