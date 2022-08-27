import { useDispatch } from "react-redux";
import "./theme/material/styles";
import LoginRedux from "./redux/login.redux";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "pages/loginPage";
import Home from "pages/homePage";
import { AppConstant } from "const";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      LoginRedux.checkLogin({
        username: "manager1@gmail.com",
        password: "trung",
      }),
    );
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path={AppConstant.LOGIN_PATH} element={<Login />} />
        <Route path={AppConstant.HOME_PATH} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
