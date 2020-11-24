import React, { useState } from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';



const Container = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60vw;
  height: 120px;
  padding: 0;
`;
const Link = styled.a`
  font-size: 32px;
  text-decoration: none;
  user-select: none;
  color: ${({ theme, selected }) => selected ? theme.gray0 : theme.gray2};
  transition: color .2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.gray0};
  }
`;

const Navigation = ({ page }) => {
  const [ pageList ] = useState([
    ['join', '/join'],
    ['home', '/'],
    ['create', '/create'],
    ['about', '/about']
  ]);

  return (
    <Container>
      { pageList.map(([ name, URL ]) => (
        <NextLink href={URL} passHref key={URL}>
          <Link selected={ URL === page }>{ name }</Link>
        </NextLink>
      ))}
    </Container>
  );
}

export default Navigation;
