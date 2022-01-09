import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HomeTabSvg = props => {
  const {color} = props;
  return (
    <Svg
      width={18}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M7 11.996h4v7H7v-7Z" fill="#fff" />
      <Path
        d="M17.42 8.176 9.71.296a1 1 0 0 0-1.42 0L.58 8.186A2 2 0 0 0 0 9.616v8.38a2 2 0 0 0 1.89 2H5v-9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h3.11a2 2 0 0 0 1.89-2v-8.38a2.07 2.07 0 0 0-.58-1.44Z"
        fill={color}
      />
    </Svg>
  );
};

export default HomeTabSvg;
