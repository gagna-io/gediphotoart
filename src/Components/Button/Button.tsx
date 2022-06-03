import { FC } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledPrimaryBytton = styled(Link)`
  border: 1px solid gray;
  padding: 0.5em 1.5em;
  background-color: white;
  font-size: 1.2em;
  &:hover {
      opacity: 0.9;
  }
`;

const Button: FC<{to: string, text?: string, type?:string}> = ({ to, text, type='primary' }) => {
  if (type === 'primary') {
    return <StyledPrimaryBytton to={to}>{text}</StyledPrimaryBytton>
  } else {
    return <Link to={to}>{text}</Link>
  }
};

Button.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
