"use client";

import ReactPlayer from "react-player/lazy";
import { Suspense, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, PlayCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Content({ video }: { video: any }) {
  const [isClient, setIsClient] = useState(false);
//   const [setIsReady] = useState(false);
  const [hideImage, setHideImage] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const router = useRouter();
  return (
    <>
      <div className="container max-w-5xl mx-auto pt-16">
        <Button variant="outline" asChild className="mb-4">
          <button onClick={() => router.back()} className="cursor-pointer">
            <ArrowLeftIcon className="w-4 h-4" />
            Back
          </button>
        </Button>
        <h1 className="text-4xl font-bold mb-4">{video?.title}</h1>
        <div className="relative aspect-video rounded-lg overflow-hidden">
          {isClient && (
            <>
              {!hideImage && (
                <div
                  className="cursor-pointer group"
                  onClick={() => {
                    setHideImage(true);
                    setIsPlaying(true);
                  }}
                >
                  <Image
                    src={video?.image || ""}
                    alt={video?.title}
                    fill
                    className={`object-cover`}
                  />
                  <PlayCircleIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-70 w-24 h-24 group-hover:opacity-50 transition-opacity duration-300" />
                </div>
              )}
              <ReactPlayer
                url={video?.url}
                width="100%"
                height="100%"
                controls
                // onReady={() => setIsReady(true)}
                playing={isPlaying}
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
                onEnded={() => {
                  setIsPlaying(false);
                  setHideImage(false);
                }}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
