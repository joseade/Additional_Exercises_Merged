import "./App.css";
import Gallery from "./components/Gallery";
import { searchImages } from "./components/gallerySlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useEffect, useState } from "react";
const { REACT_APP_URL } = process.env;
function App() {
  const [increment, setIncrement] = useState<number>(1);

  const images = useAppSelector((state) => state.gallery.images);
  const dispatch = useAppDispatch();
  const getFigures = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    // const bodyElement = document.querySelector("body")! as HTMLElement;
    // if (window.innerHeight + window.scrollY >= bodyElement.offsetHeight) {
    //   dispatch(
    //     searchImages(
    //       `http://localhost:4000/gallery/10/?count=10&page=${increment}`
    //     )
    //   );
    // }
    dispatch(
      searchImages(`${REACT_APP_URL}/gallery/10/?count=10&page=${increment}`)
    );
    setIncrement((pastIncrement) => pastIncrement + 1);
  };
  useEffect(() => {
    dispatch(
      searchImages(`${REACT_APP_URL}/gallery/30/?count=10&page=${increment}`)
    );
    setIncrement((pastIncrement) => pastIncrement + 1);
  }, []);
  console.log(images);
  return (
    <>
      <div>{images.length > 0 && <Gallery data={images} />}</div>
      <button type="button" onClick={getFigures}>
        Get more images !
      </button>
    </>
  );
}

export default App;
