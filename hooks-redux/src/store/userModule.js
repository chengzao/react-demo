const UserModule = {
  state: {
    login: "未登录"
  },
  reducer: (state, action) => {
    switch (action.type) {
      case "SET_TOKEN":
        return { ...state, login: "已登录" };
      case "RESET_TOKEN":
        return { ...state, login: "未登录" };
      default:
        return state;
    }
  }
};

export default UserModule;
