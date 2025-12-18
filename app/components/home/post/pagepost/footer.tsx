import Image from "next/image";
export default function Footer() {
  return (
    <>
      <div className="flex items-center justify-between p-1">
        <div className="flex items-center space-x">
          <div className="flex items-center -space-x-1"></div>
          <p>Betty Alex and others</p>
        </div>
        <p>33 comments</p>
      </div>

      <div className="flex items-center justify-between pt-1 px-1 pb-0">
        <div className="flex  space-x-1 grow px-1.5 py-1.5 items-center justify-center cursor-pointer rounded-sm hover:bg-zinc-50">
          <p>Like</p>
          <Image alt="like" src={`/post/like.png`} width={20} height={20} />
        </div>
        <div className="flex  space-x-1 grow px-1.5 py-1.5 items-center justify-center cursor-pointer rounded-sm hover:bg-zinc-50">
          <p>Comment</p>
          <Image
            alt="comment"
            src={`/post/comment.png`}
            width={20}
            height={20}
            className="object-cover"
          />
        </div>
        <div className="flex  space-x-1 grow px-1.5 py-1.5 items-center justify-center cursor-pointer rounded-sm hover:bg-zinc-50">
          <p>Share</p>
          <Image
            alt="share"
            src={`/post/share.png`}
            className="object-cover"
            width={20}
            height={20}
          />
        </div>
      </div>
    </>
  );
}
