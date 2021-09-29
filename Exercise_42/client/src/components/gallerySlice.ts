import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface IImages {
  src: string;
  width: number;
  height: number;
}

export interface GalleryState {
  loading: boolean;
  error: string | null;
  images: IImages[];
}

const initialState: GalleryState = {
  loading: false,
  error: null,
  images: [],
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    searchImages: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.error = null;
    },
    searchImagesSucces: (state, action: PayloadAction<IImages[]>) => {
      state.loading = false;
      state.error = null;
      state.images = state.images.concat(action.payload);
    },
    searchImagesError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.images = [];
    },
  },
});

export const { searchImages, searchImagesSucces, searchImagesError } =
  gallerySlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state;

export default gallerySlice.reducer;
