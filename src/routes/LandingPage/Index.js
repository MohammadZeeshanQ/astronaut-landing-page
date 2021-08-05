import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Dialog, DialogContent, DialogActions, Typography, Button } from '@material-ui/core'

import LandingPage from './LandingPage';
import Feature from './Features.js';
import SideBySide from './SideBySide.js';


const useStyles = makeStyles({
    root: {
        width: '80%',
        margin: 'auto',

        '@media(max-width: 600px)': {
            width: '90%',
        }
    },

    header: {
        textAlign: 'center',
        fontFamily: 'source-Semi',
        letterSpacing: '1px',
        lineHeight: '150%',
    },
});


export default function Index() {
    const classes = useStyles();
    const [dialog, setDialog] = useState(true);

    const dialogHandler = () => {
        setDialog(!dialog);
    };

    return (
        <div className={classes.root}>

            <Dialog
                open={dialog}
                onClose={dialogHandler}
            >
                <DialogContent>
                    <Typography className={classes.header} variant='h5'>
                        This is just a UI design the tabs button links are not Working As there are no Routes assigned to them.
                        <br />
                        <br />Thank You!!
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={dialogHandler} color='secondary' variant='contained' size='medium'>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            <LandingPage />
            <Feature />
            <SideBySide />
        </div>
    )
}
