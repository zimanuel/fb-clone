import { _replies } from "@/app/seed/faker/reply";
import { users } from "@/app/seed/faker/user";
import Image from "next/image";
export default function Replies({
  replies,
}: {
  replies: {
    reply: string;
    hasReply: boolean;
  }[];
}) {
  return (
    <>
      {replies.map((reply, index) => {
        return (
          <Reply
            key={index}
            index={index}
            reply={reply}
            isBorderLeft={index === _replies.length - 1}
          />
        );
      })}
    </>
  );
}

function Reply({
  reply,
  isBorderLeft,
  index,
}: {
  reply: {
    reply: string;
    hasReply: boolean;
  };
  isBorderLeft: boolean;
  index: number;
}) {
  return (
    <div className="relative w-full" key={index}>
      <div className="flex">
        <div className="w-[7%]">
          <div className="w-full h-full flex flex-col -space-y-2 relative">
            <div className="w-full h-7    rounded-bl-xl  border-b-2 border-l-2 border-b-gray-200 border-l-gray-200"></div>
            <div
              className={`h-full w-full ${
                isBorderLeft ? "" : "border-l-2 border-l-gray-200"
              }`}
            ></div>
          </div>
        </div>
        <div className="w-[93%] relative ">
          <div className="  border-l-2 border-l-gray-200 ">
            <div className=" flex space-x-3 relative -left-4  ">
              <Image
                alt="comment"
                src={`/users/${index + 4}.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                className="w-8 h-8 rounded-full flex-none"
              />
              <div className=" flex flex-col ">
                <div className="bg-gray-100 rounded-xl p-2.5">
                  <p className="font-semibold">{users[index + 2].name}</p>
                  <p className="">{reply.reply}</p>
                </div>
                <div className="flex space-x-3 my-2">
                  <p>3h</p>
                  <p>Like</p>
                  <p>Reply</p>
                </div>
              </div>
            </div>
          </div>
          <ReplyReplies replies={_replies} />
        </div>
      </div>
    </div>
  );
}

function ReplyReplies({
  replies,
}: {
  replies: {
    reply: string;
    hasReply: boolean;
  }[];
}) {
  return (
    <>
      {replies.slice(0, 4).map((_reply, index) => {
        return (
          <ReplyForReply
            key={index}
            index={index}
            reply={_reply}
            isBorderLeft={index === replies.slice(0, 4).length - 1}
          />
        );
      })}
    </>
  );
}

function ReplyForReply({
  reply,
  isBorderLeft,
  index,
}: {
  reply: {
    reply: string;
    hasReply: boolean;
  };
  isBorderLeft: boolean;
  index: number;
}) {
  return (
    <div className="flex ">
      <div className="w-[7%]">
        <div className="w-full h-full flex flex-col -space-y-2 relative">
          <div className="w-full h-7    rounded-bl-xl  border-b-2 border-l-2 border-b-gray-200 border-l-gray-200"></div>
          <div
            className={`h-full w-full ${
              isBorderLeft ? "" : "border-l-2 border-l-gray-200"
            }`}
          ></div>
        </div>
      </div>
      <div className="w-[93%] relative ">
        <div className=" relative -left-4">
          <div className=" flex space-x-3  ">
            <Image
              alt="comment"
              src={`/users/${index + 4}.jpg`}
              width={0}
              height={0}
              sizes="100vh"
              className="w-8 h-8 rounded-full flex-none"
            />
            <div className=" flex flex-col ">
              <div className="bg-gray-100 rounded-xl p-2.5">
                <p className="font-semibold">{users[index + 2].name}</p>
                <p className="">{reply.reply}</p>
              </div>
              <div className="flex space-x-3 my-2">
                <p>3h</p>
                <p>Like</p>
                <p>Reply</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
