import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { stories } from "@/app/seed/faker/story";
import StoriesClient from "./storiesclient";

export default async function Stories() {
  const _stories = await new Promise<
    {
      user: string;
      pic: string;
    }[]
  >((resolve) => {
    setTimeout(() => {
      resolve(stories);
    }, 5000);
  });
  return <StoriesClient stories={_stories} />;
}
