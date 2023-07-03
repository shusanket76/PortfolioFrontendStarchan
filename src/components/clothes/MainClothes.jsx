import React from "react";
import { useGetClothesDataQuery } from "./clothesApiSlice";
import SingleCloth from "./SingleCloth";

const MainClothes = () => {
  const {
    data: clothesData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetClothesDataQuery();
  let content = "";
  if (isSuccess) {
    const { ids } = clothesData;
    console.log(ids);
    content = ids?.length
      ? ids.map((clothId) => <SingleCloth key={clothId} clothId={clothId} />)
      : null;
  }
  return (
    <>
      <main className="h-fit w-full mt-20 grid justify-center">
        <div
          // onClick={alert("hello")}
          className="grid grid-cols-2 gap-1 lg:grid-cols-3 "
        >
          {content}
        </div>
      </main>
    </>
  );
};

export default MainClothes;
