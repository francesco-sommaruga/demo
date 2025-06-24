import Image from "next/image";
import Link from "next/link";
import { videos } from "./videos";

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
