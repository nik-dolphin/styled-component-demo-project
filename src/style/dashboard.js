import styled, { keyframes } from "styled-components";

const Link = ({ className, children, link }) => (
  <a className={className} href={link}>
    {children}
  </a>
);

export const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
  text-decoration: none;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

export const Button = styled.button`
  color: ${(props) => props.theme.main};
  background-color: ${(props) => (props.primary ? "#2795f391" : "#2ea72e")};
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.main};
`;

export const Input = styled.input`
  padding: 4px;
  margin: 4px;
  color: ${(props) => props.inputColor || "#599d11"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;
  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

export const SecondButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border: ${props => props.theme.color};
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.bg};;
`;

export const Paragraph = styled.p`
  display: ${props => props.show ? 'block' : 'none'};
  height: 100px;
  transition: height 2s linear;
  overflow: hidden;

  &:hover {
    height: 0px;
  }
`;  
