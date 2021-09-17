import styled from 'styled-components';
import Details from '../Details';
import Overview from '../Overview';

export default function TVDetails({ details }) {
  const { first_air_date, original_title, last_air_date, hetsd, overview } =
    details;
  console.log(hetsd, 'o q ser isto');
  const [firstAirYear] = first_air_date.split('-');
  const [lastAirYear] = last_air_date.split('-');

  // const detailed = [
  //   { name: 'Título original', content: original_title },
  //   { name: 'Lançamento', content: firstAirYear },
  //   { name: 'Duração', content: runtime + 'min' },
  //   { name: 'Orçamento', content: `USD $${budget},00` },
  //   { name: 'Tagline', content: details.tagline },
  // ];

  return (
    <Details>
      <Overview {...{ overview }} />
    </Details>
  );
}
