import React from "react";
import { ThemeProvider } from "styled-components";
import { Button, Input, Rotate, StyledLink } from "../style/dashboard";

const dashboard = () => {
  const theme = {
    main: "#3c3131",
  };

  Button.defaultProps = {
    theme: {
      main: "#3c3131",
    },
  };
  return (
    <>
      <Button>Button</Button>
      <br />
      <Button primary>Button</Button>
      <br />
      <StyledLink link="https://styled-components.com/">
        Custom Styled Link
      </StyledLink>
      <br />
      <Rotate>&lt; 💅🏾 &gt;</Rotate>
      <br />
      <Input defaultValue="hello" type="text" />
      <br />
      <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
      <br />
      <ThemeProvider theme={theme}>
        <Button>Themed</Button>
      </ThemeProvider>
    </>
  );
};

export default dashboard;
