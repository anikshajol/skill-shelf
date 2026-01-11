const getFromLocalStorage = () => {
  const stored = localStorage.getItem("skills");
  if (stored) {
    return JSON.parse(stored);
  } else {
    return [];
  }
};

const saveToLocalStorage = (skill) => {
  localStorage.setItem("skills", JSON.stringify(skill));
};

const addToLocalStorage = (skill) => {
  const stored = getFromLocalStorage();
  const found = stored.find((item) => item.id === skill.id);
  //   console.log(found);

  if (!found) {
    saveToLocalStorage([...stored, skill]);
  } else {
    const items = stored.filter((item) => item.id != skill.id);
    saveToLocalStorage(items);
  }
};
const deleteFromLocalStorage = (id) => {
  const stored = getFromLocalStorage();
  const remove = stored.filter((item) => item.id != id);
  console.log(remove);

  saveToLocalStorage(remove);
};

export { getFromLocalStorage, addToLocalStorage, deleteFromLocalStorage };
