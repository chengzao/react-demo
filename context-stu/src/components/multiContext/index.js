import React from 'react'
import ProfilePage from './ProfilePage';

// 主题上下文, 默认light
const ThemeContext = React.createContext('light');

// 登陆用户上下文
const UserContext = React.createContext();


// 一个依赖于两个上下文的中间组件
function Toolbar (props) {
  return (
    <ThemeContext.Consumer>
      { theme => (
        <UserContext.Consumer>
          { user => (
            <ProfilePage user={ user } theme={ theme } />
          ) }
        </UserContext.Consumer>
      ) }
    </ThemeContext.Consumer>
  );
}

export default class MultiContext extends React.Component {
  render () {
    const { signedInUser, theme } = { theme: 'dark', signedInUser: 'MultiContext' };

    // 组件提供上下文的初始值
    return (
      <ThemeContext.Provider value={ theme }>
        <UserContext.Provider value={ signedInUser }>
          <Toolbar />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}
