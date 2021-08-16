import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 18px;
  margin: 2px;
`;

const Grid = props => {
  return <Container>{props.children}</Container>;
};

export default Grid;