import parameterMetadata from './parameterMetadata';

export default {
  presets: '',

  f: parameterMetadata.f.initial,
  k: parameterMetadata.k.initial,
  dA: parameterMetadata.dA.initial,
  dB: parameterMetadata.dB.initial,
  timestep: parameterMetadata.timestep.initial,

  seed: {
    type: 0,
    circle: {
      radius: 100
    },
    square: {
      width: 200,
      height: 200,
      rotation: 0
    },
    text: {
      value: 'Reaction diffusion',
      size: 85,
      rotation: 0
    },
    image: {
      filename: '',
      image: null,
      fit: 0,
      scale: 1.0,
      rotation: 0
    }
  },

  renderingStyle: '',
  useSmoothing: false,

  gradientColors: {
    color1RGB: {r:0, g:0, b:0},
    color2RGB: {r:0, g:255, b:0},
    color3RGB: {r:255, g:255, b:0},
    color4RGB: {r:255, g:0, b:0},
    color5RGB: {r:100, g:0, b:0},

    color1Stop: 0,
    color2Stop: .2,
    color3Stop: .21,
    color4Stop: .4,
    color5Stop: .6,

    color1Enabled: true,
    color2Enabled: true,
    color3Enabled: true,
    color4Enabled: true,
    color5Enabled: true
  },

  hsl: {
    from: {
      min: 0.0,
      max: 1.0
    },
    to: {
      min: .21,
      max: .85
    },
    saturation: .7,
    luminosity: .7
  },

  canvas: {
    width: parameterMetadata.canvas.width.initial,
    height: parameterMetadata.canvas.height.initial,
    scale: parameterMetadata.canvas.scale.initial,
    isMaximized: false
  },

  styleMap: {
    imageLoaded: false,
    scale: 1.0,
    rotation: 0,
    translate: {
      x: 0.0,
      y: 0.0
    },
    f: parameterMetadata.styleMapInitialOverride.f.initial,
    k: parameterMetadata.styleMapInitialOverride.k.initial,
    dA: parameterMetadata.styleMapInitialOverride.dA.initial,
    dB: parameterMetadata.styleMapInitialOverride.dB.initial,
    animation: {
      enabled: false,
      parameter: '',
      easingEquation: '',
      speed: 1.0
    }
  },

  bias: {
    x: parameterMetadata.bias.x.initial,
    y: parameterMetadata.bias.y.initial
  }
};