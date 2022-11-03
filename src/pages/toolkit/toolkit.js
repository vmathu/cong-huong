import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import NavBar from "../../components/navBar";
import Footer from "../../components/footer";

import toolkitBanner from "../../images/toolkit-banner.png";
import dividerBanner from "../../images/toolkit-divider-banner.png";
import shape from "../../images/shape.png";

import file from "../../files/Slide mô tả dự án.pdf";

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
    heroBanner: {
        marginTop: "-8vw",
        [theme.breakpoints.down("sm")]: {
            marginTop: 0
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "8vw"
        },
    },
    banner: {
        width: "100%",
        textAlign: "left"
    },
    bannerResponsive: {
        [theme.breakpoints.up("lg")]: {
            margin: "10vw 12vw 0", width: "fit-content"
        },
    },
    header: {
        fontFamily: 'Alice',
        fontWeight: 500,
        fontSize: "90px",
        textAlign: "left",
        lineHeight: "100%",
        margin: "20vw 17vw 0",
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "30px",
            padding: "16vw 8vw 4vw 8vw",
        },
    },
    subTitle: {
        fontFamily: 'Livvic',
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: "150%",
        padding: "0 60vw 0 17vw",
        margin: "2vw 0 0 0",
        textAlign: "left",
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
            padding: '0 17vw'
        },
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
    sectionHeader: {
        fontFamily: 'Alice',
        fontWeight: 500,
        fontSize: "50px",
        lineHeight: "120%",
        textAlign: "left",
        marginTop: 0,
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "28px"
        },
    },
    sectionSubHeader: {
        fontSize: "24px",
        fontWeight: "500",
        [theme.breakpoints.down("sm")]: {
            textAlign: "left",
        },
    },
    sectionDescription: {
        textAlign: "left",
        fontSize: "20px",
        lineHeight: "150%",
        width: '100%',
        [theme.breakpoints.down("xs")]: {
            fontSize: "16px",
        },
    },
    gridResponsive: {
        textAlign: "left",
        [theme.breakpoints.down("sm")]: {
            textAlign: "center"
        },
    }
}))

export default function Toolkit() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavBar current="Toolkit" />
            <div style={{ display: "flex", flexDirection: "column" }} className={classes.banner}>
                <h1 className={classes.header}>
                    The Tools
                </h1>
                <h2 className={classes.subTitle}>
                    The way to get started with Cộng hưởng
                </h2>
            </div>
            <img src={toolkitBanner} alt="toolkit banner" className={[classes.banner + " " + classes.heroBanner]} ></img>
            <Grid container className={classes.section} style={{ paddingBottom: 0 }}>
                <Grid item sm={12} md={5}>
                    <h1 className={classes.sectionHeader}>This toolkit will act as your companion.</h1>
                </Grid>
                <Grid item sm={12} md={6} className={[classes.sectionDescription, classes.gridResponsive]}>
                    <div>
                        Cộng hưởng isn’t just a philosophy, it’s a set of practical tools — a group of activities and reflection prompts designed to help you understand, acknowledge, and move beyond your current situation.
                        ‍<br /> <br />
                        You can do the activities in the tools, on your own, with your coach, and in some cases, with your family.
                    </div>
                </Grid>
                <img src={dividerBanner} alt="toolkit divider banner" className={[classes.banner + " " + classes.bannerResponsive]}></img>
            </Grid>
            <Grid container className={classes.section} style={{ background: "#F8EAEA", marginTop: "-6vw" }}>
                <div className={classes.banner}>
                    <h1 className={classes.sectionHeader} style={{ textAlign: "center", marginTop: "4vw" }}>
                        Where should you start?
                    </h1>
                    <h2 className={classes.subTitle} style={{ textAlign: "center", padding: "0 22vw", marginBottom: "2vw" }}>
                        There’s no wrong way to dig in and start Cộng hưởng, but with more than 15 tools, you might not know where to begin.
                    </h2>
                </div>
                <img src={shape} alt="shape" className={classes.banner}></img>
                <Grid style={{ marginTop: '4vw' }}>
                    <Grid container style={{ justifyContent: "space-between" }}>
                        <Grid item xs={12} sm={4} className={classes.sectionDescription} style={{ paddingRight: "40px" }}>
                            <div className={classes.sectionSubHeader}>Use a collection.</div>
                            <br />
                            <div style={{ fontSize: "14px", lineHeight: "150%" }}>
                                Collections are sets of tools we’ve grouped together to help guide you in tackling a big aspirations you might have like: Strengthening your relationships or "Setting goals with your family".
                                <br /> <br />
                                Collections can help you jumpstart your work in Cộng hưởng.
                            </div>
                            <br />
                        </Grid>
                        <Grid item xs={12} sm={4} className={classes.sectionDescription} style={{ paddingRight: "40px" }}>
                            <div className={classes.sectionSubHeader}>Follow your gut.</div>
                            <br />
                            <div style={{ fontSize: "14px", lineHeight: "150%" }}>
                                In addition he topic or aspiration you want to explore, you might want to consider how the activities of a particular tool will make you feel or the level of intensity required for the activity.
                                <br /> <br />
                                You’ll find the intensity rating and the state of mind rating as a part of each tool description, along with an estimate of how long it will take to complete the activity, and any prerequisite activities you’ll need to complete first.
                            </div>
                            <br />
                        </Grid>
                        <Grid item xs={12} sm={4} className={classes.sectionDescription} style={{ paddingRight: "40px" }}>
                            <div className={classes.sectionSubHeader}>Let a coach, or a mentor guide you along the way.</div>
                            <br />
                            <div style={{ fontSize: "14px", lineHeight: "150%" }}>
                                Many people work with someone who can act as their coach and guide them through Cộng hưởng, selecting the right, next tool to work on.
                            </div>
                            <br />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className={classes.section}>
                <div className={classes.banner}>
                    <h1 className={classes.sectionHeader} style={{ textAlign: "center" }}>
                        The Tools
                    </h1>
                </div>
                <iframe src={file} width="100%" height="710vw">
                </iframe>
            </Grid>
            <Footer />
        </div>
    );
}