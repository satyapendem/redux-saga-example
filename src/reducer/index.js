const reducer = (state = {}, action) => {
    switch (action.type) {
       case 'FETCH_WEATHER':
          return { ...state};
          
       case 'WEATHER_RECEIVED':
          return { ...state, weather: action.data }
       default:
          return state;
     }
  };
  export default reducer;