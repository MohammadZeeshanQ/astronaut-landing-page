import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';

import Image1 from '../../assets/images/image1.png';
import Image2 from '../../assets/images/image2.png';
import Image3 from '../../assets/images/image3.png';

const useStyles = makeStyles({
    root: {
        padding: '5rem 0',

        '@media(max-width: 600px)': {
            padding: '3rem 0',
        },

        '@media(min-width: 600px) and (max-width: 900px)': {
            padding: '3rem 0',
        },
    },
    wrapper: {

    },
    textContainer: {
        textAlign: 'center',
        width: '70%',
        margin: 'auto',

        '@media(max-width: 600px)': {
            width: '90%',
        },

        '@media(min-width: 600px) and (max-width: 900px)': {
            width: '90%',
        },
    },
    header: {
        fontFamily: 'source-bold',
        color: '#673376',
        letterSpacing: '1px',

        '@media(max-width: 600px)': {
            fontSize: '2.5rem',
            letterSpacing: '2px',
            lineHeight: '150%',
        },

        '@media(min-width: 600px) and (max-width: 900px)': {
            fontSize: '2.2rem',
        },
    },
    description: {
        fontFamily: 'source-regular',
        margin: '3rem 0',
        color: '#808080',
        letterSpacing: '1px',

        '@media(max-width: 600px)': {
            margin: '2rem 0',

        },

        '@media(min-width: 600px) and (max-width: 900px)': {
            fontSize: '.8rem',
        },
    },
    boxWrapper: {
        margin: '0 1.5em',
        textAlign: 'center',

        '@media(max-width: 600px)': {
            margin: '1rem 0',
        },

        '@media(min-width: 600px) and (max-width: 900px)': {

        },
    },
    image: {
        width: '20rem',
        textAlign: 'center',

        '@media(max-width: 600px)': {
            width: '22rem',
        },

        '@media(min-width: 600px) and (max-width: 900px)': {
            width: '10rem',
        },
    },
    title: {
        fontFamily: 'source-bold',
        padding: '0 3rem',
        color: '#673376',
        textAlign: 'center',
        letterSpacing: '1px',

        '@media(max-width: 600px)': {
            fontSize: '1.5rem',
            padding: '0 1rem',
        },

        '@media(min-width: 600px) and (max-width: 900px)': {
            padding: '0 1rem',
            fontSize: '.9rem',
        },
    },
});


const gridData = [
    { 'title': 'Secured and audited by W3C', 'image': Image1 },
    { 'title': 'Charity, NFTs and burning events', 'image': Image2 },
    { 'title': 'Enhanced productivity level', 'image': Image3 },
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
                    justify='space-around'
                >
                    {
                        gridData.map((item, index) =>
                            <Grid
                                item
                                xs={12}
                                sm={4}
                                md={4}
                            >
                                <div className={classes.boxWrapper}>
                                    <img className={classes.image} src={item.image} />
                                    <Typography className={classes.title} variant='h6'>
                                        {item.title}
                                    </Typography>
                                </div>
                            </Grid>
                        )
                    }
                </Grid>
            </div>
        </div>
    )
}
