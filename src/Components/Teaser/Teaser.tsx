import { FC } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Button from "../Button/Button";

interface TeaserProps {
    imageAlignment: string;
}

const StyledTeaser = styled.div<TeaserProps>`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  @media only screen and (min-device-width: 768px) {
    flex-direction: ${p => p.imageAlignment === 'right' ? 'row' : 'row-reverse'};
  }
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 1em;
  @media only screen and (min-device-width: 768px) {
    flex-basis: 50%;
    width: 50%;
  }
`;

const StyledImage = styled.div`
  @media only screen and (min-device-width: 768px) {
    flex-basis: 50%;
    width: 50%;
  }
`;

const Teaser: FC<{imageAlignment?: string, title: string, text?: string, image: string, action?: string, actionText?: string}> = ({imageAlignment = 'right', title, text, image, action, actionText}) => {
  return (
    <StyledTeaser imageAlignment={imageAlignment}>
      <StyledContent>
        <h1>{title}</h1>
        <p>{text}</p>
        {action && <Button to={action} text={actionText} />}
      </StyledContent>
      <StyledImage>
        <img src={image} alt={title} />
      </StyledImage>
    </StyledTeaser>
  );
};

Teaser.propTypes = {
  imageAlignment: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  image: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  actionText: PropTypes.string.isRequired,
}

export default Teaser;
