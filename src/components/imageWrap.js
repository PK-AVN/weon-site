import React from "react";

const ImageWrap = (props) => {
  return (
    <>
      {props.isTitle ? (
        <img src={props.back} />
      ) : (
        <img src={props.back} className="img-background" />
      )}
    </>
  );
};

export default ImageWrap;
