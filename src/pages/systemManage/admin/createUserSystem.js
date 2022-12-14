import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import LoginRedux from "redux/login.redux";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { Backup } from "@mui/icons-material";
import { getbase64 } from "utils/logic";

const CreateUserSystem = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [fileSystem, setFileSystem] = useState("");

  const [values, setValues] = useState({
    email: "",
    password: "",
    lastName: "",
    firstName: "",
    positionId: "",
    gender: "",
    roleId: "",
    phonenumber: "",
    address: "",
  });

  const onChageInput = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onchageFile = async e => {
    const file = e.target.files[0];

    if (file) {
      const base64 = await getbase64(file);
      const objectFile = URL.createObjectURL(file);
      setFileSystem({
        avatar: base64,
        previewUrl: objectFile,
      });
    }
  };

  const validateForm = () => {
    let isvalidate = true;
    const arrCheck = ["email", "password", "lastName", "firstName", "address"];
    for (let i = 0; i < arrCheck.length; i++) {
      if (!values[arrCheck[i]]) {
        isvalidate = false;
        alert("vui long nhap " + " " + arrCheck[i]);
        break;
      }
    }
    return isvalidate;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isValidate = validateForm();
    if (!isValidate) return;
    dispatch(
      LoginRedux.createUser({
        ...values,
        image: fileSystem.avatar,
      }),
    );
  };

  return (
    <form style={{ padding: "0 30px" }} onSubmit={handleSubmit}>
      <Box className={classes.containerCreateUser}>
        <Box className={classes.containerSubInput}>
          <label className={classes.contarinerSubLabel} htmlFor="email">
            email
          </label>
          <TextField onChange={onChageInput} name="email" label="email" size="small" type="text" id="email" />
        </Box>
        <Box className={classes.containerSubInput}>
          <label className={classes.contarinerSubLabel} htmlFor="password">
            m???t kh???u
          </label>
          <TextField onChange={onChageInput} name="password" label="m???t kh???u" size="small" type="text" id="password" />
        </Box>
        <Box className={classes.containerSubInput}>
          <label className={classes.contarinerSubLabel} htmlFor="lastname">
            t??n
          </label>
          <TextField onChange={onChageInput} name="lastName" label="t??n" size="small" type="text" id="lastName" />
        </Box>
        <Box className={classes.containerSubInput}>
          <label className={classes.contarinerSubLabel} htmlFor="firstName">
            h???
          </label>
          <TextField onChange={onChageInput} name="firstName" label="h???" size="small" type="text" id="firstName" />
        </Box>
      </Box>
      <Box className={classes.containerCreateUser}>
        <Box className={classes.containerSubInput}>
          <label className={classes.contarinerSubLabel} htmlFor="phonenumber">
            S??? ??i???n tho???i
          </label>
          <TextField
            onChange={onChageInput}
            name="phonenumber"
            label="phonenumber"
            size="small"
            type="text"
            id="phonenumber"
          />
        </Box>
        <Box className={classes.containerSubAddress}>
          <label className={classes.contarinerSubLabel} htmlFor="address">
            ?????a ch???
          </label>
          <TextField
            onChange={onChageInput}
            name="address"
            fullWidth
            label="?????a ch???"
            size="small"
            type="text"
            id="address"
          />
        </Box>
      </Box>
      <Box className={classes.container}>
        <Box className={classes.containerFormControlSeclect}>
          <FormControl sx="small" fullWidth>
            <InputLabel id="demo-simple-select-label">gi???i t??nh</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="gender"
              label="gender"
              onChange={onChageInput}
            >
              <MenuItem value={"0"}>kh??c</MenuItem>
              <MenuItem value={"M"}>nam</MenuItem>
              <MenuItem value={"F"}>n???</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className={classes.containerFormControlSeclect}>
          <FormControl fullWidth>
            <InputLabel htmlFor="demo-simple-select-label">ch???c danh</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="positionId"
              name="positionId"
              onChange={onChageInput}
            >
              <MenuItem value={"P0"}>b??c s??</MenuItem>
              <MenuItem value={"P1"}>th???c s??</MenuItem>
              <MenuItem value={"P2"}>ti???n s??</MenuItem>
              <MenuItem value={"P3"}>ph?? gi??o s??</MenuItem>
              <MenuItem value={"P4"}>gi??o s??</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className={classes.containerFormControlSeclect}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">vai tr??</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              name="roleId"
              label="roleId"
              onChange={onChageInput}
            >
              <MenuItem value={"R1"}>qu???n tr??? vi??n</MenuItem>
              <MenuItem value={"R2"}>b??c s??</MenuItem>
              <MenuItem value={"R3"}>b???nh nh??n</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Button variant="contained" component="label" endIcon={<Backup />}>
            Upload File
            <input onChange={onchageFile} type="file" hidden />
          </Button>
        </Box>
      </Box>
      <Box type="submit" className={classes.containerButton}>
        <Button type="submit" variant="contained">
          t???o ng?????i d??ng
        </Button>
      </Box>
    </form>
  );
};

export default memo(CreateUserSystem);

const useStyles = makeStyles({
  containerCreateUser: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerSubInput: {
    display: "flex",
    flexDirection: "column",
  },
  contarinerSubLabel: {
    margin: "12px 0",
  },
  containerSubAddress: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    marginLeft: 12,
  },
  containerFormControlSeclect: {
    width: 210,
  },
  container: {
    marginTop: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerButton: {
    marginTop: 20,
  },
});
