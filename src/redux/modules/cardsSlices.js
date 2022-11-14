import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    cards: [],
    isLoading: false,
    error: null,
}

const linkData = 'https://jsoncardserver.herokuapp.com/cards/';

export const __getcards = createAsyncThunk(
    'getcards',
    async (payload, thunkApi) => {
        try {
            const { data } = await axios.get(linkData);
            return thunkApi.fulfillWithValue(data);
        }
        catch (e) {
            return thunkApi.rejectWithValue(e);
        }
    }
);

export const __getcardsbyId = createAsyncThunk(
    '__getcardsbyId',
    async (payload, thunkApi) => {
        try {
            const { data } = await axios.get(linkData);
            const filter = data.filter(card => card.id === payload)
            return thunkApi.fulfillWithValue(filter);
        }
        catch (e) {
            return thunkApi.rejectWithValue(e);
        }
    }
);

export const __deletecards = createAsyncThunk(
    '__deletecards',
    async (payload, thunkApi) => {
        try {
            await axios.delete(linkData+payload);
            window.location.reload();
        }
        catch (e) {
            return thunkApi.rejectWithValue(e);
        }
    }
);

export const __createcards = createAsyncThunk(
    '__createcards',
    async (payload, thunkApi) => {
        try {
            await axios.post(linkData, payload);
            const { data } = await axios.get(linkData);
            return thunkApi.fulfillWithValue(data);
        }
        catch (e) {
            return thunkApi.rejectWithValue(e);
        }
    }
);

export const __editcards = createAsyncThunk(
    '__editcards',
    async (payload, thunkApi) => {
        try {
            await axios.patch(linkData+payload.id, payload.data);
            const { data } = await axios.get(linkData);
            return thunkApi.fulfillWithValue(data);
        }
        catch (e) {
            return thunkApi.rejectWithValue(e);
        }
    }
);






const cardslice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
    },
    extraReducers: {
        [__getcards.pending]: (state) => {
            state.isLoading = true;
        },
        [__getcards.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cards = action.payload;
            state.error = null;
        },
        [__getcards.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [__deletecards.pending]: (state) => {
            state.isLoading = true;
        },
        [__deletecards.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cards = action.payload;
            state.error = null;
        },
        [__deletecards.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [__createcards.pending]: (state) => {
            state.isLoading = true;
        },
        [__createcards.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cards = action.payload;
            state.error = null;
        },

        [__createcards.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [__getcardsbyId.pending]: (state, action) => {
            state.isLoading = true;
        },
        [__getcardsbyId.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cards = action.payload;
            state.error = null;
        },
        [__getcardsbyId.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [__editcards.pending]: (state, action) => {
            state.isLoading = true;
        },
        [__editcards.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cards = action.payload;
            state.error = null;
        },
        [__editcards.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        
    },
});

// export const {} = cardslice.actions;
export default cardslice.reducer;