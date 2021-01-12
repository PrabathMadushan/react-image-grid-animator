import React, { useEffect, useState } from "react";
import "./styles.scss";

interface IProps {
  image: string;
  transitionDuration: number;
}

const Item = (props: IProps) => {
  const { image } = props;
  const [show, setShow] = useState(false);
  const [imageStste, setImageState] = useState(props.image);
  useEffect(() => {
    setShow(false);
    setTimeout(() => {
      setImageState(image);
      setShow(true);
    }, props.transitionDuration);
  }, [image, props.transitionDuration]);

  return (
    <div className={show ? "item show" : "item hide"}>
      <img
        src={imageStste}
        alt=""
        style={{ transitionDuration: `${props.transitionDuration}ms` }}
      />
    </div>
  );
};

export default Item;
