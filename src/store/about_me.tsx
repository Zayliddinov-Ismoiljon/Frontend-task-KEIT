import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AboutMeState {
    about_me: any;
}

const initialState: AboutMeState = {
    about_me: null,
};

const userSlice = createSlice({
    name: 'about_me',
    initialState,
    reducers: {
        getAboutMe(state, action: PayloadAction<any>) {
            state.about_me = action.payload;
        },
    },
});

export const { getAboutMe } = userSlice.actions;

export default userSlice.reducer;

