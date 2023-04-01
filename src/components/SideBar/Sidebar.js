import React from "react";
import "./Sidebar.css";

const Sidebar = (props) => {
    const classes = "sidebar " + props.className;
    return <div className={classes} style={{marginTop:props.marginTop,background:props.background,backgroundColor:props.backgroundColor}}>{props.children}</div>;
}
export default Sidebar;
