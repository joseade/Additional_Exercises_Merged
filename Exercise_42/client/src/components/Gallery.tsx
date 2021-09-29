import { CSSProperties } from "react";

interface IImages {
  src: string;
  width: number;
  height: number;
}
interface IData {
  data: IImages[];
}

const stylesContainer: CSSProperties = {
  display: "grid",
  gap: 10,
  gridAutoFlow: "dense",
  gridAutoRows: 200,
  gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
};

const Gallery = ({ data }: IData) => {
  return (
    <div className="container" style={{ ...stylesContainer }}>
      {data.map((image, index) => {
        let columnSpan = "";
        let rowSpan = "";
        if (image.width > image.height + 1000) {
          columnSpan = "span 2";
        }
        if (image.width + 500 < image.height) {
          rowSpan = "span 2";
        }

        const stylesImage: CSSProperties = {
          backgroundImage: `url("${image.src}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          gridColumn: `${columnSpan}`,
          gridRow: `${rowSpan}`,
        };
        return (
          <div className="item" key={index} style={{ ...stylesImage }}></div>
        );
      })}
    </div>
  );
};

export default Gallery;
