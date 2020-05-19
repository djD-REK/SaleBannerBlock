import { ElementPropTypes } from "@volusion/element-proptypes"

export const configSchema = {
  section1: {
    type: ElementPropTypes.sectionHeader,
  },
  backgroundColor: {
    label: "Background Color",
    type: ElementPropTypes.color,
  },
  section2: {
    type: ElementPropTypes.sectionHeader,
  },
  text: {
    label: "Heading Text",
    type: ElementPropTypes.editorFull,
  },
  section3: {
    type: ElementPropTypes.sectionHeader,
  },
  color: {
    label: "Font Color",
    type: ElementPropTypes.color,
  },
  fontSizeSlider: {
    label: "Font Size (rem)",
    type: ElementPropTypes.slider,
  },
  textAlign: {
    label: "Text Alignment",
    type: ElementPropTypes.oneOf(["left", "center", "right"]),
  },
  section4: {
    type: ElementPropTypes.sectionHeader,
  },
  readOnlyInstructions: {
    type: ElementPropTypes.readOnly,
  },
  link: {
    label: "Link URL",
    type: ElementPropTypes.string,
  },
}

// Set up default configuration for dateRange picker (Sales Dates)
const today = new Date() // start date
const nextWeek = new Date() // end date
nextWeek.setDate(nextWeek.getDate() + 7)
export const defaultConfig = {
  section1: "Background Color",
  backgroundColor: "rgba(0,0,0,1)",
  showBackground: true,
  section2: "Sale Banner Text",
  text: "50% Off Sale Items",
  section3: "Font Options",
  fontColor: "rgba(255,255,255,1)",
  fontSizeSlider: {
    labelPrefix: "rem",
    labelStepSize: 0.5,
    labelSuffix: "",
    min: 0.25,
    max: 7,
    stepSize: 0.25,
    selectedValue: 4.5,
    vertical: true,
  },
  textAlign: "center",
  section4: "Optional Link",
  readOnlyInstructions: "Leave URL blank for no link",
  link: "/sale",
}
