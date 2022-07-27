import styled, { keyframes } from "styled-components";

const Link = ({ className, children, link }) => (
  <a className={className} href={link}>
    {children}
  </a>
);

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

export const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
  text-decoration: none;
`;

export const Button = styled.button`
  color:  ${props => props.theme.main};
  background-color: ${(props) => (props.primary ? "#2795f391" : "#2ea72e")};
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border: 2px solid ${props => props.theme.main};
`;

export const Input = styled.input`
  padding: 4px;
  margin: 4px;
  color: ${props => props.inputColor || '#599d11'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

