import React from "react";
import NewsSlider from "../Widgets/NewsSlider/slider";

const Home = () => {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={0}
        amount={3}
        settings={{
          dots: false
        }}
      />
    </div>
  );
};

export default Home;
