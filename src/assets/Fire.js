const createState = (rows, columns) => Array(rows).fill().map(() => Array(columns).fill(0));

const createFireSource = (fireState) => {
  const columns = fireState[0].length;
  const initialRow = Array(columns).fill(36);
  return [...fireState.slice(0, -1), initialRow];
};

const propagateFire = (fireState) => {
  const newState = [...fireState];
  const rows = fireState.length;

  for(const [i, row] of newState.entries()) {
    if(i === rows - 1) { continue; }

    for(const [j] of row.entries()) {
      const intensity = newState[i + 1][j];
      newState[i][j] = intensity - 1 >= 0 ? intensity - 1 : 0;
    }
  }

  return newState;
};

export default {
  createState,
  createFireSource,
  propagateFire,
};
