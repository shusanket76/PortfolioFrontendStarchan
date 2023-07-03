import { store } from "../../app/store";
import { extendedClothDesignNameApiSlice } from "../clothes/clothDesignApiSlice";
import { extendedPoetryApiSlice } from "../poetry/poetryApiSlice";
import { extendedModelingApiSlice } from "../modeling/modelingApiSlice";
import { extendedNatureApiSlice } from "../nature/natureApiSlice";
import { extendedClothesApiSlice } from "../clothes/clothesApiSlice";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Prefetch = () => {
  //   const singlerun = useRef(false);
  let cloth;
  useEffect(() => {
    console.log("subscribing");
    cloth = store.dispatch(
      extendedClothesApiSlice.endpoints.getClothesData.initiate()
    );
    const clothdesign = store.dispatch(
      extendedClothDesignNameApiSlice.endpoints.getClothDesignData.initiate()
    );
    const poetry = store.dispatch(
      extendedPoetryApiSlice.endpoints.getPoetryData.initiate()
    );
    const nature = store.dispatch(
      extendedNatureApiSlice.endpoints.getNatureData.initiate()
    );
    const modeling = store.dispatch(
      extendedModelingApiSlice.endpoints.getModelingsData.initiate()
    );

    return () => {
      console.log("unsubscribing");
      cloth.unsubscribe();
      clothdesign.unsubscribe();
      poetry.unsubscribe();
      nature.unsubscribe();
      modeling.unsubscribe();
    };
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Prefetch;
