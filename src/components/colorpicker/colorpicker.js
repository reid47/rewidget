import React from 'react';
import PropTypes from 'prop-types';
import { clsNs, uniqueId } from '../../util';
import { Flex, Box } from '../flex';

const normalize = (n, min, max) => n < min ? min : n > max ? max : n;

const hslToRgb = (h, s, l) => {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const h2 = (h % 360) / 60;
  const x = c * (1 - Math.abs(h2 % 2 - 1));

  let rgb1 = [];
  if (0 <= h2 && h2 < 1) {
    rgb1 = [c, x, 0];
  } else if (1 <= h2 && h2 < 2) {
    rgb1 = [x, c, 0];
  } else if (2 <= h2 && h2 < 3) {
    rgb1 = [0, c, x];
  } else if (3 <= h2 && h2 < 4) {
    rgb1 = [0, x, c];
  } else if (4 <= h2 && h2 < 5) {
    rgb1 = [x, 0, c];
  } else if (5 <= h2 && h2 < 6) {
    rgb1 = [c, 0, x];
  }

  const m = l - 0.5 * c;
  return [
    Math.round((rgb1[0] + m) * 255), 
    Math.round((rgb1[1] + m) * 255), 
    Math.round((rgb1[2] + m) * 255)
  ];
}

const rgbToHsl = (r, g, b) => {
  const r1 = r / 255;
  const g1 = g / 255;
  const b1 = b / 255;
  const min = Math.min(r1, g1, b1);
  const max = Math.max(r1, g1, b1);
  const l = (min + max) / 2;
  const s = min === max ? 0
    : l < 0.5 ? ((max - min) / (max + min))
    : ((max - min) / (2 - max - min));
  const h = s === 0 ? 0
    : r1 === max ? ((g1 - b1) / (max - min))
    : g1 === max ? (2 + (b1 - r1) / (max - min))
    : (4 + (r1 - g1) / (max - min));

  return [
    Math.round(h * 60),
    Math.round(s * 100),
    Math.round(l * 100)
  ];
}

const numToHex = n => (n < 16 ? '0' : '') + Number(n).toString(16);

const rgbToHex = (r, g, b) => {
  return `${numToHex(r)}${numToHex(g)}${numToHex(b)}`;
}

const parseHex = hex => {
  if (!hex || hex.length !== 6) return;
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  if (isNaN(r) || isNaN(g) || isNaN(b)) return;
  return [ r, g, b ];
}

export class ColorPicker extends React.Component {
  static propTypes = {
    initialMode: PropTypes.oneOf(['rgb', 'hex', 'hsl']),
    hideColorSpace: PropTypes.bool,
    hideModeSwitch: PropTypes.bool
  };

  static defaultProps = {
    initialMode: 'rgb',
    hideColorSpace: false,
    hideModeSwitch: false
  };

  constructor(props) {
    super(props);

    this.onHueChange = this.onHueChange.bind(this);
    this.onSaturationChange = this.onSaturationChange.bind(this);
    this.onLightnessChange = this.onLightnessChange.bind(this);
    this.onAlphaChange = this.onAlphaChange.bind(this);
    this.onRedChange = this.onRedChange.bind(this);
    this.onGreenChange = this.onGreenChange.bind(this);
    this.onBlueChange = this.onBlueChange.bind(this);
    this.onHexChange = this.onHexChange.bind(this);
    this.toggleMode = this.toggleMode.bind(this);
    this.onGradientMouseDown = this.onGradientMouseDown.bind(this);
    this.setStateFromRgb = this.setStateFromRgb.bind(this);
    this.setStateFromHsl = this.setStateFromHsl.bind(this);

    this.rId = uniqueId('color-input');
    this.gId = uniqueId('color-input');
    this.bId = uniqueId('color-input');
    this.hId = uniqueId('color-input');
    this.sId = uniqueId('color-input');
    this.lId = uniqueId('color-input');
    this.aId = uniqueId('color-input');
    this.hexId = uniqueId('color-input');

    this.state = {
      mode: props.initialMode,
      alpha: 1.0,
      hue: 0,
      saturation: 100,
      lightness: 50,
      red: 255,
      green: 0,
      blue: 0,
      hex: 'ff0000'
    };
  }

