let apiLegos = [];

export const useLegos = () => {
  return [...apiLegos]
}

export const loadLegos = () => {
  return fetch("../data/lego-colors.json")
    .then(response => response.json())
    .then((legoArray) => {
      apiLegos = legoArray.LegoColorss;
      return legoArray.LegoColorss;
    })
};

// 1. apiLegos is declared as an empty Array.
// 2. Use legos is a function that returns a new apiLegos array with new information.
// 3. LoadLegos() fetches lego Data , declares empty array apiLegos = legoArray.Legocolors & returns entire array from api