export const toLowerCaseFirstLetter = string => {
  const splittedString = string.split('');
  return splittedString
    .map((letter, index) => {
      if (index === 0) {
        return letter.toLowerCase();
      }
      return letter;
    })
    .join('');
};
