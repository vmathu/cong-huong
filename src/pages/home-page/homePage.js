import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom";

import endingBanner from "../../images/Illustration3.png";
import heroBanner from "../../images/Illustration5.png"; 

import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import ScrollButton from "../../components/scrollBtn";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        margin: 0,
        width: "100%",
        fontFamily: "Livvic",
        color: "#454016"
    },
    banner: {
        width: "100%",
        background: "#F8EAEA"
    },
    header: {
        color: "#00AFE7", 
        fontFamily: 'Montserrat',
        fontWeight: 600,
        fontSize: "70px",
        lineHeight: "100%",
        textAlign: "center",
        padding: "10vw 17vw",
        paddingBottom: 0,
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
        padding: "0 24vw",
        marginBottom: 0,
        [theme.breakpoints.down("xs")]: {
            fontSize: "16px",
            padding: "0 8vw"
        },
    },
    section: {
        width: "auto",
        padding: "8vw",
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]: {
            justifyContent: "left"
        },
    },
    sectionHeader: {
        color: "#00AFE7", 
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
        [theme.breakpoints.down("xs")]: {
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
    button2: {
        background: "#EFA7A7",
        color: "#F8EAEA",
        padding: '15px 30px',
        fontSize: '16px',
        "&:hover": {
            background: "white",
            color: "#EFA7A7",
        }
    },
    gridResponsive: {
        textAlign: "left",
        [theme.breakpoints.down("sm")]: {
            textAlign: "center"
        },
    }
}))

