import Image from 'next/image';
import React from 'react';

import { imageBaseUrl } from '../../../constants/imageUrl';
import { w342 } from '../../../constants/posterSizes';

import Overview from '../Overview';
import { Wrapper, Container, Backdrop, InlineInfo } from './styles';

export default function MovieDetails({ details }) {
  const { budget, genres, overview, original_title, runtime } = details;
  const [year] = details.release_date.split('-');

  const detailed = [
    { name: 'Título original', content: original_title },
    { name: 'Lançamento', content: year },
    { name: 'Duração', content: runtime + 'min' },
    { name: 'Orçamento', content: `USD $${budget},00` },
    { name: 'Tagline', content: details.tagline },
  ];

  return (
    <Wrapper>
      <Backdrop>
        <Image
          width={192}
          height={192}
          layout="fill"
          objectFit="cover"
          src={
            details.backdrop_path
              ? imageBaseUrl + w342 + details.backdrop_path
              : '/image-not-available.jpg'
          }
          alt="Backdrop"
        />
      </Backdrop>
      <Container>
        <h2>{details.title}</h2>
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
    </Wrapper>
  );
}
