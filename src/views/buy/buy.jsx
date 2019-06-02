import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

import API from '../../helpers/api'
import Button from '@material-ui/core/Button';
import CourseCard from '../../components/courseCard';
import { Typography } from '@material-ui/core';

const Buy = (props) => {

    const [paidCourses, setPaidCourses] = useState([])
    const [email, setEmail] = useState(undefined)

    useEffect(()=>{
        console.log(props)
    })
    useEffect(() => { API.getPaidCourses(setPaidCourses) },[])

    let content = (
        <div className="Home">
            <Grid container alignItems="center" direction="column" justify="space-evenly" className={"Courses"} conatiner spacing={3}>
                <Grid item xs={12}>
                </Grid>
                {(paidCourses.length > 0 ? paidCourses.map(value => {
                    return (
                        <Grid item xs={12}>
                            <CourseCard data={value} buyButton={true}/>
                        </Grid>
                    )
                }
                ) : 'WAIT For Loading')}
            </Grid>
        </div >
    )

    return content;
}

export default Buy;