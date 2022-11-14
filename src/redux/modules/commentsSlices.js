import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    comments: [],
    isLoading: false,
    error: null,
}

const linkData = 'https://jsoncardserver.herokuapp.com/comments/';

export const __getcomments = createAsyncThunk(
    'getcomments',
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

export const __getcommentsbyId = createAsyncThunk(
    '__getcommentsbyId',
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

export const __deletecomments = createAsyncThunk(
    '__deletecomments',
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

export const __createcomments = createAsyncThunk(
    '__createcomments',
    async (payload, thunkApi) => {
        try {
            await axios.post('https://jsoncardserver.herokuapp.com/comments/', payload);
            const { data } = await axios.get('https://jsoncardserver.herokuapp.com/comments/');
            return thunkApi.fulfillWithValue(data);
        }
        catch (e) {
            return thunkApi.rejectWithValue(e);
        }
    }
);

export const __editcomments = createAsyncThunk(
    '__editcomments',
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

const commentslice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
    },
    extraReducers: {
        [__getcomments.pending]: (state) => {
            state.isLoading = true;
        },
        [__getcomments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.comments = action.payload;
            state.error = null;
        },
        [__getcomments.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [__deletecomments.pending]: (state) => {
            state.isLoading = true;
        },
        [__deletecomments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.comments = action.payload;
            state.error = null;
        },
        [__deletecomments.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [__createcomments.pending]: (state) => {
            state.isLoading = true;
        },
        [__createcomments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.comments = action.payload;
            state.error = null;
        },

        [__createcomments.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [__getcommentsbyId.pending]: (state, action) => {
            state.isLoading = true;
        },
        [__getcommentsbyId.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.comments = action.payload;
            state.error = null;
        },
        [__getcommentsbyId.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [__editcomments.pending]: (state, action) => {
            state.isLoading = true;
        },
        [__editcomments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.comments = action.payload;
            state.error = null;
        },
        [__editcomments.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        
    },
});

// export const {} = commentslice.actions;
export default commentslice.reducer;