  setStateFromRgb(red, green, blue) {
    const [hue, saturation, lightness] = rgbToHsl(red, green, blue);
    const hex = rgbToHex(red, green, blue);
    this.setState({red, green, blue, hue, saturation, lightness, hex});
  }

  setStateFromHsl(hue, saturation, lightness) {
    const [red, green, blue] = hslToRgb(hue, saturation / 100, lightness / 100);
    const hex = rgbToHex(red, green, blue);
    this.setState({red, green, blue, hue, saturation, lightness, hex});
  }

  onHueChange(evt) {
    const hue = normalize(evt.target.valueAsNumber, 0, 360);
    const { saturation, lightness } = this.state;
    this.setStateFromHsl(hue, saturation, lightness);
  }

  onSaturationChange(evt) {
    const saturation = normalize(evt.target.valueAsNumber, 0, 100);
    const { hue, lightness } = this.state;
    this.setStateFromHsl(hue, saturation, lightness);
  }

  onLightnessChange(evt) {
    const lightness = normalize(evt.target.valueAsNumber, 0, 100);
    const { hue, saturation } = this.state;
    this.setStateFromHsl(hue, saturation, lightness);
  }

  onRedChange(evt) {
    const red = normalize(evt.target.valueAsNumber, 0, 255);
    const { green, blue } = this.state;
    this.setStateFromRgb(red, green, blue);
  }

  onGreenChange(evt) {
    const green = normalize(evt.target.valueAsNumber, 0, 255);
    const { red, blue } = this.state;
    this.setStateFromRgb(red, green, blue);
  }

  onBlueChange(evt) {
    const blue = normalize(evt.target.valueAsNumber, 0, 255);
    const { red, green } = this.state;
    this.setStateFromRgb(red, green, blue);
  }

  onHexChange(evt) {
    const parsed = parseHex(evt.target.value);
    if (parsed) {
      const [ red, green, blue ] = parsed;
      this.setStateFromRgb(red, green, blue);
    } else {
      this.setState({hex: evt.target.value});
    }
  }

  onAlphaChange(evt) {
    this.setState({alpha: evt.target.valueAsNumber});
  }

  onGradientMouseDown(evt) {
    const rect = evt.target.getBoundingClientRect();
    const leftPct = Math.round((evt.pageX - rect.left) * 100 / evt.target.clientWidth);
    const topPct = Math.round((evt.pageY - rect.top) * 100 / evt.target.clientHeight);
    // if (leftPct)

    const { hue } = this.state;
    // this.setStateFromHsl(hue, topPct, lightness);
  }

  toggleMode(evt) {
    const { mode } = this.state;
    const newMode = mode === 'rgb' ? 'hex'
      : mode === 'hex' ? 'hsl' : 'rgb';
    this.setState({mode: newMode});
  }

