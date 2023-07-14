export const isStringOfLetters = (value: string) => {
  const regex = /^[A-Za-zА-Яа-я]+$/;
  return regex.test(value);
} 