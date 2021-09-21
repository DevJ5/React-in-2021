const initialState = [];

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_USER':
      return [...state, payload];

    default:
      return state;
  }
};

export default usersReducer;
