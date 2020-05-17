export const getStyles = (blockConfig) => {
  const {
    backgroundColorCenter,
    backgroundColorOutside,
    borderColor,
    borderRadius,
  } = blockConfig

  return {
    banner: {
      background: backgroundColorCenter,
      background: `radial-gradient(circle, ${backgroundColorCenter} 0%, ${backgroundColorOutside} 100%)`,
      borderColor: borderColor,
      borderRadius: `${borderRadius}px`,
    },
  }
}
