import { Grid, makeStyles } from "@material-ui/core";

import Footer from "../../components/footer";
import NavBar from "../../components/navBar";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        margin: 0,
        width: "100%",
        fontFamily: "Livvic",
        color: "#454016",
        textAlign: "left",
        background: "#F8EAEA",
    },
    banner: {
        width: "100%",
        textAlign: "left"
    },
    header: {
        fontFamily: 'Alice',
        fontWeight: 500,
        fontSize: "90px",
        textAlign: "left",
        lineHeight: "100%",
        // margin: "20vw 17vw 0",
        [theme.breakpoints.down("xs")]: {
            fontSize: "30px",
            padding: "32vw 8vw 4vw 8vw",
        },
    },
    subTitle: {
        fontFamily: 'Livvic',
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: "150%",
        // padding: "0 60vw 0 17vw",
        margin: "2vw 0 0 0",
        textAlign: "left",
        [theme.breakpoints.down("xs")]: {
            fontSize: "16px",
            padding: "0 8vw"
        },
    },
    section: {
        width: "auto",
        padding: "8vw",
        background: "white",
        justifyContent: "space-between",
        marginTop: "-4px",
        [theme.breakpoints.down("sm")]: {
            justifyContent: "left"
        },
    },
}))

export default function OurStory() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NavBar current="Our Story" />
            <Grid container className={classes.section}>
                <Grid item sm={12} md={6}>
                    <h1 className={classes.header}>
                        You are bigger than this moment.
                    </h1>
                    <h2 className={classes.subTitle}>
                        Cộng hưởng is both a philosophy and a kit of tools that guides you in exploring your experiences from broader perspective in order to move beyond them.
                    </h2>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
}