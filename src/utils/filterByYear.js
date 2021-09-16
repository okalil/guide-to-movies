export default function filterByYear(array, year) {
  const filtered = year
    ? array.filter(item => {
        switch (item.media_type) {
          case 'movie':
            const [releaseYear] = item.release_date?.split('-') || [undefined];
            return releaseYear === year;
          case 'tv':
            const [firstAirYear] = item.first_air_date?.split('-') || [
              undefined,
            ];
            return firstAirYear === year;
          default:
            return false;
        }
      })
    : array;

  return filtered;
}
