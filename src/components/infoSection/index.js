import React from "react";

import {
  InfoSectionContainer,
  Img,
  ColumnInfo,
  Title,
  Description,
  Button,
} from "./styles";

function InfoSection() {
  return (
    <>
      <InfoSectionContainer>
        <Img src={require("../../images/user.svg").default} />
        <ColumnInfo>
          <Title>tellus vitae neque faucibus</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            in pellentesque lacus, eget rutrum diam. Etiam ornare tellus vitae
            neque faucibus consectetur
          </Description>
          <Button>Click me</Button>
        </ColumnInfo>
      </InfoSectionContainer>
    </>
  );
}

export default InfoSection;
