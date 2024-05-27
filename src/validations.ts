export const isTextInputValidLength = (text: string) => text.length > 2;

export const isCityValid = (cities: string[], userInput: string) => {
  const lowerCaseCities = cities.map((city) => city.toLowerCase());
  return lowerCaseCities.includes(userInput.toLowerCase());
};
