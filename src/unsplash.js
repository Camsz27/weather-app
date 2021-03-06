const key = 'tr1CYsfeIQGgLaK3S7_aQj5zoKV4E7rYZ6qRRbBdk34';
const picture = async (city) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos/?page=1&query=${city}&orientation=portrait&client_id=${key}`,
      { mode: 'cors' }
    );
    const data = await response.json();

    return data.results[0].urls.raw;
  } catch (error) {
    return 'Photo was not found';
  }
};

export { picture };
