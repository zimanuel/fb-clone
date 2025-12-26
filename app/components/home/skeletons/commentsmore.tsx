export default function CommentsMoreSkeleton() {
  return (
    <div className="p-3">
      <div className="flex flex-col space-y-3">
        <div className="flex space-x-3">
          <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="w-3/4 h-20 rounded-lg bg-gray-200 animate-pulse"></div>
        </div>

        <div className="flex space-x-3">
          <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="w-3/5 h-10 rounded-lg bg-gray-200 animate-pulse"></div>
        </div>

        <div className="flex space-x-3">
          <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="grow h-20 rounded-lg bg-gray-200 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
