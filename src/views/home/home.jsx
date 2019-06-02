import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

import API from '../../helpers/api'
import Button from '@material-ui/core/Button';
import CourseCard from '../../components/courseCard';
import { Typography } from '@material-ui/core';

const Home = (props) => {

    const [freeCourses, setFreeCourses] = useState([])
    const [email, setEmail] = useState(undefined)

    useEffect(() => { API.getFreeCourses(setFreeCourses) }, [])

    let content = (
        <div className="Home">
            <Grid container alignItems="center" direction="column" justify="space-evenly" className={"Courses"} conatiner spacing={3}>
                <Grid item xs={12}>
                    <Link to={{pathname:'buy'}}><Button fullWidth variant="contained" color="primary">
                        Buy Cources
                    </Button></Link>
                </Grid>
                <Grid item xs={12}>
                    <Link to={{pathname:'bought'}}><Button fullWidth variant="contained" color="primary">
                        Bought Cources
                    </Button></Link>
                </Grid>
                {(freeCourses.length > 0 ? freeCourses.map(value => {
                    return (
                        <Grid item xs={12}>
                            <CourseCard data={value} viewControl={true}/>
                        </Grid>
                    )
                }
                ) : 'WAIT For Loading')}
            </Grid>
        </div >
    )

    return content;
}

export default Home;