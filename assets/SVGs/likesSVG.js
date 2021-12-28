import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const LikesSVG = props => {
  const {color} = props;
  return (
    <Svg
      width={21}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M15.148 0c-2.001 0-3.71 1.282-4.65 2.167C9.558 1.282 7.853 0 5.853 0 2.406 0 0 2.16 0 5.253c0 3.408 2.989 5.61 5.88 7.741 1.365 1.007 2.778 2.048 3.861 3.201.182.193.45.305.73.305h.056c.281 0 .548-.112.729-.305 1.085-1.153 2.497-2.195 3.863-3.2C18.009 10.864 21 8.661 21 5.252 21 2.161 18.594 0 15.148 0Z"
        fill={color}
      />
    </Svg>
  );
};

export default LikesSVG;
