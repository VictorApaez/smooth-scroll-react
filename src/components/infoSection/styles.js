import styled from 'styled-components';

export const InfoSectionContainer = styled.div`
  height: 80vh;
  padding: 30px;
  display: grid;
  color: ${({ lightText }) => (lightText ? 'black' : 'white')};
  background-color: ${({ lightBg }) => (lightBg ? 'white' : 'black')};
  grid-auto-columns: minmax(1fr, 1fr);
  align-items: center;

  grid-template-areas: ${({ imgStart }) => (imgStart ? '"a b"' : '"b a"')};
  @media screen and (max-width: 768px) {
    grid-template-areas: 'a' 'b';
  }
`;
export const ImgConatiner = styled.div`
  display: flex;
  justify-content: center;
`;
export const Img = styled.img`
  grid-area: a;
  height: 180px;
`;
export const ColumnInfo = styled.div`
  grid-area: b;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 500px;
`;
export const Title = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  margin: 0;
`;
export const Description = styled.p`
  line-height: 1.5rem;
`;

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
