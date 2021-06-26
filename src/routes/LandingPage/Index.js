import React from 'react'
import LandingPage from './LandingPage';
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

    return (
        <div className={classes.root}>
            <LandingPage />
        </div>
    )
}
