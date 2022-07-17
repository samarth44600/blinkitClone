import React, { useState } from "react";
import style from "./Collection.module.scss";

import images from "./data";
import Images from "./Images";

type Props = {};

const Collection = (props: Props) => {
  const [collection, setCollections] = useState(images);
  console.log(images);

  return (
    <div className={style.collectionDiv}>
      {collection.map((data) => {
        return <Images data={data} />;
      })}
    </div>
  );
};

export default Collection;
