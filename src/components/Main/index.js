import axios from 'axios';
import { useRef, useState } from 'react';

import { useSearch } from '../../contexts/SearchContext';
import { w185 } from '../../constants/posterSizes';
import { imageBaseUrl } from '../../constants/imageUrl';

import filterByYear from '../../utils/filterByYear';
import convertDate from '../../utils/convertDate';

import Modal from '../Modal';
import Details from './Details';
import { InfoContainer, ResultsItem } from './styles';

const baseURL = '/api/moviedb?url=';

export default function Main({ currentFilter, historyData }) {
  const { search } = useSearch();
  const { keyword } = search;

  const data = historyData || search.data;

  const [_, year] = keyword.split('y:');

  const filtered = data
    ? filterByYear(
        data.results.filter(item =>
          currentFilter === 'all' ? true : item.media_type === currentFilter
        ),
        year
      )
    : null;

  const modalRef = useRef(null);

  const [details, setDetails] = useState({});

  return (
    <>
      {!filtered ? null : data.results && data.total_results ? (
        <ul>
          {filtered.map(item => {
            const { media_type, overview, id } = item;

            let date, name, image;
            switch (media_type) {
              case 'movie':
                date = convertDate(item.release_date);
                name = item.title;
                image = item.poster_path;
                break;
              case 'tv':
                date = convertDate(item.first_air_date);
                name = item.name;
                image = item.poster_path;
                break;
              case 'person':
                name = item.name;
                image = item.profile_path;
                break;
              default:
                date = undefined;
            }

            return (
              <ResultsItem
                key={id}
                onClick={async () => {
                  async function getDetails(url) {
                    try {
                      const { data } = await axios.get(url, { baseURL });
                      setDetails({ ...data, media_type });
                    } catch (error) {
                      console.log('Error: ', error);
                    }
                  }
                  await getDetails(
                    `/${media_type}/${id}?append_to_response=credits`
                  );
                  modalRef.current?.openModal();
                }}
              >
                <img
                  src={
                    image
                      ? imageBaseUrl.concat(w185, image)
                      : '/image-not-available.jpg'
                  }
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
        <h4 style={{ textAlign: 'center' }}>
          Não foi possível carregar os dados!
        </h4>
      )}
      <Modal ref={modalRef}>
        <Details {...{ details }} />
      </Modal>
    </>
  );
}
