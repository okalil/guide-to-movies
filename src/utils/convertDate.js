import months from '../constants/months';

export default function convertDate(date) {
  if (!date) return null;

  const then = new Date(date);

  if (!then.getDate()) return undefined;

  return `${then.getDate()} de ${
    months[then.getMonth()]
  } de ${then.getFullYear()}`;
}
