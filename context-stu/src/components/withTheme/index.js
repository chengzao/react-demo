import React from 'react'

const ThemeContext = React.createContext('light');

// 在函数中引入组件
 function withTheme (Component) {
  // 然后返回另一个组件
  return function ThemedComponent (props) {
    // 最后使用context theme渲染这个被封装组件
    // 注意我们照常引用了被添加的属性
    return (
      <ThemeContext.Consumer>
        { theme => <Component { ...props } theme={ theme } /> }
      </ThemeContext.Consumer>
    );
  };
}

function Button ({ theme, ...rest }) {
  console.log(theme, rest);
  return <div>withTheme: {theme}</div>;
}

export default withTheme(Button);
