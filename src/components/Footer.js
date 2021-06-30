import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        backgroundColor: '#FCFCFC',

    },

    wrapper: {
        width: '80%',
        margin: 'auto',

        '@media(max-width: 600px)': {
            width: '90%',
        }
    },

    gridItem: {

    },

    logoContainer: {
        padding: '1rem',
    },

    logo: {
        color: '#673376',
        fontFamily: 'source-bold',
        letterSpacing: '1px',

        '@media(min-width: 600px) and (max-width: 900px)': {
            fontSize: '1.2rem',
        },
    },

    address: {
        fontFamily: 'source-regular',
        color: '#808080',
        margin: '1.5rem 0',
        lineHeight: 2,
        letterSpacing: '1px',

        '@media(min-width: 600px) and (max-width: 900px)': {
            fontSize: '.7rem',
            margin: '0',
            padding: '1rem 0',
        },
    },

    tabContainer: {
        padding: '1rem',
    },

    tabHeader: {
        letterSpacing: '1px',
        fontFamily: 'source-semi',
        color: '#673376',

        '@media(min-width: 600px) and (max-width: 900px)': {
            fontSize: '1rem',
        },
    },

    linkRemoval: {
        textDecoration: 'none',

        '&:hover': {
            textDecoration: '1px #808080 underline',
        }
    },

    tab: {
        color: '#808080',
        margin: '1.5rem 0',
        fontFamily: 'source-regular',
        letterSpacing: '1px',

        '@media(min-width: 600px) and (max-width: 900px)': {
            fontSize: '.7rem',
        },
    },

});


export default function Footer() {
    const classes = useStyles();

    const footerData = [
        {
            'header': 'About',
            'item1': 'About Us',
            'item2': 'Features',
            'item3': 'News & Blog',
        },
        {
            'header': 'Company',
            'item1': 'Why Willow ?',
            'item2': 'Capital',
            'item3': 'Security',
        },
        {
            'header': 'Support',
            'item1': 'FAQ',
            'item2': 'Support Center',
            'item3': 'Contact Us',
        },
    ]

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Grid
                    container
                    xs={12}
                    sm={12}
                    md={12}
                >
                    <Grid
                        item
                        xs={12}
                        sm={3}
                        md={3}
                        className={classes.gridItem}
                    >
                        <div className={classes.logoContainer}>
                            <Typography className={classes.logo} variant='h5'>
                                Willow
                            </Typography>

                            <Typography className={classes.address} variant='body1'>
                                726  Rodney Street, JACKSONVILLE, Georgia
                            </Typography>
                        </div>

                    </Grid>

                    {
                        footerData.map((value, index) =>
                            <Grid
                                item
                                xs={12}
                                sm={3}
                                md={3}
                                className={classes.gridItem}

                            >
                                <div className={classes.tabContainer} key={index}>
                                    <Typography className={classes.tabHeader} variant='h5'>
                                        {value.header}
                                    </Typography>
                                    <div>
                                        <a href='#' className={classes.linkRemoval}>
                                            <Typography className={classes.tab} variant='body1'>
                                                {value.item1}
                                            </Typography>
                                        </a>
                                        <a href='#' className={classes.linkRemoval}>
                                            <Typography className={classes.tab} variant='body1'>
                                                {value.item2}
                                            </Typography>
                                        </a>
                                        <a href='#' className={classes.linkRemoval}>
                                            <Typography className={classes.tab} variant='body1'>
                                                {value.item3}
                                            </Typography></a>
                                    </div>
                                </div>
                            </Grid>
                        )
                    }
                </Grid>

                <div style={{ textAlign: 'center', padding: '2rem 0', }}>
                    <Typography variant='body1' style={{ color: '#808080', }}>
                        Illustration by <a href="https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
                    </Typography>
                </div>
            </div>
        </div >
    )
}
