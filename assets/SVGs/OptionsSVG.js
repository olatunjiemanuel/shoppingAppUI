import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const OptionsSVG = props => (
  <Svg
    width={24}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path fill="#000" d="M0 0h24v2H0zM0 12h24v2H0zM0 6h13v2H0zM18 6h6v2h-6z" />
  </Svg>
);

export default OptionsSVG;
