import Image from 'next/image';
import React from 'react';

import Details from '../Details';

import Overview from '../Overview';
import { Container, InlineInfo } from './styles';

export default function MovieDetails({ details }) {
  const { budget, genres, overview, original_title, runtime, title } = details;
  const [year] = details.release_date.split('-');

  const detailed = [
    { name: 'Título original', content: original_title },
    { name: 'Lançamento', content: year },
    { name: 'Duração', content: runtime + 'min' },
    { name: 'Orçamento', content: `USD $${budget},00` },
    { name: 'Tagline', content: details.tagline },
  ];

  return (
    <Details
      {...{ title, imagePath: details.backdrop_path || details.poster_path }}
    >
      <Container>
        <InlineInfo>
          <span>{year}</span>
          <span>
            {(runtime / 60).toFixed()}h {runtime % 60}min
          </span>
        </InlineInfo>
        <InlineInfo>
          <span>
            <strong>Rating:</strong> {details.vote_average}
          </span>
          <span>
            <strong>Popularidade:</strong> {details.popularity}
          </span>
        </InlineInfo>
        <Overview {...{ overview }} />
        <hr style={{ margin: '0.25rem 0' }} />
        <div>
          <strong>Gêneros: </strong>
          {genres.map((item, index) => (
            <span key={item.id}>
              {!!index && ' | '}
              {item.name}
            </span>
          ))}
        </div>
        {detailed.map(({ name, content }) => (
          <div key={name}>
            <strong>{name}: </strong>
            <span>{content}</span>
          </div>
        ))}
      </Container>
    </Details>
  );
}
