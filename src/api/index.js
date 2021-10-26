const URL =
  "https://api.nal.usda.gov/fdc/v1/foods/search?query=tomatoes,raw&pageSize=2&api_key=";

const API_KEY = `${process.env.FOOD_DATA_CENTRAL}`;

const getTomatoData = async () => {
  try {
    const response = await fetch(`${URL}${API_KEY}`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getTomatoData };
