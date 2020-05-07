import React from "react";

/**
 * Holds the content for the blog post.
 */
export default function Content(props) {
  return <p style={{ whiteSpace: 'pre-line' }}>{ props.blogPost }</p>
}