export default {
  f: {
    min: 0.0,
    max: 0.1,
    initial: 0.0820
  },
  k: {
    min: 0.03,
    max: 0.07,
    initial: 0.0610
  },
  dA: {
    min: 0.2,
    max: 0.25,
    initial: .2072
  },
  dB: {
    min: 0.01,
    max: 0.8,
    initial: .1088
  },
  timestep: {
    min: 0.0,
    max: 2.0,
    initial: 0.2
  },
  canvas: {
    width: {
      min: 0,
      max: window.innerWidth,
      initial: window.innerWidth
    },
    height: {
      min: 0,
      max: window.innerHeight,
      initial: window.innerHeight
    },
    scale: {
      min: .01,
      max: 3,
      initial: 0.5
    }
  },
  bias: {
    x: {
      max: .5,
      initial: 0.0
    },
    y: {
      max: .5,
      initial: 0.0
    }
  },
  styleMapInitialOverride: {
    f: {
      min: 0.0,
      max: 0.1,
      initial: 0.0408
    },
    k: {
      min: 0.03,
      max: 0.07,
      initial: 0.0575
    },
    dA: {
      min: 0.2,
      max: 0.25,
      initial: .2097
    },
    dB: {
      min: 0.01,
      max: 0.8,
      initial: .1050
    },
  }
};