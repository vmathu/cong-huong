import { Button, Grid, makeStyles } from "@material-ui/core";

import Footer from "../../components/footer";
import NavBar from "../../components/navBar";
import ScrollButton from "../../components/scrollBtn";

import aboutHeroBanner from "../../images/about-hero-banner.png";
import aboutImage from "../../images/about-image.png";

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
        color: "#00AFE7", 
        fontFamily: 'Montserrat',
        fontWeight: 600,
        fontSize: "90px",
        textAlign: "center",
        lineHeight: "100%",
        margin: 0,
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
        margin: "2vw 0 0 0",
        textAlign: "center",
        [theme.breakpoints.down("xs")]: {
            fontSize: "16px",
            padding: "0 !important"
        },
    },
    section: {
        width: "auto",
        padding: "8vw",
        paddingBottom: "4vw",
        background: "white",
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]: {
            justifyContent: "left",
            paddingTop: "16vw"
        },
    },
    sectionReverse: {
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column-reverse"
        },
    },
    sectionHeader: {
        fontFamily: 'Montserrat',
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
        width: '100%',
        lineHeight: "150%",
        [theme.breakpoints.down("xs")]: {
            fontSize: "16px",
            lineHeight: "150%",
        },
    },
    sectionSubDescription: {
        fontSize: "16px",
        lineHeight: "150%",
    },
    button: {
        background: "#EFA7A7",
        color: "#F8EAEA",
        padding: '10px 30px',
        fontSize: '16px',
        "&:hover": {
            background: "white",
            color: "#EFA7A7",
        }
    },
}))

