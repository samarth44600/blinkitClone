import ItemComponent from "src/components/ItemComponent/ItemComponent";
import Carousels from "../Carousels";
import style from "../Carousel.module.scss";
import data from "src/utils/products.json";

type Props = {};

const FandD = (props: Props) => {
  return (
    <div className={style.mainDiv}>
      <h3 style={{ padding: "1.5rem" }}>F and D</h3>
      <Carousels
        children={data.map((data) => {
          return (
            <ItemComponent
              imageSrc={data.image}
              altText={"description of the product"}
              name={data.title}
              quantity={"2kg"}
              beforePrice={"140"}
              afterPrice={data.price}
              id={data.id}
            />
          );
        })}
      />
    </div>
  );
};

export default FandD;
