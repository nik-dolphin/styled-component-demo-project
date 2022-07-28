import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  Button,
  Input,
  Paragraph,
  Rotate,
  SecondButton,
  StyledButton,
  StyledLink,
} from "../style/dashboard";

const dashboard = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(true);
  StyledButton.defaultProps = {
    theme: {
      main: "#70b7db",
      bg: "mediumseagreen",
    },
  };

  const theme = {
    main: "mediumseagreen",
  };

  const childTheme = ({ main, bg }) => ({
    main: bg,
    bg: main,
  });
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
      <StyledButton>Noraml</StyledButton>
      <ThemeProvider theme={theme}>
        <StyledButton onClick={() => setShow(!show)}>Themed</StyledButton>
        <br />
        <Button>Theme</Button>
        <ThemeProvider theme={childTheme}>
          <Button>Inverted Theme</Button>
        </ThemeProvider>
      </ThemeProvider>
      <Paragraph show={show}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
        provident optio eius quaerat, consequuntur quae ab, aliquam eos
        recusandae ducimus soluta culpa natus commodi neque sunt nulla quia
        earum doloremque.
      </Paragraph>
      <ThemeProvider>
        <SecondButton>Second Button</SecondButton>
        <ThemeProvider>
          <SecondButton>Second Button</SecondButton>
        </ThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default dashboard;
