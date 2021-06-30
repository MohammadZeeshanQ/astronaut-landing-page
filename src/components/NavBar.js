import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, List, ListItem, Divider, SwipeableDrawer } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles({
    root: {
        backgroundColor: '#FCFCFC',
    },

    wrapper: {
        width: '80%',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',

        '@media(max-width: 600px)': {
            width: '90%',
        }
    },

    logoContainer: {
        flexGrow: 1,
    },

    logo: {
        color: '#673376',
        fontFamily: 'source-bold',
        letterSpacing: '1px',
    },

    desktopTabContainer: {

        '@media(max-width: 600px)': {
            display: 'none',
        }
    },

    tab: {
        fontFamily: 'source-semi',
        border: 'none',
        margin: '0 .5rem',
        color: '#673376',
        textTransform: 'none',
        letterSpacing: '2px',
    },

    mobileTabContainer: {
        display: 'none',

        '@media(max-width: 600px)': {
            display: 'block',
        }
    },

    mobileTab: {
        fontFamily: 'source-bold',
        width: '100%',
        justifyContent: 'start',
        border: 'none',
        color: '#8D579C',
        textTransform: 'none',
        letterSpacing: '2px',
    },

    paper: {
        width: 250,
    }

});


export default function NavBar() {
    const classes = useStyles();
    const [drawer, setDrawer] = useState(false);


    const toggleDrawer = () => {
        setDrawer(!drawer);
    };


    const mobileButton = [
        { 'name': 'Product', 'link': '/' },
        { 'name': 'How To Buy', 'link': '/' },
        { 'name': 'Features', 'link': '/' },
        { 'name': 'Contact', 'link': '/' },
    ];


    return (
        <div>
            <AppBar elevation={0} className={classes.root}>
                <Toolbar className={classes.wrapper}>

                    <div className={classes.logoContainer}>
                        <Typography className={classes.logo} variant='h5'>
                            Willow
                        </Typography>
                    </div>


                    <div className={classes.desktopTabContainer}>
                        <Button className={classes.tab} href='/' variant='outlined' >Product</Button>
                        <Button className={classes.tab} href='/' variant='outlined' >How To Buy</Button>
                        <Button className={classes.tab} href='/' variant='outlined' >Features</Button>
                        <Button className={classes.tab} href='/' variant='outlined' >Contact</Button>
                    </div>


                    <div className={classes.mobileTabContainer}>

                        <IconButton onClick={toggleDrawer} size='small'>
                            <MenuIcon style={{ fontSize: '2.5rem', }} />
                        </IconButton>

                        <SwipeableDrawer anchor='right' open={drawer} onOpen={toggleDrawer} onClose={toggleDrawer} classes={{ paper: classes.paper }}  >
                            <List>

                                <ListItem style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>

                                    <IconButton onClick={toggleDrawer} size='small' >
                                        <ClearIcon style={{ fontSize: '2.5rem', }} />
                                    </IconButton>
                                </ListItem>
                                <Divider />

                                {
                                    mobileButton.map((item, index) =>
                                        <ListItem key={index} >
                                            <Button className={classes.mobileTab} href={item.link} variant='outlined' >{item.name}</Button>
                                        </ListItem>
                                    )
                                }

                            </List>
                        </SwipeableDrawer>

                    </div>

                </Toolbar>
            </AppBar>
        </div>
    )
}
