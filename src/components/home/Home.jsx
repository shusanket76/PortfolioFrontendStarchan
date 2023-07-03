import React from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

const Home = () => {
  return (
    <main>
      <section className="">
        <FirstSection />
      </section>
      <section>
        <SecondSection />
      </section>
    </main>
  );
};

export default Home;
