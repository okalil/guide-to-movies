import styled from 'styled-components';

const controlInputAttrs = { placeholder: 'Procurar filme...' };

export const ControlWrapper = styled.form`
  height: inherit;
`;

export const ControlInput = styled.input.attrs(controlInputAttrs)`
  border: 1px solid #ddd;
  border-radius: 7px;
  padding: 0.25rem 1rem;
  width: 100%;
  height: 100%;

  &:focus-visible {
    outline: ${({ theme }) => theme.colors.lightBlue} auto 1px;
  }
`;
