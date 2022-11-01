import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

import heroBanner from "../../images/hero-banner.png";
import dividerBanner from "../../images/divider-banner.png";
import dividerBanner2 from "../../images/divider-banner2.jpg";

import NavBar from "../../components/navBar";
import Footer from "../../components/footer";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        margin: 0,
        width: "100%",
        fontFamily: "Poppins",
        color: "#454016"
    },
    banner: {
        width: "100%",
        background: "#F8EAEA"
    },
    header: {
        fontFamily: 'Cormorant Garamond',
        fontWeight: 500,
        fontSize: "100px",
        lineHeight: "100%",
        textAlign: "center",
        padding: "14vw",
        paddingBottom: 0,
        margin: '0 8vw 0 8vw',
        [theme.breakpoints.down("sm")]: {
            fontSize: "30px",
            padding: "36vw 8vw 4vw 8vw",
        },
    },
    subTitle: {
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: '20px',
        padding: "0 24vw",
        marginBottom: 0,
        [theme.breakpoints.down("sm")]: {
            fontSize: "16px",
            padding: "0 8vw"
        },
    },
    section: {
        width: "auto",
        padding: "8vw",
        justifyContent: "space-between"
    },
    sectionHeader: {
        fontFamily: 'Cormorant Garamond',
        fontWeight: 500,
        fontSize: "50px",
        lineHeight: "120%",
        textAlign: "left",
        marginTop: 0,
        [theme.breakpoints.down("sm")]: {
            fontSize: "28px",
        },
    },
    sectionSubHeader: {
        fontSize: "24px",
        fontWeight: "500",
    },
    sectionDescription: {
        textAlign: "left",
        fontSize: "20px",
        width: '100%',
        [theme.breakpoints.down("sm")]: {
            fontSize: "16px",
        },
    },
    button: {
        background: "#F8EAEA",
        padding: '15px 30px',
        fontSize: '16px',
        color: "#EFA7A7",
        "&:hover": {
            background: "#EFA7A7",
            color: "#F8EAEA"
        }
    },
}))

