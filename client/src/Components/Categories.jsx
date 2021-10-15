import React from "react";
import Category8 from "./Categories/Category8";
import Category9 from "./Categories/Category9.jsx";
import Category10 from "./Categories/Category10.jsx";
import Category11 from "./Categories/Category11.jsx";
import Category12 from "./Categories/Category12.jsx";
import CategoryENGG from "./Categories/CategoryENGG.jsx";
import CategoryGOVT from "./Categories/CategoryGOVT.jsx";
import CategoryICSE from "./Categories/CategoryICSE.jsx";
import CategoryJEE from "./Categories/CategoryJEE.jsx";
import CategoryNEET from "./Categories/CategoryNEET.jsx";

const Categories = () => {
  return (
    <div style={{ flexDirection: "column" }}>
      <Category8 />
      {/* <Category9 />
      <Category10 />
      <Category11 />
      <Category12 />
      <CategoryJEE />
      <CategoryNEET />
      <CategoryICSE />
      <CategoryGOVT />
      <CategoryENGG /> */}
    </div>
  );
};

export default Categories;
