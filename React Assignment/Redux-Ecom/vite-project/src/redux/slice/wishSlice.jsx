import { createSlice } from "@reduxjs/toolkit";

const initialState = {

      wishitem:[], 
      wishOpen: false
}

  const wishSlice = createSlice({
           name:'wish', // reducer 
           initialState,
           reducers: {
             
            additemwish(state,action){
              const newItem = action.payload; 
              const existingItem = state.wishitem.find((item) => item.id === newItem.id);
        
              if (existingItem) {
                existingItem.quantity += 1;
              } else {
                state.wishitem.push({...newItem, quantity:1});
              }
            
            },
            removeitemwish(state,action){
              state.wishitem = state.wishitem.filter((item) => item.id !== action.payload);
            },

            incrementqtywish(state,action){
              const item = state.wishitem.find((item) => item.id === action.payload);
              if (item) {
                item.quantity++;
              }
            },

            decrementqtywish(state,action){
              const item = state.wishitem.find((item) => item.id === action.payload);
            if (item) {
            if (item.quantity > 1) {
                item.quantity--;
              } else {
            state.wishitem = state.wishitem.filter((wish) => wish.id !== action.payload);
        }
      }
            },
            
            togglewish(state,action){
              state.wishOpen = action.payload;
            }

           }


  })

  export const {additemwish,removeitemwish,incrementqtywish,decrementqtywish,togglewish}  =  wishSlice.actions;

  export default wishSlice.reducer