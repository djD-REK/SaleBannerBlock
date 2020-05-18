import { ElementPropTypes } from "@volusion/element-proptypes"

export const configSchema = {
  section1: {
    type: ElementPropTypes.sectionHeader,
  },
  backgroundImage: {
    label: "Background Image With Default",
    type: ElementPropTypes.image,
  },
  section2: {
    type: ElementPropTypes.sectionHeader,
  },
  backgroundColor: {
    label: "Background Color (Modal Box)",
    type: ElementPropTypes.color,
  },
  backgroundOpacitySlider: {
    label: "Background Opacity",
    type: ElementPropTypes.slider,
  },
  borderRadiusSlider: {
    label: "Border Radius (Modal Box)",
    type: ElementPropTypes.slider,
  },
  section3: {
    type: ElementPropTypes.sectionHeader,
  },
  text: {
    label: "Text Content",
    type: ElementPropTypes.string,
  },
}

export const defaultConfig = {
  section1: "Background Image",
  backgroundImage: {
    uriBase: "http://d21ivvgspl06jm.cloudfront.net/",
    imagePath: "element-block-assets/slideshow/slide2.jpg",
    altText: "Monument Valley",
    width: 1600,
    height: 500,
  },
  section2: "Modal Box",
  backgroundColor: "black",
  backgroundOpacitySlider: {
    labelPrefix: "",
    labelStepSize: 5,
    labelSuffix: "%",
    min: 0,
    max: 100,
    stepSize: 10,
    selectedValue: 40,
    vertical: false,
  },
  borderRadiusSlider: {
    labelPrefix: "",
    labelStepSize: 1,
    labelSuffix: "px",
    min: 0,
    max: 50,
    stepSize: 5,
    selectedValue: 10,
    vertical: false,
  },
  section3: "Sale Banner Text",
  lineOneText: `NOW OFFERING THE BEST DISCOUNTS OF THE YEAR`,
  lineTwoText: "50% OFF SALE ITEMS",
  buttonText: "Get The Best Deals",
  textColor: "white",
}