export default function HomePage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NavBar current="Home" />
            <div className={classes.banner}>
                <h1 className={classes.header}>
                    Cùng con khôn lớn, cộng hưởng yêu thương
                </h1>
                <h2 className={classes.subTitle}>
                    Hộp “Cùng con” gồm những món đồ được thiết kế chuyên biệt với từng mục đích khác nhau giúp cha mẹ có thể tiếp thu được những kiến thức nuôi dạy con hiệu quả và khoa học, đồng thời tạo cơ hội để cha mẹ và con cái có thể trở nên gắn kết hơn.
                </h2>
            </div>
            <img src={heroBanner} alt="hero banner" className={classes.banner}></img>
            <Grid container className={classes.section}>
                <Grid item sm={12} md={5}>
                    <h1 className={classes.sectionHeader}>
                        Hộp “Cùng con” giúp cha mẹ nuôi dạy và phát triển con trẻ  hiệu quả và khoa học
                    </h1>
                </Grid>
                <Grid item sm={12} md={6} className={[classes.sectionDescription, classes.gridResponsive]}>
                    <div>
                        Các phương pháp và kiến thức nuôi dạy con được truyền tải trong hộp “Cùng con” không đơn thuần chỉ là những kiến thức khô khan để cha mẹ học theo mà chúng được thiết kế dưới dạng các trò chơi trực quan
                        <br /> <br />
                        {/* Seeing yourself and your experiences with fresh eyes requires courage and curiosity, but it’s the key to unlocking what’s next for you and your family. */}
                    </div>
                    <br />
                    <Link to="/toolkit" style={{ textDecoration: "none" }}>
                        <Button variant="constained" className={classes.button}>
                            THE TOOLKIT
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <Grid container style={{ background: "#F8EAEA", }}>
                {/* <img src={dividerBanner} alt="divider banner" className={classes.banner}></img> */}
                <div className={classes.section}>
                    <Grid item style={{ width: "100%" }}>
                        <h1 className={classes.sectionHeader} style={{ textAlign: "center" }}>Cộng Hưởng Yêu Thương như thế nào?</h1>
                    </Grid>
                    <Grid>
                        <Grid container style={{ justifyContent: "space-between" }}>
                            <Grid item xs={12} sm={6} className={classes.sectionDescription} style={{ paddingRight: "20px" }}>
                                <div className={classes.sectionSubHeader}>Cho con bạn biết</div>
                                <br />
                                <div style={{ fontSize: "14px" }}>
                                    The [Cộng hưởng] starts in two places: with you and with your family members. It includes resources for individuals of every age. This means that the tools are child-focused with parent elements, and parent-focused with child elements.
                                    <br /> <br />
                                    NOTE: As we launch this first pilot, the focus is on adult tools. Kid-centered tools will be incorporated in future versions.
                                </div>
                                <br />
                            </Grid>
                            <Grid item xs={12} sm={6} className={classes.sectionDescription} style={{ paddingRight: "20px" }}>
                                <div className={classes.sectionSubHeader}>Dành cho bạn và dành cho con</div>
                                <br />
                                <div style={{ fontSize: "14px" }}>
                                    The approach helps you examine the root causes of your experience with activities designed build a strong foundation that will support the changes you need to make to reach the future you want.
                                    <br /> <br />
                                    The tools work across three levels: goal-setting, recognizing patterns and making connections between the events in your life, and shifting mindsets.
                                </div>
                                <br />
                            </Grid>
                            {/* <Grid item xs={12} sm={4} className={classes.sectionDescription} style={{ paddingRight: "20px" }}>
                                <div className={classes.sectionSubHeader}>Sets you up for the marathon.</div>
                                <br />
                                <div style={{ fontSize: "14px" }}>
                                    Using the approach, won’t be easy and at times, it won’t feel great. Healing can be a slow and uncomfortable process. Unraveling generations of struggle takes time. But the changes and liberation you’re seeking is possible and Cộng hưởng will help you get there.
                                </div>
                                <br />
                            </Grid> */}
                        </Grid>
                    </Grid>
                </div>
            </Grid>
            <Grid container className={classes.section}>
                <Grid item sm={12} md={4}>
                    <h1 className={classes.sectionHeader}>Cộng hưởng encourages you to explore all of the dimensions that make you, you.</h1>
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
            {/* <img src={dividerBanner2} alt="divider banner 2" style={{ width: "100%" }}></img> */}
            {/* <Grid container className={classes.section}>
                <Grid item xs={12} sm={4} md={2} className={classes.sectionDescription}>
                    <div className={classes.sectionSubHeader}>Your Story</div>
                    <br />
                    <div style={{ fontSize: "14px" }}>
                        <strong>Take stock of your history and your current environment.</strong>
                        <br /> <br />
                        Have compassion for yourself, consider how you got here, and acknowledge the realities of where you're at.
                    </div>
                    <br />
                </Grid>
                <Grid item xs={12} sm={4} md={2} className={classes.sectionDescription}>
                    <div className={classes.sectionSubHeader}>Your People</div>
                    <br />
                    <div style={{ fontSize: "14px" }}>
                        <strong>Identify the people you can count on, the ones you share your journey with.</strong>
                        <br /> <br />
                        Recognize how the people closest to you and those who are a part of your larger community can support you and how they are influenced by your choices and your actions
                    </div>
                    <br />
                </Grid>
                <Grid item xs={12} sm={4} md={2} className={classes.sectionDescription}>
                    <div className={classes.sectionSubHeader}>Your Hopes</div>
                    <br />
                    <div style={{ fontSize: "14px" }}>
                        <strong>Figure out what excites you and what keeps you going.</strong>
                        <br /> <br />
                        Define what energizes you and allow yourself to dream. Knowing what drives you helps you show up as your whole self and still make space for others.
                    </div>
                    <br />
                </Grid>
                <Grid item xs={12} sm={4} md={2} className={classes.sectionDescription}>
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
                <Grid item xs={12} sm={4} md={2} className={classes.sectionDescription}>
                    <div className={classes.sectionSubHeader}>Your Joys</div>
                    <br />
                    <div style={{ fontSize: "14px" }}>
                        <strong>Celebrate the joys you find along the way.</strong>
                        <br /> <br />
                        Recognize all the ways you're growing and take time to enjoy your successes — both big and small.
                    </div>
                    <br />
                </Grid>
            </Grid> */}
            <Grid container className={[classes.section, classes.banner]} style={{ alignItems: "center" }}>
                <Grid item sm={12} md={7} className={classes.banner}>
                    <img src={endingBanner} alt="ending banner" style={{ width: "100%" }}></img>
                </Grid>
                <Grid item sm={12} md={4} className={classes.gridResponsive}>
                    <h1 className={classes.sectionHeader}>Get started on your journey.</h1>
                    <Link to="/toolkit" style={{ textDecoration: "none" }}>
                        <Button variant="constained" className={classes.button2}>
                            THE TOOLKIT
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <Footer />
            <ScrollButton />
        </div>
    );
}