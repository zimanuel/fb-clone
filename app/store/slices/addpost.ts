import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddPostState {
  isOpen: boolean;
  uploadedFiles: {
    id: number;
    url: string;
    type: string;
  }[];
  postContent: string;
}

const initialState: AddPostState = {
  isOpen: false,
  uploadedFiles: [],
  postContent: "",
};

export const addPostSlice = createSlice({
  name: "addPostSlice",
  initialState,
  reducers: {
    openAddPostModal: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },

    setUploadedMedias: (
      state,
      action: PayloadAction<{
        id: number;
        url: string;
        type: string;
      }>
    ) => {
      state.uploadedFiles.push(action.payload);
    },

    setPostConent: (state, action: PayloadAction<string>) => {
      state.postContent = action.payload;
    },
  },
});

export const { openAddPostModal, setUploadedMedias, setPostConent } =
  addPostSlice.actions;

export default addPostSlice.reducer;
