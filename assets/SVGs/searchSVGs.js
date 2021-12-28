import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SearchSVG = props => {
  const {color} = props;
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="m19.725 17.291-3.895-3.894a.937.937 0 0 0-.664-.273h-.636a8.085 8.085 0 0 0 1.718-5A8.123 8.123 0 0 0 8.124 0 8.123 8.123 0 0 0 0 8.124a8.123 8.123 0 0 0 8.124 8.124c1.887 0 3.62-.64 5-1.718v.636c0 .25.097.489.273.665l3.894 3.894a.933.933 0 0 0 1.324 0l1.106-1.106a.942.942 0 0 0 .004-1.328Zm-11.6-4.167c-2.762 0-5-2.234-5-5 0-2.761 2.234-5 5-5 2.76 0 4.999 2.235 4.999 5 0 2.762-2.234 5-5 5Z"
        fill={color}
      />
    </Svg>
  );
};

export default SearchSVG;
