import { useState } from 'react';

import styled from 'styled-components';

const ControlButton = styled.button`
  background: transparent;
  border: 0;
  color: blue;
  cursor: pointer;
  font-weight: 600;
  margin-left: auto;
  display: block;
`;

export default function Overview({ overview }) {
  const [detailed, setDetailed] = useState(false);

  const max = 120

  return (
    <>
      <p>
        {overview.length > max ? (
          <>
            {overview.slice(0, max)}
            {!detailed && '...'}
            <span style={{ display: detailed ? 'inline' : 'none' }}>
              {overview.slice(max, overview.length)}
            </span>
          </>
        ) : (
          overview
        )}
      </p>
      {overview.length > 200 && (
        <ControlButton onClick={() => setDetailed(b => !b)}>
          Ver {detailed ? 'menos' : 'mais'}
        </ControlButton>
      )}
    </>
  );
}
