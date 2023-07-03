import React from "react";
import { useGetNatureDataQuery } from "./natureApiSlice";
import SingleNature from "./SingleNature";

const MainNature = () => {
  const {
    data: naturePosts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetNatureDataQuery();
  let content;
  if (isSuccess) {
    const { ids } = naturePosts;
    content = ids?.length
      ? ids.map((postId) => <SingleNature key={postId} postId={postId} />)
      : null;
  }
  return (
    <>
      <main className="h-fit w-full mt-20 grid justify-center">
        <div
          // onClick={alert("hello")}
          className="grid  justify-center gap-x-1 gap-y-1 grid-cols-2 lg:grid-cols-3   "
        >
          {content}
        </div>
      </main>
    </>
  );
};

export default MainNature;
