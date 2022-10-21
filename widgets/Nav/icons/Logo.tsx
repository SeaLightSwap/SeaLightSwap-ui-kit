import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  return (
    <Svg viewBox="0 0 90 22" {...props}>
      <image width="90" height="22" href="/images/Swaps2.png"/>
    </Svg>
  );
};

export default Logo;