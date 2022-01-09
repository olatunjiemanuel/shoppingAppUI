import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CartSVG = props => {
  const {color} = props;
  return (
    <Svg
      width={26}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M25.714 8.214v.715c0 .591-.48 1.071-1.071 1.071h-.357l-1.166 8.16A2.143 2.143 0 0 1 20.998 20H4.716a2.143 2.143 0 0 1-2.122-1.84L1.43 10H1.07C.48 10 0 9.52 0 8.93v-.715c0-.591.48-1.071 1.071-1.071h3.007L8.845.588a1.429 1.429 0 0 1 2.31 1.68L7.611 7.144h10.493l-3.545-4.874a1.429 1.429 0 0 1 2.31-1.68l4.767 6.554h3.007c.591 0 1.071.48 1.071 1.071ZM13.93 16.071v-5a1.071 1.071 0 1 0-2.143 0v5a1.071 1.071 0 0 0 2.143 0Zm5 0v-5a1.071 1.071 0 1 0-2.143 0v5a1.071 1.071 0 0 0 2.142 0Zm-10 0v-5a1.071 1.071 0 1 0-2.143 0v5a1.071 1.071 0 0 0 2.143 0Z"
        fill={color}
      />
    </Svg>
  );
};

export default CartSVG;
