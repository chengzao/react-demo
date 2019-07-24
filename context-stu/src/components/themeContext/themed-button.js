import React, { Component } from 'react'

import { ThemeContext } from './theme-context';
import PropTypes from 'prop-types';

// 使用 PropTypes 进行类型检查
// https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html

class ThemedButton extends Component {

  render () {
    let props = this.props;
    let theme = this.context;
    return (
      <button
      className='button'
        { ...props }
        style={ { backgroundColor: theme.background } }
      >{props.text}</button>
    );
  }
}
ThemedButton.contextType = ThemeContext;
ThemedButton.defaultProps = {
  text: 'theme button'
};
ThemeContext.propTypes = {
  text: PropTypes.string
}

export default ThemedButton;
