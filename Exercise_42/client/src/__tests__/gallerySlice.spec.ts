import galleryReducer, {
  GalleryState,
  searchImages,
  searchImagesSucces,
  searchImagesError,
} from "../components/gallerySlice";

describe("gallery reducer", () => {
  const initialState: GalleryState = {
    loading: false,
    error: null,
    images: [],
  };
  it("should handle initial state", () => {
    expect(galleryReducer(undefined, { type: "unknown" })).toEqual({
      loading: false,
      error: null,
      images: [],
    });
  });

  it("should handle search images request", () => {
    const actual = galleryReducer(initialState, searchImages("hola"));
    expect(actual).toEqual({
      loading: true,
      error: null,
      images: [],
    });
  });

  it("should handle search images success", () => {
    const images = [
      {
        src: "https://picsum.photos/id/0/5616/3744",
        width: 5616,
        height: 3744,
      },
      {
        src: "https://picsum.photos/id/1/5616/3744",
        width: 5616,
        height: 3744,
      },
      {
        src: "https://picsum.photos/id/10/2500/1667",
        width: 2500,
        height: 1667,
      },
      {
        src: "https://picsum.photos/id/100/2500/1656",
        width: 2500,
        height: 1656,
      },
      {
        src: "https://picsum.photos/id/1000/5626/3635",
        width: 5626,
        height: 3635,
      },
      {
        src: "https://picsum.photos/id/1001/5616/3744",
        width: 5616,
        height: 3744,
      },
      {
        src: "https://picsum.photos/id/1002/4312/2868",
        width: 4312,
        height: 2868,
      },
      {
        src: "https://picsum.photos/id/1003/1181/1772",
        width: 1181,
        height: 1772,
      },
      {
        src: "https://picsum.photos/id/1004/5616/3744",
        width: 5616,
        height: 3744,
      },
      {
        src: "https://picsum.photos/id/1005/5760/3840",
        width: 5760,
        height: 3840,
      },
    ];
    const actual = galleryReducer(initialState, searchImagesSucces(images));
    expect(actual).toEqual({
      loading: false,
      error: null,
      images,
    });
  });

  it("should handle search images errors", () => {
    const actual = galleryReducer(initialState, searchImagesError("error"));
    expect(actual).toEqual({
      loading: false,
      error: "error",
      images: [],
    });
  });
});
