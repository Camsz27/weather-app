const locationInput = () => {
  const input = document.querySelector('.location input');
  const location = input.value;
  input.value = '';
  return location;
};

const unitsInput = (e) => {
  console.log(e.target);
};

export { locationInput, unitsInput };
