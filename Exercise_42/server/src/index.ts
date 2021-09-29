// "ts-node-dev --respawn src/index.ts";
import express, { Application, Request, Response } from "express";
import axios from "axios";
import cors from "cors";

const app: Application = express();
app.use(express.json());
const port = 4000;

interface IQuery {
  count: number;
  page: number;
}
interface IParams {
  galleryID: number;
}

interface IRequest {
  params: IParams;
  query: IQuery;
}

interface Image {
  src: string;
  width: number;
  height: number;
}
interface Page {
  id: string;
  images: Image[];
  page: number;
  total: number;
}

interface IImageResponse {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

app.use(cors());
app.get(
  "/gallery/:galleryID/",
  async (req: Request & IRequest, res: Response): Promise<void> => {
    const { galleryID } = req.params;
    const { count, page } = req.query;
    if (count && page) {
      const { data } = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=${count}`
      );
      const images: Image[] = data.map((image: IImageResponse) => {
        return {
          src: image.download_url,
          width: image.width,
          height: image.height,
        };
      });
      const response: Page = {
        id: "2",
        images,
        page,
        total: count,
      };
      res.status(200).json(response);
      return;
    }
    res.status(500).json({});
    return;
  }
);

app.listen(port, (): void => {
  console.log("Listening on port 4000");
});
