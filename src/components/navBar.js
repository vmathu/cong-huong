import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import clsx from 'clsx';

//core
import { Hidden, IconButton } from "@material-ui/core";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

//icons
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        fontFamily: "Livvic", 
        position: 'fixed',
        padding: 0,
        margin: 0,
        width: "100%",
        zIndex: 10000,
        top: 0,
        "& .MuiIconButton-root": {
            color: '#EFA7A7'
        },
        "& .MuiTypography-body1": {
            fontFamily: 'Livvic',
            color: 'white'
        },
    },
    navBarContainer: {
        padding: "1% 7%",
        background: "#F8EAEA",
        position: "fix",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    logo: {
        fontWeight: 600, 
        fontSize: "20px", 
        padding: "1em"
    }, 
    listItems: {
        display: "flex"
    },
    items: {
        display: "block",
        color: "#EFA7A7",
        textDecoration: "none",
        padding: "1em",
        fontSize: "20px",
        cursor: "pointer",
        "&:hover": {
            color: "#00AFE7"
        }
    },
    itemsCurrent: {
        display: "block",
        textDecoration: "none",
        padding: "1em",
        fontSize: "20px",
        cursor: "pointer",
        color: "#00AFE7"
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        background: "#F8EAEA",
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    linkDrawer: {
        textDecoration: "none",
        color: 'white',
        display: 'flex'
    }
}));

export default function NavBar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const navItems = [
        {
            text: 'Home',
            link: '/',
        },
        {
            text: 'Toolkit',
            link: '/toolkit',
        },
        {
            text: 'Our Story',
            link: '/our-story'
        }
    ]

    return (
        <div className={classes.root}>
            <div className={classes.navBarContainer}>
                <div className={classes.logo}>
                    <Link to="/" style={{display: "flex", textDecoration: "none", color: "#00AFE7"}}>Cộng hưởng<span style={{color: "#EFA7A7"}}>.</span></Link>
                </div>
                <Hidden only={['xs', 'sm']}>
                    <div className={classes.listItems}>
                        {navItems.map((item) => (
                            <div>
                                {item.text === props.current ?
                                    <Link to={item.link} className={classes.itemsCurrent}>
                                        {item.text}
                                    </Link>
                                    :
                                    <Link to={item.link} className={classes.items}>
                                        {item.text}
                                    </Link>
                                }
                            </div>
                        ))}
                    </div>
                </Hidden>
                <Hidden only={['md', 'lg', 'xl']}>
                    <IconButton
                        aria-label="open drawer"
                        edge='end'
                        onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}
                        style={{ padding: "1em" }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </div>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <List>
                    {navItems.map((item) => (
                        <ListItem button key={item.text}>
                            {item.text === props.current ?
                                <Link to={item.link} className={classes.itemsCurrent}>
                                    {item.text}
                                </Link>
                                :
                                <Link to={item.link} className={classes.items}>
                                    {item.text}
                                </Link>
                            }
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}
