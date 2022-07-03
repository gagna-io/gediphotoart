import { FC } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledRadioButton = styled.input`
  border: 1px solid gray;
  padding: 0.5em 1.5em;
  background-color: white;
  font-size: 1.2em;
  color: #000000;
  font-weight: strong;
  border-radius: 4px;
  &:hover {
      opacity: 0.9;
  }
`;

const RadioButton: FC<{label: string, type?:string}> = ({ label, type='primary' }) => {
  if (type === 'primary') {
    return <StyledRadioButton />
  } else {
    return <><input type="radio" /><label>{label}</label></>
  }
};

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default RadioButton;
