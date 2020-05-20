export const getStyles = (blockConfig) => {
  const { backgroundColor, fontColor, fontSizeSlider, textAlign } = blockConfig
  const fontSize = fontSizeSlider.selectedValue

  return {
    banner: {
      backgroundColor: backgroundColor,
      color: fontColor,
      fontSize: `${fontSize}rem`,
      textAlign: textAlign,
    },
  }
}
