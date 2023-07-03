import React from "react";
import { useGetModelingsDataQuery } from "./modelingApiSlice";
import SingleModeling from "./SingleModeling";

const MainModeling = () => {
  const {
    data: modelingPosts,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetModelingsDataQuery();
  let content;

  if (isLoading) {
    content = <p>LOADING...</p>;
  }
  if (isError) {
    content = <p>{error?.message}</p>;
  }

  if (isSuccess) {
    const { ids } = modelingPosts;

    content = ids?.length
      ? ids.map((postId) => <SingleModeling key={postId} postId={postId} />)
      : "NO DATA";
  }
  return (
    <>
      <main className="h-fit w-full mt-20  grid justify-center">
        <div
          // onClick={alert("hello")}
          className="grid justify-center gap-x-1 gap-y-1 grid-cols-2 lg:grid-cols-3 "
        >
          {content}
        </div>
      </main>
    </>
  );
};

export default MainModeling;
