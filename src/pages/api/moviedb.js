import axios from 'axios';

export default async (req, res) => {
  const baseURL = 'https://api.themoviedb.org/3';

  try {
    const response = await axios(req.query.url, {
      baseURL,
      method: 'GET',
      params: { api_key: process.env.MOVIE_DB_API_KEY, language: 'pt-BR' },
    });
    res.status(200).json({ ...response.data });
  } catch (error) {
    res.json({ error });
  }
};
