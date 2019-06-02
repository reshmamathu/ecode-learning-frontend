import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

import API from '../../helpers/api'
import Button from '@material-ui/core/Button';
import CourseCard from '../../components/courseCard';
import { Typography } from '@material-ui/core';

const Detail = (props) => {
    useEffect(()=>{
        console.log(props)
    })
    let content ='';
    if (props.location.data === undefined) {
        content = (<Redirect to='/home'/>)
    } else {
        content = (
            <div className="Detail">
                <Grid container alignItems="center" direction="column" justify="space-evenly" className={"Courses"} conatiner spacing={3}>
                    <Grid item xs={10}>
                    <CourseCard data={props.location.data} detailView={true} />
                    </Grid>
                </Grid>
            </div >
        )
    }
    return content;
}

export default Detail;