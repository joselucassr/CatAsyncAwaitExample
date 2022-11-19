const catA = document.getElementById('cat-a');
const catB = document.getElementById('cat-b');
const catC = document.getElementById('cat-c');

const fetchCat = async (element) => {
  const response = await fetch('https://cataas.com/cat/cute?width=300');
  const blob = await response.blob();
  element.src = URL.createObjectURL(blob);
};

const fetchCatThen = (element) => {
  fetch('https://cataas.com/cat/cute?width=300')
    .then((response) => response.blob())
    .then((blob) => {
      element.src = URL.createObjectURL(blob);
    });
};

const asyncCats = () => {
  // fetchCat(catA);
  // fetchCat(catB);
  // fetchCat(catC);

  fetchCatThen(catA);
  fetchCatThen(catB);
  fetchCatThen(catC);
};

const syncCats = async () => {
  await fetchCat(catA);
  await fetchCat(catB);
  await fetchCat(catC);
};
