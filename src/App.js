import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import "./theme/material/styles";
import LoginRedux from "./redux/login.redux";
import { AppConstant } from "const";
import Login from "pages/loginPage";
import Home from "pages/homePage";
import { DoctorDetails, SystemDoctor, SystemManage } from "pages";
import "./index.css";
import { Button } from "@mui/material";

function App() {
  const dispatch = useDispatch();
  const [conut, setCount] = useState(1);

  const onClickCount = useCallback(() => setCount(conut + 1), [conut]);

  useEffect(() => {
    dispatch(
      LoginRedux.checkLogin({
        email: "dungpham@gmail.com",
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
        <Route path={AppConstant.SYSTEM_DOCTOR} element={<SystemDoctor />} />
        <Route path={AppConstant.DETAILS_DOCTOR} element={<DoctorDetails />} />
      </Routes>
      <Button onClick={onClickCount}>click</Button>
      <p>{conut}</p>
    </div>
  );
}

export default App;
