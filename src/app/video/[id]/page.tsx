import { videos } from "../../page";
import Content from "./content";

export default async function VideoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const video = videos.find((video) => video.id === parseInt(id));
  return <Content video={video} />;
}
