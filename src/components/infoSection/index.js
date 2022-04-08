import React from 'react';

import {
  InfoSectionContainer,
  ImgConatiner,
  Img,
  ColumnInfo,
  Title,
  Description,
  Button,
} from './styles';

function InfoSection({ title, paragraph, imgStart, img, lightBg, lightText }) {
  return (
    <>
      <InfoSectionContainer
        imgStart={imgStart}
        lightBg={lightBg}
        lightText={lightText}
      >
        <ImgConatiner>
          <Img src={img} />
        </ImgConatiner>

        <ColumnInfo>
          <Title>{title}</Title>
          <Description>{paragraph}</Description>
          <Button>Click me</Button>
        </ColumnInfo>
      </InfoSectionContainer>
    </>
  );
}

export default InfoSection;
