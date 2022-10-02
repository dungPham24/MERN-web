import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@mui/system";
import InformationRedux from "redux/information.redux";
import StringFormat from "string-format";
import { FormatConstant } from "const";

const mdParser = new MarkdownIt();

const ReactMardown = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const allDoctors = useSelector(state => state.InformationRedux.allDoctors);
  console.log(allDoctors);
  const [age, setAge] = useState("");
  const [values, setValues] = useState({});

  const handleChange = event => {
    setAge(event.target.value);
  };

  const handleEditorChange = ({ html, text }) => {
    console.log("handleEditorChange", html, text);
  };

  useEffect(() => {
    dispatch(InformationRedux.allDoctor());
  }, []);

  return (
    <Box className={classes.containerCreateDoctor}>
      <Typography> Tạo thông tin bác sĩ </Typography>
      <Box className={classes.containerInputDoctor}>
        <TextField sx={{ marginRight: 2 }} label="Thông tin giới thiệu" fullWidth size="small" variant="outlined" />
        <FormControl sx={{ marginLeft: 2 }} fullWidth size="small">
          <InputLabel id="demo-select-small">Chọn bác sĩ</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={age}
            label="Chọn bác sĩ"
            onChange={handleChange}
          >
            {allDoctors &&
              allDoctors.map(item => (
                <MenuItem value={item}>
                  {StringFormat(FormatConstant.nameDoctor, item.lastName, item.firstName)}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
      <MdEditor style={{ height: "450px" }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
      <Box className={classes.containerButton}>
        <Button variant="contained">Lưu thông tin</Button>
      </Box>
    </Box>
  );
};
export default ReactMardown;

const useStyles = makeStyles({
  containerCreateDoctor: {
    padding: "10px 30px",
  },
  containerInputDoctor: {
    padding: "10px 0",
    display: "flex",
  },
  containerButton: {
    paddingTop: 10,
  },
});
