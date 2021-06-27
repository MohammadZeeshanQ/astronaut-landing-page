import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';

import AstroImage from '../../assets/images/props1.png';


const useStyles = makeStyles({
    root: {
        paddingTop: '8rem',
    },

    wrapper: {

    },

    gridContainer: {

    },

    imageContainer: {

    },

    image: {

        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },

    textContainer: {
        padding: '0 1rem',
    },

    header: {
        fontFamily: 'gothic-bold',
        color: '#673376',
    },

    description: {
        margin: '2.5rem 0',
        color: '#808080',
        fontFamily: 'gothic-regular',
    },

    buttonContainer: {

    },

    buyButton: {
        fontFamily: 'gothic-semi',
        backgroundColor: '#6617cb',
        backgroundImage: 'linear-gradient(315deg, #6617cb 0%, #cb218e 74%)',
        color: '#fcfcfc',
        textTransform: 'none',
    },

    learnButton: {
        color: '#8D579C',
        fontFamily: 'gothic-semi',
        border: 'none',
        textTransform: 'none',
        margin: '0 1.5rem'
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


