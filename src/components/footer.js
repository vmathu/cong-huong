import { makeStyles } from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    footer: {
        textAlign: "center",
        fontFamily: "Livvic",
        padding: "1% 7%",
        background: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    logo: {
        fontWeight: 600,
        fontSize: "20px",
        padding: "0.5em"
    },
    listItems: {
        display: "flex"
    },
    items: {
        display: "block",
        color: "#454016",
        textDecoration: "none",
        padding: "0.5em",
        fontSize: "14px",
        cursor: "pointer",
        "&:hover": {
            color: "#00AFE7"
        }
    }
}));

function Footer() {
    const classes = useStyles();

    const navItems = [
        {
            text: 'Email',
            link: 'mailto:conghuongyeuthuong@gmail.com?subject=Hello',
        },
        {
            text: 'Terms of Use',
            link: 'https://www.ideo.org/terms-of-use',
        },
        {
            text: 'Privacy Policy',
            link: 'https://www.ideo.org/privacy-policy'
        }
    ]

    return (
        <footer className={classes.footer}>
            <div className={classes.logo}>
                <Link to="/" style={{ display: "flex", textDecoration: "none", color: "#00AFE7" }}>Cộng hưởng<span style={{ color: "#EFA7A7" }}>.</span></Link>
            </div>
            <div className={classes.listItems}>
                {navItems.map((item) => (
                    <div>
                        <a href={item.link} className={classes.items}>
                            {item.text}
                        </a>
                    </div>
                ))}
                <div className={classes.items}>Copyright © 2022</div>
            </div>
        </footer>
    );
}

export default Footer;
