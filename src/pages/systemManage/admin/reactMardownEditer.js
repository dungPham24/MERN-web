import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InformationRedux from "redux/information.redux";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import {  Alert, Button, FormControl, InputLabel, MenuItem, Select, Snackbar, TextField, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@mui/system";
import StringFormat from "string-format";
import { FormatConstant } from "const";

const mdParser = new MarkdownIt();

const ReactMardown = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const allDoctors = useSelector(state => state.InformationRedux.allDoctors);
  const successDetailsDoctor = useSelector(state => state.InformationRedux.successDetailsDoctor);

 const [open, setOpen] = useState(false);
  const [allDoctorTop, setAllDoctorTop] = useState()
  const [descriptionDoctor,setDescriptionDoctor] = useState()
  const [content, setContent] = useState({
    contentHTML: "",
    contentMarkdown: "",
  })

  const handleChange = event => {
    setAllDoctorTop(event.target.value);
  };

  const handleEditorChange = ({ html, text }) => {
    setContent({
      contentHTML: html,
      contentMarkdown: text,
    })
  };
 
  const onClickSaveMardown = () => {
     dispatch(InformationRedux.postDetailsDoctor({
       contentHTML: content.contentHTML,
       contentMarkdown: content.contentMarkdown,
       doctorId: allDoctorTop.id,
       description: descriptionDoctor,
     }));
  }

  const onChangeInput = (e) => {
    setDescriptionDoctor(e.target.value);
  }

  useEffect(() => {
    dispatch(InformationRedux.allDoctor());
  }, []);
  
  useEffect( () => {
    (async () => {
    
    await setOpen(true)
  
})()
  }, [successDetailsDoctor])

  return (
    <Box className={classes.containerCreateDoctor}>
      <Typography>Tạo thông tin bác sĩ</Typography>
      <Box className={classes.containerInputDoctor}>
        <TextField onChange={onChangeInput} value={descriptionDoctor}  sx={{ marginRight: 2 }} label="Thông tin giới thiệu" fullWidth size="small" variant="outlined" />
        <FormControl sx={{ marginLeft: 2 }} fullWidth size="small">
          <InputLabel id="demo-select-small">Chọn bác sĩ</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={allDoctorTop}
            label="Chọn bác sĩ"
            onChange={handleChange}
          >
            {allDoctors &&
              allDoctors.map(item => (
                <MenuItem key={item.id} value={item}>
                  {StringFormat(FormatConstant.nameDoctor, item.lastName, item.firstName)}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
      <MdEditor style={{ height: "450px" }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
      <Box onClick={onClickSaveMardown} className={classes.containerButton}>
        <Button variant="contained">Lưu thông tin</Button>
      </Box>
      <Snackbar open={open} autoHideDuration={6000}>
        <Alert  severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
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
