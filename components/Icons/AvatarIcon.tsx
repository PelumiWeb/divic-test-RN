import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function AvatarIcon(props:any) {
  return (
    <Svg
      width={26}
      height={25}
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_1_2593)">
        <Path
          d="M12.99 0c3.458 0 6.57 1.404 8.828 3.662a12.47 12.47 0 013.662 8.828c0 3.458-1.404 6.57-3.662 8.828a12.47 12.47 0 01-17.656 0A12.4 12.4 0 01.5 12.49c0-3.458 1.404-6.57 3.662-8.828A12.471 12.471 0 0112.99 0zM8.9 11.046c-.224 0-.407.06-.508.142a.361.361 0 00-.143.163.427.427 0 00-.04.284c0 .306.162.712.488 1.18l1.017 1.628c.407.65.834 1.322 1.383 1.81.509.468 1.14.793 1.953.793.895 0 1.546-.325 2.075-.834.549-.508.996-1.22 1.424-1.932l1.16-1.892c.223-.488.284-.813.243-1.017-.02-.122-.162-.163-.366-.183h-.386c-.102 0-.204 0-.326-.02l.387-1.75c-2.93.468-5.127-1.708-8.218-.427l.203 2.075c-.122 0-.244 0-.346-.02zm-4.577 8.421c1.445-.508 3.987-.773 5.167-1.566.203-.265.427-.59.63-.875.123-.183.224-.346.326-.468l.061-.06c-.488-.51-.895-1.12-1.281-1.73L8.21 13.141c-.387-.57-.59-1.078-.59-1.485 0-.204.02-.387.101-.53a1.12 1.12 0 01.346-.406c.081-.04.163-.102.244-.122a27.905 27.905 0 01-.04-2.93c.02-.223.06-.447.122-.67.264-.936.915-1.689 1.729-2.197.284-.183.59-.326.935-.448.59-.224.306-1.119.956-1.139 1.526-.04 4.028 1.261 5.004 2.319.57.61.936 1.424.997 2.502l-.06 2.665a.753.753 0 01.548.549c.082.325 0 .773-.284 1.404 0 .02-.02.02-.02.04l-1.16 1.912c-.448.733-.916 1.485-1.526 2.055l-.02.02c.081.102.163.224.244.346.163.224.325.488.508.732 1.079.916 3.927 1.2 5.432 1.75a11.096 11.096 0 002.461-6.998 11.1 11.1 0 00-3.255-7.872 11.1 11.1 0 00-7.872-3.255 11.1 11.1 0 00-7.872 3.255 11.1 11.1 0 00-3.255 7.872 10.892 10.892 0 002.441 6.957zm11.84-1.058c-.286-.325-.57-.752-.835-1.118-.081-.102-.142-.224-.224-.306-.549.407-1.22.672-2.095.672-.915 0-1.627-.326-2.217-.834 0 0 0 .02-.02.02-.102.142-.204.285-.326.468-.224.325-.468.671-.692.976.02 2.055 5.208 3.275 6.408.122z"
          fill={props.color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_2593">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H25V25H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default AvatarIcon;
