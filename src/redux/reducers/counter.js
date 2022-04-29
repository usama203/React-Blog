const INCREMENT = "increment";



// Action
export const incrementCount = () => ({
  type: INCREMENT,
});



// Initial State
const initialState = {
  count: 0,
  
};

// Reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        // items: state.items.filter((item) => item.id += action.itemId),
        
        count: state.count + 1,
      };
   
    default:
      return state;
  }
};
