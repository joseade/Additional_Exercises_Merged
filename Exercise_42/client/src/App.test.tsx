//, screen, fireEvent
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

import { searchImages, searchImagesSucces } from "./components/gallerySlice";
import { rest } from "msw";
import { setupServer } from "msw/node";

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

const server = setupServer(
  rest.get("http://localhost:4000/gallery/:galleryId", (req, res, ctx) => {
    const query = req.url.searchParams;
    const count = query.get("count");
    const page = query.get("page");
    return res(ctx.json({ images }));
  })
);
beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

test("renders learn react link", async () => {
  const res = await fetch("http://localhost:4000/gallery/10/?count=10&page=1");
  const data = await res.json();
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  store.dispatch(searchImagesSucces(data.images));
  expect(document.querySelectorAll(".item").length).toBe(10);
  store.dispatch(searchImagesSucces(data.images));
  expect(document.querySelectorAll(".item").length).toBe(20);
  expect(getByText(/Get more images/i)).toBeInTheDocument();
});
