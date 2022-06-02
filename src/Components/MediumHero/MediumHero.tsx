import { FC, ReactNode } from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';

const StyledMediumHero = styled.div`
  display: flex;
  height: 380px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(2,0,36);
  position: relative;
`;
const StyledHeader = styled.h1`
  margin-bottom: .1em;
`;
const StyledIngress = styled.div`
    border-top: 1px solid white;
    padding-top: .5em;
`;

const MediumHero: FC<{ title: string, ingress?: ReactNode }> = ({ title, ingress }) => {
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
