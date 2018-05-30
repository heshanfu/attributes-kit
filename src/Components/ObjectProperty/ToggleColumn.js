import Radium from 'radium';
import React from 'react';
import PropTypes from 'prop-types';

import Toggle from '../Toggle/Toggle';

@Radium
class ToggleColumn extends React.Component {
  static propTypes = {
    isExpanded: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static contextTypes = {
    includedProperties: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
    inheritedProperties: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
  };

  get style() {
    const style = {
      Toggle: {
        base: {
          width: '13px',
          maxWidth: '13px',
          minWidth: '13px',
          cursor: 'pointer',
          height: '13px',
          marginRight: '7px',
        },
      },
    };

    return style;
  };

  isVisible() {
    return (
      (
        this.context.includedProperties === 'show' &&
        this.context.inheritedProperties === 'show'
      ) || (
        this.context.includedProperties === 'tag' &&
        this.context.inheritedProperties === 'tag'
      )
    );
  }

  render() {
    if (this.isVisible()) {
      return (
        <Toggle
          isExpanded={this.props.isExpanded}
          onClick={this.props.onClick}
          style={this.style.Toggle}
        />
      );
    }

    return null;
  };
};

export { ToggleColumn };
