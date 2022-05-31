import { FC, ReactNode } from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';

const StyledMediumHero = styled.div`
    border: 1px solid red;
    display: flex;
    height: 380px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const StyledHeader = styled.h1``;
const StyledIngress = styled.div``;

const MediumHero: React.FC<{ title: string, ingress?: React.ReactNode }> = ({ title, ingress }) => {
  return (
    <StyledMediumHero>
      <StyledHeader>{title}</StyledHeader>
      {ingress && <StyledIngress>{ingress}</StyledIngress>}
    </StyledMediumHero>
  );
}

MediumHero.propTypes = {
  title: PropTypes.string.isRequired,
  ingress: PropTypes.node
};
  
export default MediumHero;
