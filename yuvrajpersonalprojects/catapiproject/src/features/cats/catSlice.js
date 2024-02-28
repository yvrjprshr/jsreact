import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    importantCats: [

    ]
}

export const catSlice = createSlice({
    name: 'importantcats',
    initialState,
    reducers: {
        addCat: (state, action)=>{
            const cat = {
                id: action.payload.id,
                url: action.payload.url
            }
            state.importantCats.push(cat);
        },
        removeCat: (state, action)=>{
            state.importantCats = state.importantCats.filter(cat=>cat.id!==action.payload.id);
        }
    }
})

export const {addCat, removeCat} = catSlice.actions;

export default catSlice.reducer;