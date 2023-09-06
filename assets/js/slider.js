/* slider */

const element = document.getElementById("image-compare");

const options = {
  
  // UI Theme Defaults
  
  controlColor: "#0092e3",
  controlShadow: true,
  addCircle: false,
  addCircleBlur: true,
  
  // Label Defaults
  
  showLabels: false,
  labelOptions: {
    before: 'Before',
    after: 'After',
    onHover: false
  },
  
  // Smoothing
  
  smoothing: false,
  smoothingAmount: 10,
  
  // Other options
  
  hoverStart: false,
  verticalMode: false,
  startingPoint: 50,
  fluidMode: false
};

const viewer = new ImageCompare(element, options).mount();