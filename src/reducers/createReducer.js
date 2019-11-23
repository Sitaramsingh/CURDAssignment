import {CREATE_ACTION, UPDATE_ACTION, DELETE_ACTION} from '../Constant/type';

export default (state = [], action) => {
  // debugger
    switch (action.type) {
     case CREATE_ACTION:
        let newState = [...state,action.payload];
        return newState;

     case UPDATE_ACTION:

       let updateState = state.map((data) => {
          const {id,desc} = action.payload;
          if(data.id === id)
          {
            data.desc = desc;
          }
          return data;
      })
      return updateState

      case DELETE_ACTION:
        return state.filter((data)=>data.id !== action.payload);
     default:
      return state
    }
   }