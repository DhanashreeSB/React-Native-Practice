import { createSlice } from "@reduxjs/toolkit";

//createSlice creates a slice, where slice is a data/state+actions used to manage those states

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    //reducers are functions that are used to change our state
    reducers: {
        //Every function which you'll define as a reducer will get state parameter by default which holds value of current state
        addFavorite: (state, action) => {
            //With redux you can't mutate a state directly. But with redux toolkit, you can mutate a state and redux toolkit will take care of immutably mutating states under the hood.
            //action is also an object provided by redux and payload property provides/transports any extra data we might attach to this function in the future.
            state.ids.push(action.payload.id)
        },
        removeFavorite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1)
        }
    }
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
