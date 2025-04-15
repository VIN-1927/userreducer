import React from "react";

function Container(props) {
  return (
    <div className={"Container py-md-5 mx-auto px-4" + (props.wide ? '' : 'Container--narrow')}>{props.children}</div>
  );
}

export default Container;
