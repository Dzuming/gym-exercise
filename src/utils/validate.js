export const validate = ({exercise, date, amount, weight}) => {
  if (!exercise || !date || !amount || !weight) {
    return;
  }
  return true;
};
