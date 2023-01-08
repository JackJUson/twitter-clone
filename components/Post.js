import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

function Post({ id, post, postData }) {
  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-700">
      {!postData && (
        <img
          src={post?.userImg}
          alt=""
          className="h-11 w-11 rounded-full mr-4"
        />
      )}
      <div className="flex flex-col space-y-2 w-full">
        <div className={`flex ${!postData && "justify-between"}`}>
          {postData && (
            <img
              src={post?.userImg}
              alt="Profile Pic"
              className="h-11 w-11 rounded-full mr-4"
            />
          )}
          <div className="text-[#62767d]">
            <div className="inline-block group">
              <h4
                className={`font-bold text-[15px] sm:text-base text-[#d9d9d9] 
                group-hover:underline ${!postData && "inline-block"}`}
              >
                {post?.username}
              </h4>
              <span
                className={`text-sm sm:text-[15px] ${!postData && "ml-1.5"}`}
              >
                @{post?.tag}
              </span>
            </div>{" "}
            ·{" "}
            {!postData && (
              <p className="text-[#d9d9d9] text-[15px] sm:text-base mt-0.5">
                {post?.text}
              </p>
            )}
          </div>
          <div className="icon group flex-shrink-0 ml-auto">
            <EllipsisHorizontalIcon 
            className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
          </div>
        </div>
        {postData && (
          <p className="text-[#d9d9d9] mt-0.5 text-xl">{post?.text}</p>
        )}
        <img
          src={post?.image}
          alt=""
          className="rounded-2xl max-h-[700px] object-cover mr-2"
        />
      </div>
    </div>
  );
}
export default Post;
