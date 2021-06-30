import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';

import AstroImage from '../../assets/images/props1.png';


const useStyles = makeStyles({
    root: {
        padding: '8rem 0 5rem 0',

        '@media(max-width: 600px)': {
            padding: '5rem 0 3rem 0',
        },

        '@media(min-width: 600px) and (max-width: 900px)': {
            padding: '7rem 0 3rem 0',
        },
    },

    wrapper: {

    },

    gridContainer: {

    },

    imageContainer: {
        padding: '1rem',

        '@media(max-width: 600px)': {
            padding: '0',
            textAlign: 'center',
            margin: 'auto',
        },

        '@media(min-width: 600px) and (max-width: 900px)': {
            padding: '.5em',
        },
    },

    image: {

        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },

    textContainer: {
        padding: '1rem',

        '@media(max-width: 600px)': {
            textAlign: 'center',
            padding: '1em 0',
        },

        '@media(min-width: 600px) and (max-width: 900px)': {
            padding: '0.5em',
        },
    },

    header: {
        fontFamily: 'source-bold',
        color: '#673376',
        letterSpacing: '1px',

        '@media(max-width: 600px)': {
            fontSize: '2.5em',
            lineHeight: '150%',
        },

        '@media(min-width: 600px) and (max-width: 900px)': {
            fontSize: '2em',
        },
    },

    description: {
        margin: '3rem 0',
        color: '#808080',
        fontFamily: 'source-regular',
        letterSpacing: '1px',

        '@media(min-width: 600px) and (max-width: 900px)': {
            margin: '2rem 0',
            fontSize: '.8em',
        },
    },

    buttonContainer: {

    },

    buyButton: {
        fontFamily: 'source-semi',
        backgroundColor: '#6617cb',
        backgroundImage: 'linear-gradient(315deg, #6617cb 0%, #cb218e 74%)',
        color: '#fcfcfc',
        textTransform: 'none',
        letterSpacing: '1px',

        '@media(min-width: 600px) and (max-width: 900px)': {
            fontSize: '.7em',
        },
    },

    learnButton: {
        color: '#8D579C',
        fontFamily: 'source-semi',
        border: 'none',
        textTransform: 'none',
        margin: '0 1.5rem',
        letterSpacing: '1px',

        '@media(min-width: 600px) and (max-width: 900px)': {
            fontSize: '.7em',
        },
    },
});


export default function LandingPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Grid
                    container
                    className={classes.gridContainer}
                    xs={12}
                    sm={12}
                    md={12}
                >
                    <Grid
                        item
                        className={classes.imageContainer}
                        xs={12}
                        sm={6}
                        md={6}
                    >
                        <img src={AstroImage} className={classes.image} alt='Astronaut' />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        className={classes.textContainer}
                    >
                        <Typography className={classes.header} variant='h2'>
                            Experience using tokens in different ways
                        </Typography>

                        <Typography className={classes.description} variant='body1'>
                            Eliminate excessive worry about your transactions, can be more comfortable transacting using Tocktoken
                        </Typography>

                        <div className={classes.buttonContainer}>
                            <Button className={classes.buyButton} href='/' variant='contained'>
                                Buy Now
                            </Button>
                            <Button className={classes.learnButton} href='/' variant='outlined'>
                                Learn More
                            </Button>
                        </div>
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}


