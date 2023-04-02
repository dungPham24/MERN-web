import React, { useEffect, useState } from 'react';
import StringFormat from "string-format";
import { useParams } from 'react-router-dom';
import infomationRedux from 'redux/information.redux'
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from "@material-ui/styles";
import { CardMedia, Typography } from "@mui/material";
import { FormatConstant } from 'const';
import { Box } from '@mui/system';
import HomeHeader from 'pages/homePage/components/homeHeader';

const DoctorDetails = () => {
  const classes = useStyles();
    const { id } = useParams()
    const dispatch = useDispatch();
    const detailsDoctor = useSelector(state => state.InformationRedux.detailsDoctorData);
    const changeLanguages = useSelector(state => state.loginRedux.changeLanguages);
    
    const [chaneEn,setChane] = useState()

    const nameVi = StringFormat(FormatConstant.detailsDoctor, detailsDoctor?.positionData.value_VI, detailsDoctor?.firstName, detailsDoctor?.lastName)
    const nameEn = StringFormat(FormatConstant.detailsDoctor, detailsDoctor?.positionData.value_EN, detailsDoctor?.firstName, detailsDoctor?.lastName)

    useEffect(() => {
    const changeLogin = localStorage.getItem("languages");
    setChane(changeLogin);
    }, [changeLanguages]);
    
    useEffect(() => {
         dispatch(infomationRedux.detailsDoctor({id}))
    }, [id])
    
    return <>
        <HomeHeader details={true} />
        <Box className={classes.containerDetails}>
            <Box className={classes.containerRight}>
                {detailsDoctor?.image  && detailsDoctor && <CardMedia className={classes.containerImage} width="200" height="200" component="img" image={detailsDoctor?.image} />}
            </Box>
            <Box className={classes.containerLeft}>
                <Typography variant="h3" component="h3">{chaneEn && chaneEn ==="vi" ?nameVi : nameEn }</Typography>
                { detailsDoctor && detailsDoctor.Mardown && detailsDoctor.Mardown.description &&
                <Typography className={classes.containerTitle} variant="p" component='p' >
                    {detailsDoctor.Mardown.description}
                </Typography>}
            </Box>
        </Box>
        
    </>
}

export default DoctorDetails;

const useStyles = makeStyles({
    containerDetails: {
        display: "flex",
        maxWidth: 1200,
        margin: "auto",
        paddingTop: 100,
    },
    containerRight: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
    },
    containerLeft: {
        flex: 4 ,
        paddingLeft:20
    },
    containerTitle: {
        fontSize: 13,
        color:"#555"
    },
    containerImage: {
        width: "120px !important",
        height: 120,
        borderRadius:"50%"
        
    }
});
