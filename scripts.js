const catA = document.getElementById('cat-a');
const catB = document.getElementById('cat-b');
const catC = document.getElementById('cat-c');

const fetchCat = async (element) => {
  const response = await fetch('https://cataas.com/cat/cute?width=300');
  const blob = await response.blob();
  element.src = URL.createObjectURL(blob);
};

const asyncCats = () => {
  fetchCat(catA);
  fetchCat(catB);
  fetchCat(catC);
};

const syncCats = async () => {
  await fetchCat(catA);
  await fetchCat(catB);
  await fetchCat(catC);
};
