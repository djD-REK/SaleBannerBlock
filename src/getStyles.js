export const getStyles = (blockConfig) => {
  const {
    backgroundColorCenter,
    backgroundColorOutside,
    borderColor,
    borderRadius,
  } = blockConfig

  /*
The “color” Proptype to select the gradient background colors, and border color
The “dateRange” Proptype to capture the date for the sales banner to be displayed
The “slider” Proptype to capture border radius, start time, end time, and time zone
The “sectionHeader” Proptype to separate the sections of the Block’s configuration
The "editorFull" Proptype for the text to use as the heading message to display
*/

  return {
    banner: {
      background: backgroundColorCenter,
      background: `radial-gradient(circle, ${backgroundColorCenter} 0%, ${backgroundColorOutside} 100%)`,
      borderColor: borderColor,
      borderRadius: `${borderRadius}px`,
    },
  }
}
