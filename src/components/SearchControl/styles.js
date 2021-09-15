import styled from 'styled-components';

const controlInputAttrs = { placeholder: 'Procurar filme...' };

export const ControlWrapper = styled.form`
  border: 1px solid #ddd;
`;

export const ControlInput = styled.input.attrs(controlInputAttrs)`
  padding: 0.25rem 1rem;
  width: 100%;
`;
