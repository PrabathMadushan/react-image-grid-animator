import React, { useEffect, useMemo, useState } from 'react';
import './styles.scss';

interface IProps {
  image: string;
  transitionDuration: number;
  transitionType: 'SCALE' | 'FADE' | 'FADE_AND_SCALE' | 'NONE';
  imageClass?: string;
}

const Item = (props: IProps) => {
  const { image } = props;
  const [show, setShow] = useState(false);
  const [imageStste, setImageState] = useState(props.image);

  const { transitionType } = props;
  const getTreansitionTypeClasse = useMemo(() => {
    return (type: 'show' | 'hide') => {
      switch (transitionType) {
        case 'FADE':
          return `${type}-fade`;
        case 'SCALE':
          return `${type}-scale`;
        case 'NONE':
          return '';
        default:
          return `${type}-fade ${type}-scale`;
      }
    };
  }, [transitionType]);

  useEffect(() => {
    setShow(false);
    setTimeout(() => {
      setImageState(image);
      setShow(true);
    }, props.transitionDuration);
  }, [image, props.transitionDuration]);

  return (
    <div
      className={[
        show
          ? `item ${getTreansitionTypeClasse('show')}`
          : `item ${getTreansitionTypeClasse('hide')}`,
        props.imageClass,
      ].join(' ')}
    >
      <img
        src={imageStste}
        alt=''
        style={{ transitionDuration: `${props.transitionDuration}ms` }}
      />
    </div>
  );
};

export default Item;
