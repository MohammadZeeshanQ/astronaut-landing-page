import React from 'react'
import LandingPage from './LandingPage';
import Feature from './Features.js';
import SideBySide from './SideBySide.js';
import { makeStyles } from '@material-ui/styles';

// '@media(max-width: 600px)': {

// }

// '@media(min-width: 600px) and (max-width: 900px)': {

// }

const useStyles = makeStyles({
    root: {
        width: '80%',
        margin: 'auto',

        '@media(max-width: 600px)': {
            width: '90%',
        }
    }
});


export default function Index() {
    const classes = useStyles();

    console.log('v-1.0');

    return (
        <div className={classes.root}>
            <LandingPage />
            <Feature />
            <SideBySide />
        </div>
    )
}
