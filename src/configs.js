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
    label: "",
    type: ElementPropTypes.readOnly,
  },
  link: {
    label: "Link URL",
    type: ElementPropTypes.string,
  },
}

export const defaultConfig = {
  section1: "Background Color",
  backgroundColor: "rgba(0,0,0,1)",
  showBackground: true,
  section2: "Sale Banner Text",
  text: "<h1>50% Off Sale Items</h1>",
  section3: "Font Options",
  fontColor: "rgba(255,255,255,1)",
  fontSizeSlider: {
    labelPrefix: "rem",
    labelStepSize: 0.5,
    labelSuffix: "",
    min: 0.25,
    max: 4,
    stepSize: 0.25,
    selectedValue: 3,
    vertical: true,
  },
  textAlign: "center",
  section4: "Optional Link",
  readOnlyInstructions: "Leave URL blank for no link",
  link: "",
}
