const Fire = (rows, columns) => {
  let state = [];

  Fire.createState = () => {
    state = Array(rows * columns).fill(0);
    return state;
  };

  Fire.createFireSource = () => {
    const newState = state.map((d, i) => {
      const offset = (rows - 1) * columns;
      if(i < offset) { return d };
      return 36;
    });

    state = newState;
    return state;
  };

  Fire.propagateFire = (random = true, wind = true) => {
    const newState = [...state];

    for(let j = 0; j < columns; j += 1) {
      for(let i = 0; i < rows; i += 1) {
        const decay = random ? Math.floor(Math.random() * 3) : 1;
        const currentIndex = (i * columns) + j;
        const lastRowIndex = (rows - 1) * columns;
        if (currentIndex >= lastRowIndex) { continue; }

        const intensity = state[currentIndex + columns] - decay; // pixel below
        newState[currentIndex] = intensity >= 0 ? intensity : 0 ;
      }
    }

    state = newState;
    return state;
  };

  Fire.rows = () => rows;
  Fire.columns = () => columns;

  return Fire;
};

export default Fire;
