function Post({ id, post, postPage }) {
  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-700">
      {!postPage && (
        <div>
          <img src={post?.userImg} alt="" />
          <p>{post?.text}</p>
        </div>
      )}
    </div>
  );
}
export default Post;
