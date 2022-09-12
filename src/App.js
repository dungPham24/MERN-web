import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./theme/material/styles";
import LoginRedux from "./redux/login.redux";
import { AppConstant } from "const";
import Login from "pages/loginPage";
import Home from "pages/homePage";
import SystemManage from "pages/systemManage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      LoginRedux.checkLogin({
        email: "dungdeptrai@gmail.com",
        password: "123456",
      }),
    );
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path={AppConstant.LOGIN_PATH} element={<Login />} />
        <Route path={AppConstant.HOME_PATH} element={<Home />} />
        <Route path={AppConstant.SYSTEM_MANAGE} element={<SystemManage />} />
      </Routes>
    </div>
  );
}

export default App;
