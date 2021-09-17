import styled from 'styled-components';
import Image from 'next/image';

import { imageBaseUrl } from '../../../constants/imageUrl';
import { w342 } from '../../../constants/posterSizes';

import Overview from '../Overview';
import { Wrapper, Backdrop } from './styles';
import convertDate from '../../../utils/convertDate';

export const InlineInfo = styled.div`
  display: flex;
  position: relative;
  color: #525252;

  > span {
    font-weight: 600;
  }

  span + span {
    margin-left: 1rem;
  }
  span:nth-child(2)::before {
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background: #000;
    position: absolute;
    top: 50%;
    transform: translate(-235%, -50%);
  }
`;

export const Container = styled.div`
  padding: 0.25rem 1rem 0.5rem;

  ${[1, 2, 3, 4].map(
    n => `> :nth-child(${n}) {
        margin-bottom: 0.125rem;
      } `
  )}
`;

export default function Details({ details }) {
  const type = details.media_type;

  const imagePath =
    type === 'person'
      ? details.profile_path
      : details.backdrop_path || details.poster_path;
  const name = type === 'movie' ? details.title : details.name;

  return (
    <Wrapper>
      <Backdrop>
        <Image
          layout="fill"
          objectFit="cover"
          src={
            imagePath
              ? imageBaseUrl + w342 + imagePath
              : '/image-not-available.jpg'
          }
          alt="Backdrop"
        />
      </Backdrop>
      <h2>{name}</h2>
      <Switch {...{ details }} />
    </Wrapper>
  );
}

function Switch({ details }) {
  const type = details.media_type;

  if (type === 'movie' || type === 'tv') {
    const { overview } = details;
    const releaseYear = (details.release_date || details.first_air_date)?.split(
      '-'
    )[0];
    const lastAirYear = details.last_air_date?.split('-')[0];
    const runtime = details.runtime || details.episode_runtime;

    const detailed = [
      {
        name: 'Título original',
        content: details.original_title || details.original_name,
      },
      { name: 'Lançamento', content: releaseYear },
      { name: 'Duração', content: runtime ? runtime + 'min' : null },
      { name: 'Tagline', content: details.tagline },
    ];

    if (type === 'movie') {
      const { budget } = details;
      detailed.push({
        name: 'Orçamento',
        content: budget ? `USD $${budget},00` : null,
      });
    }

    return (
      <Container>
        <InlineInfo>
          <span>
            {type === 'movie'
              ? releaseYear
              : releaseYear.concat('-', lastAirYear)}
          </span>
          {runtime && (
            <span>
              {type === 'movie'
                ? (runtime / 60).toFixed().concat('h', runtime % 60, 'min')
                : `${runtime}min`}
            </span>
          )}
        </InlineInfo>
        <InlineInfo>
          {!!details.vote_average && (
            <span>
              <strong>Rating:</strong> {details.vote_average}
            </span>
          )}

          <span>
            <strong>Popularidade:</strong> {details.popularity}
          </span>
        </InlineInfo>
        <Overview {...{ overview }} />
        <hr style={{ margin: '0.25rem 0' }} />
        <div>
          <strong>Gêneros: </strong>
          {details.genres.map((item, index) => (
            <span key={item.id}>
              {!!index && ' | '}
              {item.name}
            </span>
          ))}
        </div>
        {detailed.map(({ name, content }) =>
          content ? (
            <div key={name}>
              <strong>{name}: </strong>
              <span>{content}</span>
            </div>
          ) : null
        )}
      </Container>
    );
  }

  if (type === 'person') {
    const { place_of_birth } = details;
    const birthday = convertDate(details.birthday);
    const deathday = convertDate(details.deathday);
    const birthYear = details.birthday?.split('-')[0];
    const deathYear = details.deathday?.split('-')[0];

    const detailed = [
      {
        name: 'Nascimento',
        value: birthday
          ? place_of_birth
            ? birthday.concat(' em ', place_of_birth)
            : birthday
          : null,
      },
      { name: 'Morte', value: deathday },
    ];
    return (
      <Container>
        {/* <InlineInfo> */}
        {details.birthday && (
          <span>
            {birthYear}-{deathYear}
          </span>
        )}
        <Overview overview={details.biography} />
        {detailed.map(({ name, value }) =>
          value ? (
            <div key={name}>
              <strong>{name}: </strong>
              <span>{value}</span>
            </div>
          ) : null
        )}
      </Container>
    );
  }

  return null;
}