export default function HomePage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NavBar current="Home" />
            <div className={classes.banner}>
                <h1 className={classes.header}>
                    You are bigger than this moment.
                </h1>
                <h2 className={classes.subTitle}>
                    The Whole Family Approach is both a philosophy and a kit of tools that guides you in exploring your experiences from broader perspective in order to move beyond them.
                </h2>
            </div>
            <img src={heroBanner} alt="hero banner" className={classes.banner}></img>
            <Grid container className={classes.section}>
                <Grid item sm={12} md={4}>
                    <h1 className={classes.sectionHeader}>The Whole Family Approach helps you understand your whole self.</h1>
                </Grid>
                <Grid item sm={12} md={7} className={classes.sectionDescription}>
                    <div>
                        The Whole Family Approach doesn’t ask you to fit between the lines on a form. Instead it creates a space where you can stretch out in your potential as you heal, move past trauma, and break the cycle of struggle.
                        <br /> <br />
                        Seeing yourself and your experiences with fresh eyes requires courage and curiosity, but it’s the key to unlocking what’s next for you and your family.
                    </div>
                    <br />
                    <Button variant="constained" href="/toolkit" className={classes.button}>
                        THE TOOLKIT
                    </Button>
                </Grid>
            </Grid>
            <Grid container style={{ background: "#F8EAEA", }}>
                <img src={dividerBanner} alt="divider banner" className={classes.banner}></img>
                <div className={classes.section}>
                    <Grid item style={{ width: "100%" }}>
                        <h1 className={classes.sectionHeader} style={{ textAlign: "center", margin: "0 20vw 4vw 20vw" }}>How the Whole Family Approach works</h1>
                    </Grid>
                    <Grid>
                        <Grid container style={{ justifyContent: "space-between" }}>
                            <Grid item sm={12} md={4} className={classes.sectionDescription}>
                                <div className={classes.sectionSubHeader}>Centers on both you AND your family.</div>
                                <br />
                                <div style={{ fontSize: "14px" }}>
                                    The [Whole Family Approach] starts in two places: with you and with your family members. It includes resources for individuals of every age. This means that the tools are child-focused with parent elements, and parent-focused with child elements.
                                    <br /> <br />
                                    NOTE: As we launch this first pilot, the focus is on adult tools. Kid-centered tools will be incorporated in future versions.
                                </div>
                                <br />
                            </Grid>
                            <Grid item sm={12} md={4} className={classes.sectionDescription}>
                                <div className={classes.sectionSubHeader}>Guides you toward the future you want with practical tools.</div>
                                <br />
                                <div style={{ fontSize: "14px" }}>
                                    The approach helps you examine the root causes of your experience with activities designed build a strong foundation that will support the changes you need to make to reach the future you want.
                                    <br /> <br />
                                    The tools work across three levels: goal-setting, recognizing patterns and making connections between the events in your life, and shifting mindsets.
                                </div>
                                <br />
                            </Grid>
                            <Grid item sm={12} md={4} className={classes.sectionDescription}>
                                <div className={classes.sectionSubHeader}>Sets you up for the marathon.</div>
                                <br />
                                <div style={{ fontSize: "14px" }}>
                                    Using the approach, won’t be easy and at times, it won’t feel great. Healing can be a slow and uncomfortable process. Unraveling generations of struggle takes time. But the changes and liberation you’re seeking is possible and the Whole Family Approach will help you get there.
                                </div>
                                <br />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
            <Grid container className={classes.section}>
                <Grid item sm={12} md={4}>
                    <h1 className={classes.sectionHeader}>The Whole Family Approach encourages you to explore all of the dimensions that make you, you.</h1>
                </Grid>
                <Grid item sm={12} md={7} className={classes.sectionDescription}>
                    <div>
                        Picture your favorite place. What makes it special?
                        <br /> <br />
                        It’s more than the terrain and landmarks; it’s the story of what that place means to you. It’s the laughter and tears of the people you share it with, the meandering path you took there, the joys you found along the way. It’s how this place connects you to your hopes for the future.
                        ‍<br /> <br />
                        In the same way, the Whole Family Toolkit invites you to examine and acknowledge all of the dimensions of your experience — your story, your people, your hopes, your plans, and your joys.
                    </div>
                    <br />
                </Grid>
            </Grid>
            <img src={dividerBanner2} alt="divider banner 2"></img>
            <Grid container className={classes.section}>
                <Grid item sm={12} md={2} className={classes.sectionDescription}>
                    <div className={classes.sectionSubHeader}>Your Story</div>
                    <br />
                    <div style={{ fontSize: "14px" }}>
                        <strong>Take stock of your history and your current environment.</strong>
                        <br /> <br />
                        Have compassion for yourself, consider how you got here, and acknowledge the realities of where you're at.
                    </div>
                    <br />
                </Grid>
                <Grid item sm={12} md={2} className={classes.sectionDescription}>
                    <div className={classes.sectionSubHeader}>Your People</div>
                    <br />
                    <div style={{ fontSize: "14px" }}>
                        <strong>Identify the people you can count on, the ones you share your journey with.</strong>
                        <br /> <br />
                        Recognize how the people closest to you and those who are a part of your larger community can support you and how they are influenced by your choices and your actions
                    </div>
                    <br />
                </Grid>
                <Grid item sm={12} md={2} className={classes.sectionDescription}>
                    <div className={classes.sectionSubHeader}>Your Hopes</div>
                    <br />
                    <div style={{ fontSize: "14px" }}>
                        <strong>Figure out what excites you and what keeps you going.</strong>
                        <br /> <br />
                        Define what energizes you and allow yourself to dream. Knowing what drives you helps you show up as your whole self and still make space for others.
                    </div>
                    <br />
                </Grid>
                <Grid item sm={12} md={2} className={classes.sectionDescription}>
                    <div className={classes.sectionSubHeader}>
                        Your Path
                    </div>
                    <br />
                    <div style={{ fontSize: "14px" }}>
                        <strong>Plan the steps you'll take to get you where you want to go.</strong>
                        <br /> <br />
                        Plot a course that can take you from where you are today to where you want to be. Consider the smaller actions that will help you reach your larger goal.
                    </div>
                    <br />
                </Grid>
                <Grid item sm={12} md={2} className={classes.sectionDescription}>
                    <div className={classes.sectionSubHeader}>Your Joys</div>
                    <br />
                    <div style={{ fontSize: "14px" }}>
                        <strong>Celebrate the joys you find along the way.</strong>
                        <br /> <br />
                        Recognize all the ways you're growing and take time to enjoy your successes — both big and small.
                    </div>
                    <br />
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
}