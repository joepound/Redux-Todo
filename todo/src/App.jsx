import React from "react";

import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import TodoContainer from "./components/TodoComponents/TodoContainer";

const App = props => {
  return (
    <div className="todo-app">
      <HeaderContainer />
      <TodoContainer />
    </div>
  );
};

export default App;
