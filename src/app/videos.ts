import { StaticImageData } from "next/image";
import img1 from "../../public/video-1.jpg";
import img2 from "../../public/video-2.jpg";

export type Videos = Video[];
export interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
  image: StaticImageData;
}

export const videos: Videos = [
  {
    id: 1,
    title: "Video 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    url: "https://vimeo.com/90509568",
    image: img1,
  },
  {
    id: 2,
    title: "Video 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    image: img2,
    url: "https://vimeo.com/169599296",
  },
];