export default function OurStory() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NavBar current="Our Story" />
            <Grid container className={classes.section}>
                <Grid item sm={12} md={6} style={{ alignSelf: "center" }}>
                    <h1 className={classes.header}>
                        The Story of this Toolkit
                    </h1>
                    <h2 className={classes.subTitle}>
                        Building the stepping stones towards prosperity for families in Detroit
                    </h2>
                </Grid>
                <Grid item sm={12} md={6}>
                    <img src={aboutHeroBanner} alt="about hero banner" className={classes.banner}></img>
                </Grid>
            </Grid>
            <Grid container className={[classes.section, classes.sectionReverse]} style={{ background: "#F8EAEA" }}>
                <Grid item sm={12} md={6} style={{ alignSelf: "flex-end" }}>
                    <img src={aboutImage} alt="about illus" className={classes.banner}></img>
                </Grid>
                <Grid item sm={12} md={6}>
                    <p className={classes.sectionDescription}>
                        The Story of this Toolkit
                        Building the stepping stones towards prosperity for families in Detroit
                        The Whole Family Approach is a result of a collaboration between the Kresge Foundation, APHSA, IDEO.org and five leading health & human services organizations in Detroit. Together, we set out to explore how we might infuse whole family approaches that support generational mobility within health & human services organizations.
                    </p>
                    <p className={classes.sectionSubDescription}>
                        Using a human-centered approach, we zoomed in on lived experiences and zoomed out to consider the broader system and existing theory. Through multiple co-design sessions with coaches, teachers, social workers and frontline staff, we uncovered what gets in the way of driving generational mobility, as well as what works well in client-coach settings. Through zooming out, we took into consideration knowledge that’s already out there, understanding what works in similar and adjacent contexts.
                        <br /><br />
                        All this led to creating this toolkit—which we view as a stepping stone towards the larger journey of generational mobility.
                    </p>
                </Grid>
            </Grid>
            <Grid container className={classes.section}>
                <div className={classes.banner}>
                    <h1 className={classes.sectionHeader} style={{ textAlign: "center" }}>
                        Testimonials
                    </h1>
                </div>
                <Grid>
                    <Grid container style={{ justifyContent: "space-between" }}>
                        <Grid item xs={12} sm={4} className={classes.sectionDescription} style={{ paddingRight: "40px" }}>
                            <div className={classes.sectionDescription} style={{ fontFamily: "Montserrat" }}>
                                “This tool helped [my client] to understand that it takes a whole village to raise a child. She was perceptive to it and it helped her open her eyes. This helped her to think about making a plan for when she has a child.”
                            </div>
                            <br />
                            <div style={{ fontSize: "12px", lineHeight: "150%" }}>
                                Caseworker, Detroit
                            </div>
                            <br />
                        </Grid>
                        <Grid item xs={12} sm={4} className={classes.sectionDescription} style={{ paddingRight: "40px" }}>
                            <div className={classes.sectionDescription} style={{ fontFamily: "Montserrat" }}>
                                “This is the thing we have been missing. We don’t have anything that really takes the whole family approach and makes it practical and tangible.”
                            </div>
                            <br />
                            <div style={{ fontSize: "12px", lineHeight: "150%" }}>
                                Leadership, Partner Organization
                            </div>
                            <br />
                        </Grid>
                        <Grid item xs={12} sm={4} className={classes.sectionDescription} style={{ paddingRight: "40px" }}>
                            <div className={classes.sectionDescription} style={{ fontFamily: "Montserrat" }}>
                                “I’m excited to test this in our new homelessness program because it’s really about getting to those underlying systemic issues that affects generations.”
                            </div>
                            <br />
                            <div style={{ fontSize: "12px", lineHeight: "150%" }}>
                                Leadership, Partner Organization
                            </div>
                            <br />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className={classes.section} style={{ background: "#F8EAEA" }}>
                <div className={classes.banner}>
                    <h1 className={classes.sectionHeader} style={{ textAlign: "center" }}>
                        Our Building Blocks
                    </h1>
                    <h2 className={classes.subTitle} style={{ textAlign: "center", marginBottom: "4vw", padding: '0 20vw' }}>
                        This toolkit is grounded in the work of many individuals and organizations. The following are some of those who’s work we were directly inspired by.
                    </h2>
                </div>
                <Grid>
                    <Grid container style={{ justifyContent: "space-between" }}>
                        <Grid item xs={12} sm={4} className={classes.sectionDescription} style={{ paddingRight: "40px" }}>
                            <div className={classes.sectionSubHeader}>EMPath’s Bridge to Self-Sufficiency</div>
                            <br />
                            <div style={{ fontSize: "14px", lineHeight: "150%" }}>
                                EMPath's Bridge to Self-Sufficiency is a theory of change that breaks down silos and uses a comprehensive approach to upward economic mobility. The Bridge to Self-Sufficiency is a special tool to chart a path to economic self-sufficiency. “The Bridge” was developed by EMPath and is backed by emerging brain science.
                            </div>
                            <br />
                            <Button variant="constained" href="https://ascend.aspeninstitute.org/two-generation/what-is-2gen/" className={classes.button}>
                                VISIT
                            </Button>
                            <br /><br />
                        </Grid>
                        <Grid item xs={12} sm={4} className={classes.sectionDescription} style={{ paddingRight: "40px" }}>
                            <div className={classes.sectionSubHeader}>EMPath’s Bridge to Self-Sufficiency</div>
                            <br />
                            <div style={{ fontSize: "14px", lineHeight: "150%" }}>
                                EMPath's Bridge to Self-Sufficiency is a theory of change that breaks down silos and uses a comprehensive approach to upward economic mobility. The Bridge to Self-Sufficiency is a special tool to chart a path to economic self-sufficiency. “The Bridge” was developed by EMPath and is backed by emerging brain science.
                            </div>
                            <br />
                            <Button variant="constained" href="https://ascend.aspeninstitute.org/two-generation/what-is-2gen/" className={classes.button}>
                                VISIT
                            </Button>
                            <br /><br />
                        </Grid>
                        <Grid item xs={12} sm={4} className={classes.sectionDescription} style={{ paddingRight: "40px" }}>
                            <div className={classes.sectionSubHeader}>EMPath’s Bridge to Self-Sufficiency</div>
                            <br />
                            <div style={{ fontSize: "14px", lineHeight: "150%" }}>
                                EMPath's Bridge to Self-Sufficiency is a theory of change that breaks down silos and uses a comprehensive approach to upward economic mobility. The Bridge to Self-Sufficiency is a special tool to chart a path to economic self-sufficiency. “The Bridge” was developed by EMPath and is backed by emerging brain science.
                            </div>
                            <br />
                            <Button variant="constained" href="https://ascend.aspeninstitute.org/two-generation/what-is-2gen/" className={classes.button}>
                                VISIT
                            </Button>
                            <br /><br />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className={classes.section}>
                <div className={classes.banner}>
                    <h1 className={classes.sectionHeader} style={{ textAlign: "center" }}>
                        Partner Organizations
                    </h1>
                </div>
            </Grid>
            <Footer />
            <ScrollButton />
        </div>
    );
}