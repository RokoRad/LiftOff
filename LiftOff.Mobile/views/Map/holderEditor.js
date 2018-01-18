import round from '../../functions/round';

const holderEditor = (city, rating) => {
  return {
    city,
    rating: round(rating),
    time: `${new Date().getHours()}:${new Date().getMinutes()}`
  }
}

export default holderEditor;