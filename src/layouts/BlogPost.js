import React, { Fragment } from "react"
import Title from './blog/Title'
import Content from './blog/Content'



export default function BlogPost() {
  return (
    <Fragment>
      <Title />
      <hr />
      <Content />
    </Fragment>
  )
}