import React from "react";
import Prefetch from "./components/auth/Prefetch";
import { Routes, Route } from "react-router-dom";
import DashedLayout from "./components/layout/DashedLayout";
import Home from "./components/home/Home";
import MainClothes from "./components/clothes/MainClothes";
import ClothesForm from "./components/clothes/ClothesForm";
import MainModeling from "./components/modeling/MainModeling";
import ModelingForm from "./components/modeling/ModelingForm";
import MainNature from "./components/nature/MainNature";
import NatureForm from "./components/nature/NatureForm";
import MainPoetry from "./components/poetry/MainPoetry";
import PoetryForm from "./components/poetry/PoetryForm";
import ClothDesignName from "./components/clothes/ClothDesignName";
import SingleModelingImage from "./components/modeling/SingleModelingImage";
import SingleNatureImage from "./components/nature/SingleNatureImage";
import SingleClothingImage from "./components/clothes/SingleClothingImage";
import ScrollToTop from "./components/auth/ScrollToTop";
import SinglePoetryInformation from "./components/poetry/SinglePoetryInformation";
// import Userupload from "./components/userUpload/Userupload";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<ScrollToTop />}>
          <Route element={<Prefetch />}>
            <Route path="/" element={<DashedLayout />}>
              <Route index element={<Home />}></Route>
              <Route path="/clothes">
                <Route index element={<MainClothes />}></Route>
                <Route path="add" element={<ClothesForm />}></Route>
                <Route path="singleImage/:id" element={<SingleClothingImage />}>
                  {" "}
                </Route>
              </Route>
              {/* END CLOTHES */}
              <Route path="/modeling">
                <Route index element={<MainModeling />}></Route>
                <Route
                  path="singleImage/:id"
                  element={<SingleModelingImage />}
                ></Route>
                <Route path="add" element={<ModelingForm />}></Route>
              </Route>
              {/* END OF MODELING */}
              <Route path="nature">
                <Route index element={<MainNature />}></Route>
                <Route
                  path="singleImage/:id"
                  element={<SingleNatureImage />}
                ></Route>
                <Route path="add" element={<NatureForm />} />
              </Route>
              {/* END OF NATURE */}
              {/* <Route path="userupload" element={<Userupload />}></Route> */}
              <Route path="poetry">
                <Route index element={<MainPoetry />}></Route>
                <Route
                  path="singlePoetry/:id"
                  element={<SinglePoetryInformation />}
                ></Route>
                <Route path="add" element={<PoetryForm />} />
              </Route>
              {/* END OF POETRY */}
              <Route path="designName" element={<ClothDesignName />}></Route>
            </Route>
            {/* END HOME */}
          </Route>
        </Route>
        {/* END PREFETCH */}
      </Routes>
    </>
  );
};

export default App;
