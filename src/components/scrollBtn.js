import { IconButton, makeStyles } from '@material-ui/core';
import { ArrowUpward } from '@material-ui/icons';

import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        bottom: "40px",
        zIndex: "1",
        cursor: "pointer",
        "&:hover": {
            background: "white",
            color: "#EFA7A7",
        }, 
        background: "#EFA7A7",
        color: "#F8EAEA",
        borderRadius: "50%",
        transition: "all .4s ease-in-out",
        boxShadow: "0px 17px 10px -10px rgba(0,0,0,0.4)",
        right: "40px",
        [theme.breakpoints.down("sm")]: {
            right: "20px"
        }
    }
}))

const ScrollButton = () => {
    const classes = useStyles();

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
                in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <IconButton onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} className={classes.root}>
            <ArrowUpward />
        </IconButton>
    );
}

export default ScrollButton;
