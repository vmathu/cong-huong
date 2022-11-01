import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    footer: {
        textAlign: "center", 
        fontFamily: "Poppins", 
        marginTop: "2em",
        padding: "1% 7%",
        background: "#F8EAEA",
    }
}));

function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <div class="a">Copyright © 2022 • Cộng hưởng</div>
            <div class="a">All rights reserved</div>
        </footer>
    );
}

export default Footer;
