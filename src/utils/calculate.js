/**
 * @flow strict
 */

export const calculateCalories = (
  carbon: number,
  fat: number,
  protein: number,
): number => {
  const carbonFactor = 4;
  const proteinFactor = 4;
  const fatFactor = 9;
  return (
    getNutritionalValue(carbon) * carbonFactor +
    getNutritionalValue(fat) * fatFactor +
    getNutritionalValue(protein) * proteinFactor
  );
};

export const getNutritionalValue = (
  nutritionalValue: number,
  amount: number = 100,
): number => nutritionalValue * amount;
