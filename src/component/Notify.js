import React from "react";

export default function notify(props) {
 
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.msg}</strong>
            </div>
  )
}