  render() {
    const { hideColorSpace, hideModeSwitch } = this.props;
    const { mode, alpha, hue, saturation, lightness, red, green, blue, hex } = this.state;
    const [ plainR, plainG, plainB ] = hslToRgb(hue, 1, 0.5);

    return <div className={clsNs('colorpicker')}>
      {!hideColorSpace && <div
        role="none"
        className={clsNs('colorpicker-gradient-base')} 
        style={{
          backgroundColor: `rgb(${plainR}, ${plainG}, ${plainB})`
        }}
        onMouseDown={this.onGradientMouseDown}>
        <div className={clsNs('colorpicker-gradient-lightness')}>
          <div className={clsNs('colorpicker-gradient-darkness')} />
        </div>
        <div className={clsNs('colorpicker-gradient-marker')} style={{
          left: saturation + '%',
          top: lightness + '%'
        }}/>
      </div>}
      <div className={clsNs('colorpicker-controls')}>
        <Flex>
          <Box fixed>
            <div className={clsNs('colorpicker-preview')}>
              <div className={clsNs('colorpicker-preview-color')} style={{
                backgroundColor: `rgba(${red}, ${green}, ${blue}, ${alpha})`
              }}/>
            </div>
          </Box>
          <Box>
            <Flex col>
              <Box>
                <input
                  className={clsNs('colorpicker-hue-slider')}
                  type="range"
                  min="0"
                  max="360"
                  step="1"
                  value={hue}
                  onChange={this.onHueChange}
                  aria-label="Select hue value"
                  />
              </Box>
              <Box>
                <div className={clsNs('colorpicker-alpha-slider-bg')}>
                  <input
                    className={clsNs('colorpicker-alpha-slider')}
                    style={{
                      background: `linear-gradient(to right, rgba(${plainR}, ${plainG}, ${plainB}, 0), rgba(${plainR}, ${plainG}, ${plainB}, 1.0))`
                    }}
                    type="range" 
                    min="0" 
                    max="1"
                    step="0.01"
                    value={alpha}
                    onChange={this.onAlphaChange}
                    aria-label="Select alpha value"
                    />
                </div>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Flex spacing="zero" spaceBetween>
          {!hideModeSwitch && <Box fixed>
            <button
              className={clsNs('colorpicker-mode-toggle')}
              onClick={this.toggleMode}>{mode}</button>
          </Box>}
          {mode === 'rgb' && <Box fixed><label htmlFor={this.rId}>
            r:
            <input
              id={this.rId}
              className={clsNs('colorpicker-number-input')}
              type="number"
              placeholder="0-255"
              min="0"
              max="255"
              step="1" 
              value={red}
              onChange={this.onRedChange} />
          </label></Box>}
          {mode === 'rgb' && <Box fixed><label htmlFor={this.gId}>
            g:
            <input
              id={this.gId}
              className={clsNs('colorpicker-number-input')}
              type="number"
              placeholder="0-255"
              min="0"
              max="255"
              step="1"
              value={green}
              onChange={this.onGreenChange} />
          </label></Box>}
          {mode === 'rgb' && <Box fixed><label htmlFor={this.bId}>
            b:
            <input
              id={this.bId}
              className={clsNs('colorpicker-number-input')}
              type="number"
              placeholder="0-255"
              min="0"
              max="255"
              step="1"
              value={blue}
              onChange={this.onBlueChange} />
          </label></Box>}
          {mode === 'hsl' && <Box fixed><label htmlFor={this.hId}>
            h:
            <input
              id={this.hId}
              className={clsNs('colorpicker-number-input')}
              type="number"
              placeholder="0-360"
              min="0"
              max="360"
              step="1"
              value={hue}
              onChange={this.onHueChange} />
          </label></Box>}
          {mode === 'hsl' && <Box fixed><label htmlFor={this.sId}>
            s:
            <input
              id={this.sId}
              className={clsNs('colorpicker-number-input')}
              type="number"
              placeholder="0-100"
              min="0"
              max="100"
              step="1"
              value={saturation}
              onChange={this.onSaturationChange} />
          </label></Box>}
          {mode === 'hsl' && <Box fixed><label htmlFor={this.lId}>
            l:
            <input
              id={this.lId}
              className={clsNs('colorpicker-number-input')}
              type="number"
              placeholder="0-100"
              min="0"
              max="100"
              step="1"
              value={lightness}
              onChange={this.onLightnessChange} />
          </label></Box>}
          {mode === 'hex' && <Box fixed><label htmlFor={this.hexId}>
            #
            <input
              id={this.hexId}
              className={clsNs('colorpicker-number-input')}
              type="text"
              placeholder="000000"
              value={hex}
              onChange={this.onHexChange} />
          </label></Box>}
          <Box fixed><label htmlFor={this.aId}>
            a:
            <input
              id={this.aId}
              className={clsNs('colorpicker-number-input')}
              type="number"
              placeholder="0-1"
              min="0"
              max="1"
              step="0.01"
              value={alpha}
              onChange={this.onAlphaChange} />
          </label></Box>
        </Flex>
      </div>
    </div>;
  }
}