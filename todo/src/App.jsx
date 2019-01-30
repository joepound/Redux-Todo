import React from "react";

import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import TodoContainer from "./components/TodoComponents/TodoContainer";
import ActionButtonsContainer from "./components/ActionButtonsComponents/ActionButtonsContainer";

const App = props => {
  return (
    <div className="todo-app">
      <HeaderContainer />
      <TodoContainer />
      <ActionButtonsContainer />
    </div>  
  );
};

export default App;
