import React from "react";

export default function Content(props) {
  return <p style={{ whiteSpace: 'pre-line' }}>{ props.blogPost }</p>
}