import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';


const useStyles = makeStyles({
    root: {

    },

    wrapper: {

    },

    gridContainer: {

    },

    imageContainer: {

    },

    image: {

    },

    textContainer: {

    },

    header: {

    },

    description: {

    },

    buttonContainer: {

    },

    buyButton: {

    },

    learnButton: {

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
                        xs={6}
                        sm={6}
                        md={6}
                    >
                        <img src='' className={classes.image} alt='Astronaut' />
                    </Grid>

                    <Grid
                        item
                        xs={6}
                        sm={6}
                        md={6}
                    >
                        <Typography className={classes.header} variant='h2'>
                            Experience using tokens in different ways
                        </Typography>

                        <Typography className={classes.description} variant='body1'>
                            Eliminate excessive worry about your transactions, can be more comfortable transacting using Tocktoken
                        </Typography>
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}


