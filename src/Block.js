import React from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { getStyles } from "./getStyles"
import { defaultConfig } from "./configs"

const Block = (props) => {
  if (utils.isRendering) {
    // do something that you don't want to happen while someone is editing their theme in Site Designer
  }
  const classes = StyleSheet.create(getStyles(props))
  return (
    <div className={css(classes.banner)}>
      {props.text}
      <div style={{ color: props.borderColor }}>
        The sales banner will be displayed from...
      </div>
    </div>
  )
}

Block.defaultProps = defaultConfig

export default Block
