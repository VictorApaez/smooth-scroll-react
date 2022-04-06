import react from "react";
import styled from "styled-components";

export const InfoSectionContainer = styled.div`
  height: 80vh;
  padding: 30px;
  display: grid;
  color: white;
  background-color: rgb(0, 0, 0);
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "a b";
  @media screen and (max-width: 768px) {
    grid-template-areas:
      "a"
      "b";
  }
`;

export const Img = styled.img`
  grid-area: a;
  height: 180px;
`;
export const ColumnInfo = styled.div`
  grid-area: b;
`;
export const Title = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
`;
export const Description = styled.p``;
export const Button = styled.div`
  display: inline-block;
  border-radius: 50px;
  color: white;
  background-color: blue;
  text-decoration: none;
  padding: 10px 22px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: lightblue;
    color: black;
  }
`;
