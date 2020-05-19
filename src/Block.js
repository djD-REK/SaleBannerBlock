import React from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { getStyles } from "./getStyles"
import { defaultConfig } from "./configs"

const Block = (props) => {
  // Get the custom styles to be used in this Block:
  const classes = StyleSheet.create(getStyles(props))
  // Element helper function to combine Atomic CSS with custom styles:
  const joinClasses = props.joinClasses

  // Destructure our banner text and optional link
  const { text, link } = props
  const outputH1 = (
    <h1 className={joinClasses("pa3", css(classes.banner))}>{text}</h1>
  )

  // Only include the link <a> element if the banner's link is not empty
  return link ? <a href={link}>{outputH1}</a> : outputH1
}

Block.defaultProps = defaultConfig

export default Block
