import Image from "next/image";
import img1 from "../../public/video-1.jpg";
import img2 from "../../public/video-2.jpg";
import Link from "next/link";

export const videos = [
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

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mt-16 mb-4">Video</h1>
      <div className="grid grid-cols-6 gap-4">
        {videos.map((video) => (
          <Link href={`/video/${video.id}`} key={video.id}>
            <div className="flex flex-col gap-2">
              <div className="relative aspect-video rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer">
                <Image
                  src={video.image}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold">{video.title}</h3>
              <p className="text-sm text-gray-500">{video.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
