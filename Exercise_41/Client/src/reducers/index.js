const initialState = {
  data: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_DATA":
      if (state.data.length === 100) {
        return {
          ...state,
          data: [
            ...state.data.slice(1),
            { x: action.payload.x, y: action.payload.y },
          ],
        };
      }
      return {
        ...state,
        data: state.data.concat({ x: action.payload.x, y: action.payload.y }),
      };
    default:
      return state;
  }
};

export default dataReducer;
