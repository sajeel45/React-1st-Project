import React from "react";
import "./Wrapper.css";

const Wrapper = (props) => {
  const classes  = 'wrapper ' + props.className;
  return <div className={classes} style={{margin:props.margin, backgroundColor:props.backgroundColor,padding:props.padding}}>{props.children}</div>;
};

export default Wrapper;
