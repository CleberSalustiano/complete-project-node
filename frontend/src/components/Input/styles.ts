import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  max-height: 60px;
  color: #656360;

  display: flex;
  align-items: center;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #656360;
    }
  }
  & + div {
    margin-top: 8px;
  }
  svg {
    margin-right: 16px;
  }
`;