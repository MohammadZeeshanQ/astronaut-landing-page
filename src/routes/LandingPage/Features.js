import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        padding: '5rem',
    },
    wrapper: {

    },
    textContainer: {
        textAlign: 'center',
        width: '70%',
        margin: 'auto',
    },
    header: {
        fontFamily: 'gothic-bold',
        color: '#673376',
    },
    description: {
        fontFamily: 'gothic-regular',
        margin: '1.5rem 0',
        color: '#808080',
    },
    boxWrapper: {

    },
    image: {

    },
    title: {
        fontFamily: 'gothic-bold',
        width: '70%',
        color: '#673376',
        textAlign: 'center',
    },
});


const gridData = [
    { 'title': 'Secured and audited by W3C', 'image': 'PATH' },
    { 'title': 'Charity, NFTs and burning events', 'image': 'PATH' },
    { 'title': 'Enhanced productivity level', 'image': 'PATH' },
]


export default function Features() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>

                <div className={classes.textContainer}>
                    <Typography className={classes.header} variant='h3'>
                        Why should I join Willow?
                    </Typography>
                    <Typography className={classes.description} variant='body1'>
                        There are some key reasons to hold and invest in our Willow.
                        Do your own research and ask us for any help in socials.
                    </Typography>
                </div>

                <Grid
                    container
                    xs={12}
                    sm={12}
                    md={12}
                >
                    {
                        gridData.map((item, index) =>
                            <Grid
                                item
                                xs={12}
                                sm={4}
                                md={4}
                            >
                                <img className={classes.image} src={item.image} />
                                <Typography className={classes.title} variant='h6'>
                                    {item.title}
                                </Typography>
                            </Grid>
                        )
                    }
                </Grid>
            </div>
        </div>
    )
}
