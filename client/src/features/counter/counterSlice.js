const initialState = {
  items: [],
  user: {},
  patients:[],
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "count/increment":
      console.log("Current state.items length %s", state.items.length);
      console.log("Updating state.items length to %s", state.items.length + 1);
      return {
        ...state,
        items: state.items.concat(state.items.length + 1),
      };
      case "user/login":
        return{
          ...state, 
          user: action.user,
        }
      case "user/logout":
        return{
          ...state,
          user: {},
          patients: [],
        }
      case "patients/save":
        return{
          ...state,
          patients: action.patients,
        }
    default:
      return state;
  }
  
}

export default counterReducer;
