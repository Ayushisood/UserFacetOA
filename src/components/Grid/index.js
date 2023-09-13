import React from "react";
import styled from "styled-components";
import { CharBlock} from "../Block";

export const Grid = ({ stage }) => {
  
    return (
    <GridWrapper width={stage[0].length} height={stage.length}>
      {stage.map((row) =>
        row.map((cell, index) => <CharBlock key={index} char={cell[0]} type={cell[2]}/>)
      )}
    </GridWrapper>
  );
};

const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    1fr
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  width: 100%;
  max-width: 80%;
  margin: auto;
  background: #0d252c;
  @media (max-width: 900px) {
    max-width: 90%;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
