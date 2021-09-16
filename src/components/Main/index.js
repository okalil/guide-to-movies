import { useRef } from 'react';

import { useSearch } from '../../contexts/SearchContext';
import { w185 } from '../../constants/posterSizes';
import { imageBaseUrl } from '../../constants/imageUrl';
import filterByYear from '../../utils/filterByYear';

import Modal from '../Modal';
import { InfoContainer, ResultsContainer, ResultsItem } from './styles';

export default function Main({ currentFilter }) {
  const { search } = useSearch();
  const { data, keyword } = search;

  const modalRef = useRef(null);

  const [_, year] = keyword.split('y:');

  const filtered = data
    ? filterByYear(
        data.results.filter(item =>
          currentFilter === 'all' ? true : item.media_type === currentFilter
        ),
        year
      )
    : null;

  return (
    <ResultsContainer>
      {!filtered ? null : data.results && data.total_results ? (
        <ul>
          {filtered.map(item => {
            const { media_type, overview, id } = item;

            const getDate = date => {
              const then = new Date(date);
              return `${then.getDate()} de ${
                months[then.getMonth()]
              } de ${then.getFullYear()}`;
            };

            let date, name, image;
            switch (media_type) {
              case 'movie':
                date = getDate(item.release_date);
                name = item.title;
                image = item.poster_path;
                break;
              case 'tv':
                date = getDate(item.first_air_date);
                name = item.name;
                image = item.poster_path;
                break;
              case 'person':
                date = item.birthday;
                name = item.name;
                image = item.profile_path;
                break;
              default:
                date = undefined;
            }

            return (
              <ResultsItem
                key={id}
                onClick={() => modalRef.current?.openModal()}
              >
                <img
                  src={image ? imageBaseUrl.concat(w185, image) : ''}
                  alt="Poster"
                />
                <InfoContainer>
                  <h4>{name}</h4>
                  <span>{date}</span>
                  <p>{overview}</p>
                </InfoContainer>
              </ResultsItem>
            );
          })}
        </ul>
      ) : (
        <h4>Não foi possível carregar os dados!</h4>
      )}
      <Modal ref={modalRef}>Você abriu uma modal!</Modal>
    </ResultsContainer>
  );
}

const months = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
];
