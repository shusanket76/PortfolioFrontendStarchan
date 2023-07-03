import React from "react";
import { useGetPoetryDataQuery } from "./poetryApiSlice";
import SinglePoetry from "./SinglePoetry";

const MainPoetry = () => {
  const {
    data: poetryPosts,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetPoetryDataQuery();
  let content;
  if (isLoading) {
    content = <p>LOADING..</p>;
  } else if (isError) {
    content = <p>{error?.message}</p>;
  } else if (isSuccess) {
    const { ids } = poetryPosts;
    content = ids?.length
      ? ids.map((postId) => <SinglePoetry key={postId} postId={postId} />)
      : null;
  }
  window.scrollY = 0;
  return (
    <>
      <main className="h-fit w-full mt-20  justify-center grid">
        <div
          // onClick={alert("hello")}
          className="grid gap-x-1 gap-y-4 grid-cols-1 p-3 lg:grid-cols-2  "
        >
          {content}
        </div>
      </main>
    </>
  );
};

export default MainPoetry;
