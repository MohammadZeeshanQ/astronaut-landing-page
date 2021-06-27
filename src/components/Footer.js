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
        color: '#491257',
        fontFamily: 'gothic-semi',
        letterSpacing: '1px',
    },

    address: {
        fontFamily: 'gothic-regular',
        color: '#808080',
        margin: '1.5rem 0',
        lineHeight: 2,
        letterSpacing: '1px',
    },

    tabContainer: {
        padding: '1rem',
    },

    tabHeader: {
        letterSpacing: '1px',
        fontFamily: 'gothic-semi',
        color: '#491257',
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
        fontFamily: 'gothic-regular',
        letterSpacing: '1px',
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
            </div>
        </div >
    )
}
