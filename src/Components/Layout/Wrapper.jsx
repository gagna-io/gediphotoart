import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
`;

const Wrapper = ({ children }) => {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  );
}

export default Wrapper;
