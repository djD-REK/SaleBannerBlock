import React from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { getStyles } from "./getStyles"
import { defaultConfig } from "./configs"

const Block = (props) => {
  // Get the custom styles to be used in this Block:
  const classes = StyleSheet.create(getStyles(props))
  // Element helper function to combine Atomic CSS with custom styles:
  const joinClasses = props.joinClasses

  // Destructure the banner text and optional link from the props:
  const { text, link } = props

  // The editorFull Element Proptype returns html as text, not HTML markup:
  const outputAsMarkup = { __html: text }

  // Make a <div> element based on the banner text using the custom styles:
  const outputDiv = (
    <div
      // Combine an Atomic CSS class (pa3, for padding) with custom styles:
      className={joinClasses("pa3", css(classes.banner))}
      // This will render the HTML markup, such as headings, in the Block:
      dangerouslySetInnerHTML={outputAsMarkup}
      // The rich text editor from editorFull does not allow <script> tags,
      // preventing the possibility of XSS (cross-site scripting) attacks.
    ></div>
  )

  // Only include the link <a> element if the banner's link is not empty:
  const outputWithLink = link ? <a href={link}>{outputDiv}</a> : outputDiv

  return outputWithLink
}

Block.defaultProps = defaultConfig

export default Block
