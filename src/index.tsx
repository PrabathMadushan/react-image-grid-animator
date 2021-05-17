import React, { useEffect, useState } from "react";
import Item from "./Item";
import "./styles.scss";
import { useInterval } from "./useInterval";

export interface IItem {
  id: string;
  image: string;
  imageStyles?: React.CSSProperties;
  imageClass?: string;
  topText?: JSX.Element;
  buttomText?: JSX.Element;
}

interface ImageGridProps {
  images: string[] | IItem[];
  visibleCount: number;
  interval: number;
  animationItemcount?: number;
  isActive?: boolean;
  transitionDuration: number;
  transitionType?: "SCALE" | "FADE" | "FADE_AND_SCALE" | "NONE";
  imageClass?: string;
  onItemClick?: (Item: IItem) => void;
}

const ImageGrid = (props: ImageGridProps) => {
  const [visibles, setVisibles] = useState<IItem[]>([]);
  const [invisibles, setInvisibles] = useState<IItem[]>([]);

  const { isActive: isActiveProp } = props;

  useEffect(() => {
    const items: IItem[] = (props.images as Array<string | IItem>).map(
      (image: string | IItem, index: number) => {
        if (typeof image === "string") {
          console.log("string");
          return {
            id: "none",
            image,
            topText: <></>,
            buttomText: <></>,
          };
        } else if (typeof image === "object") {
          return image;
        }
        return {
          id: "none",
          image,
          topText: <></>,
          buttomText: <></>,
        };
      }
    );
    const invs: IItem[] = [];
    const vs: IItem[] = [];

    items.forEach((item) => {
      if (vs.length >= props.visibleCount) {
        invs.push(item);
      } else {
        vs.push(item);
      }
    });
    setVisibles(vs);
    setInvisibles(invs);
  }, [props.images, props.visibleCount]);

  const { start, stop } = useInterval(() => {
    if (visibles.length === props.visibleCount) {
      const tc = props.images.length;
      let vc = props.visibleCount;
      vc = (vc + (vc % 2)) / 2;
      const ic = tc - props.visibleCount;
      let mxc = vc < ic ? vc : ic;
      const oneTimeCount =
        props.animationItemcount === 0
          ? Math.abs(Math.floor(Math.random() * mxc) + 1)
          : (props.animationItemcount ||
              props.images.length - props.visibleCount) > mxc
          ? mxc
          : props.animationItemcount ||
            props.images.length - props.visibleCount;
      let r_array01 = shuffleArray([...Array(visibles.length).keys()]),
        r_array02 = shuffleArray([...Array(invisibles.length).keys()]);
      r_array01 =
        Math.random() < 0.5
          ? r_array01.filter((n) => n % 2 === 0)
          : r_array01.filter((n) => n % 2 === 1);
      for (
        let i: number = 0;
        i < (oneTimeCount > r_array01.length ? r_array01.length : oneTimeCount);
        i++
      )
        [visibles[r_array01[i]], invisibles[r_array02[i]]] = [
          invisibles[r_array02[i]],
          visibles[r_array01[i]],
        ];
      setVisibles([...visibles]);
      setInvisibles([...invisibles]);
    }
  }, props.interval);

  useEffect(() => {
    if (isActiveProp) {
      start();
    } else {
      stop();
    }
  }, [isActiveProp, start, stop]);

  const shuffleArray = (array: number[]): number[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div>
      <div className="brand-animation-wraper">
        {visibles.map((item, index) => (
          <Item
            transitionDuration={props.transitionDuration}
            key={index}
            image={item}
            id={item.id}
            onClick={(id) => {
              if (props.onItemClick) props.onItemClick(item);
            }}
            transitionType={props.transitionType || "FADE_AND_SCALE"}
            imageClass={props.imageClass}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
