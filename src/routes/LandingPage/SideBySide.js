import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import Laptop from '../../assets/images/laptop.png';
import Money from '../../assets/images/money.png';

const useStyles = makeStyles({
    root: {
        padding: '8rem 0',

        '@media(max-width: 600px)': {
            padding: '4rem 0'
        },

        '@media(min-width: 600px) and (max-width: 900px)': {
            padding: '5rem 0',
        },
    },

    wrapper: {

    },

    gridContainer: {
        marginBottom: '6rem',

        '@media(max-width: 600px)': {

        },
    },

    imageContainer: {
        '@media(max-width: 600px)': {
            textAlign: 'center',
        },
    },

    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },

    centerItem: {
        display: 'grid',
        placeItems: 'center',
    },

    textContainer: {
        '@media(max-width: 600px)': {
            textAlign: 'center',
        },

    },

    header: {
        fontFamily: 'source-bold',
        color: '#673376',
        letterSpacing: '1px',

        '@media(max-width: 600px)': {
            fontSize: '2.5rem',
            paddingTop: '1rem',
            lineHeight: '150%',
        },

        '@media(min-width: 600px) and (max-width: 900px)': {
            fontSize: '1.6rem',
        },
    },

    description: {
        margin: '2.5rem 0',
        color: '#808080',
        fontFamily: 'source-regular',
        letterSpacing: '1px',

        '@media(max-width: 600px)': {

        },

        '@media(min-width: 600px) and (max-width: 900px)': {
            fontSize: '.7rem',
            margin: '1.5rem 0',
        },
    },

    button: {
        fontFamily: 'source-semi',
        backgroundColor: '#6617cb',
        backgroundImage: 'linear-gradient(315deg, #6617cb 0%, #cb218e 74%)',
        color: '#fcfcfc',
        textTransform: 'none',
        letterSpacing: '1px',

        '@media(max-width: 600px)': {

        },

        '@media(min-width: 600px) and (max-width: 900px)': {
            fontSize: '.7rem',
        },
    },


});


export default function SideBySide() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>

                {/* Grid One */}
                <Grid
                    container
                    xs={12}
                    sm={12}
                    md={12}
                    className={classes.gridContainer}
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                    >
                        <img className={classes.image} src={Laptop} alt='Laptop' />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        className={classes.centerItem}
                    >
                        <div className={classes.textContainer}>
                            <Typography className={classes.header} variant='h4'>
                                Get involved in the Community
                            </Typography>
                            <Typography className={classes.description} variant='body1'>
                                Out Community numbers in ten of thousands and everyone can help, answer question, help people, tell your friends.
                            </Typography>
                            <Button className={classes.button} href='/' variant='contained'>
                                Get Involved
                            </Button>
                        </div>
                    </Grid>
                </Grid>

                {/* Grid Two */}
                <Grid
                    container
                    xs={12}
                    sm={12}
                    md={12}
                    className={classes.gridContainer}
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        className={classes.centerItem}
                    >
                        <div className={classes.textContainer}>
                            <Typography className={classes.header} variant='h4'>
                                Real stats and milestones
                            </Typography>
                            <Typography className={classes.description} variant='body1'>
                                Our team collects all crucial aspects of what we do and what we achieve. Feel free to Learn more of what you invest in.
                            </Typography>
                            <Button className={classes.button} href='/' variant='contained'>
                                Learn More
                            </Button>
                        </div>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                    >
                        <img className={classes.image} src={Money} alt='Earning Money' />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
