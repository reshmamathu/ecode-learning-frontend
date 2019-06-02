import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import ReactPlayer from 'react-player'
import API from '../helpers/api'
import Toast from '../components/toast'
import TextHelper from '../helpers/Texthelper'
import { Typography } from '@material-ui/core';

const CourseCard = (props) => {
    const [responseMessage, setResponseMessage] = useState('Something Went Wrong')

    useEffect(() => {
        console.log(props)
    })


    const performBuy = () => {
        let data = {
            emailId: window.localStorage.getItem('email'),
            courseId: props.data._id
        }
        API.buyCourse(data, setResponseMessage);
        Toast(responseMessage)
    }

    let content = (
        <Card raised={true} className="CourseCard">
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography >
                            {props.data.courseName}
                        </Typography>
                    </Grid>
                    {props.detailView && <div><Grid item xs={12}>
                        <Typography fullWidth>
                            {props.data.description}
                        </Typography>
                    </Grid>
                        <Grid item xs={12}>
                            <ReactPlayer url={props.data.videoUrl}></ReactPlayer>
                        </Grid>
                    </div>
                    }
                    <Grid item xs={12}>
                        <Typography fullWidth>
                            {props.data.courseType}
                        </Typography>
                    </Grid>
                    {(props.data.price !== 0) &&
                        <div>
                            <Grid item xs={12}>
                                <Typography fullWidth>
                                    {props.data.price}
                                </Typography>
                            </Grid>

                        </div>
                    }
                    {
                        (props.buyButton === true) &&
                        < Grid item xs={12}>
                            <Button fullWidth onClick={() => { performBuy() }} fullWidth variant="contained" color="primary">
                                Buy
                        </Button>
                        </Grid>
                    }

                    {
                        (props.viewControl === true) &&
                        <Grid item xs={12}>
                            <Link to={{ pathname: 'detail', data: props.data }}>

                                <Button fullWidth fullWidth variant="contained" color="primary">
                                    View
                            </Button>
                            </Link>
                        </Grid>
                    }
                </Grid>
            </CardContent>
        </Card >)

    return content;
}

export default CourseCard;