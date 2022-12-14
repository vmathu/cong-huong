import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

// import endingBanner from "../../images/Illustration3.png";
import heroBanner from "../../images/Illustration5.png";

import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import ScrollButton from "../../components/scrollBtn";

import { comboData } from "../../data/data";

import Combo from "./components/combo";

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
        background: "#F8EAEA",
    },
    header: {
        color: "#00AFE7",
        fontFamily: 'Montserrat',
        fontWeight: 600,
        fontSize: "70px",
        lineHeight: "100%",
        textAlign: "center",
        padding: "8vw 17vw",
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
        fontSize: "40px",
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
            fontSize: "20px"
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "16px"
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
            <NavBar current="/" />
            {/* Banner */}
            <div className={classes.banner} style={{ paddingBottom: "20vw", background: "linear-gradient(180deg, #F8EAEA 0%, #FFFFFF 100%)"}}>
                <h1 className={classes.header}>
                    C??ng con kh??n l???n, c???ng h?????ng y??u th????ng
                </h1>
                <h2 className={classes.subTitle}>
                    H???p ???C??ng con??? g???m nh???ng m??n ????? ???????c thi???t k??? chuy??n bi???t v???i t???ng m???c ????ch kh??c nhau gi??p cha m??? c?? th??? ti???p thu ???????c nh???ng ki???n th???c nu??i d???y con hi???u qu??? v?? khoa h???c, ?????ng th???i t???o c?? h???i ????? cha m??? v?? con c??i c?? th??? tr??? n??n g???n k???t h??n.
                </h2>
                <div style={{ margin: "4vw 0" }} >
                    <HashLink to="/#combo" style={{ textDecoration: "none" }} smooth>
                        <Button variant="constained" className={classes.button2}>
                            T??M HI???U TH??M
                        </Button>
                    </HashLink>
                </div>
            </div>
            <img src={heroBanner} alt="hero banner" className={classes.banner} style={{ background: "none", marginTop: "-20vw" }}></img>
            {/* How it work */}
            <Grid container style={{ background: "#F8EAEA", }}>
                {/* <img src={dividerBanner} alt="divider banner" className={classes.banner}></img> */}
                <div className={classes.section}>
                    <Grid item style={{ width: "100%" }}>
                        <h1 className={classes.sectionHeader} style={{ textAlign: "center" }}>C???ng H?????ng Y??u Th????ng nh?? th??? n??o?</h1>
                    </Grid>
                    <Grid>
                        <Grid container style={{ justifyContent: "space-between" }}>
                            <Grid item xs={12} sm={4} className={classes.sectionDescription} style={{ paddingRight: "20px" }}>
                                <div className={classes.sectionSubHeader}>????a con ?????n m???t t????ng lai ?????p nh???t</div>
                                <br />
                                <div style={{ fontSize: "14px" }}>
                                    B??? kit ???????c x??y d???ng d???a tr??n nh???ng ki???n th???c khoa h???c v???i s??? h??? tr??? c???a c??c chuy??n gia gi??o d???c v?? ph??t tri???n tr??? em. Nh???ng ho???t ?????ng x??y d???ng trong b??? kit s??? gi??p con b???n ???????c l???n l??n trong m???t m??i tr?????ng gi??o d???c l??nh m???nh, h??? tr??? con b???n ph??t tri???n tr??n nhi???u ph????ng di???n, c??? v??? t??m l?? l???n sinh l??.
                                    <br /> <br />
                                    S??? m???nh c???a ch??ng t??i ch??nh l?? ?????ng h??nh c??ng b???n v?? con trong nh???ng b?????c ?????u ti??n c???a chuy???n h??nh tr??nh cu???c s???ng.
                                </div>
                                <br />
                            </Grid>
                            <Grid item xs={12} sm={4} className={classes.sectionDescription} style={{ paddingRight: "20px" }}>
                                <div className={classes.sectionSubHeader}>D??nh cho b???n v?? d??nh cho con</div>
                                <br />
                                <div style={{ fontSize: "14px" }}>
                                    Ch??ng t??i tin r???ng h???nh ph??c c???a m???i gia ????nh ?????n t??? vi???c c???ng h?????ng y??u th????ng t??? hai ph??a. B??? kit s??? h??? tr??? gia ????nh b???n th???c hi???n ??i???u ???? th??ng qua ho???t ?????ng cung c???p ki???n th???c cho c??? b???n v?? con, ?????ng th???i t??ng c?????ng g???n k???t v?? t????ng t??c trong gia ????nh.
                                    <br /> <br />
                                </div>
                                <br />
                            </Grid>
                            <Grid item xs={12} sm={4} className={classes.sectionDescription} style={{ paddingRight: "20px" }}>
                                <div className={classes.sectionSubHeader}>C??ng ch??i, c??ng h???c v?? h??n th??? n???a</div>
                                <br />
                                <div style={{ fontSize: "14px" }}>
                                    H??n c??? m???t b??? tr?? ch??i v?? h??n c??? m???t cu???n s??ch, b??? kit ???????c x??y d???ng v???i nh???ng ho???t ?????ng th?? v??? nh??ng kh??ng k??m ph???n b??? ??ch v???i c??c gi?? tr??? truy???n t???i ???????c g???i g???m nguy??n v???n trong t???ng v???t ph???m. Quan tr???ng h??n t???t c???, b??? kit ch??nh l?? ph????ng ti???n ????? k???t n???i b???n v?? con.
                                </div>
                                <br />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
            <Grid container className={[classes.section, classes.tools]} style={{ justifyContent: "center" }} id="combo">
                <div className={classes.banner} style={{ background: "none" }}>
                    <h1 className={classes.sectionHeader} style={{ textAlign: "center" }}>
                        B??? s???n ph???m C??ng Con
                    </h1>
                    <h2 className={classes.sectionSubHeader}>D??? ki???n ra m???t v??o th??ng 2/ 2023</h2>
                </div>
                {comboData.map((combo) => (
                    <Grid item xs={12} sm={6} md={4} style={{ paddingRight: "8px" }}>
                        <Link to={`/combo-detail/${combo._id}`} style={{ textDecoration: "none", textAlign: "-webkit-center" }}>
                            <Combo
                                img={combo.img}
                                price={combo.price}
                                title={combo.title}
                                description={combo.description}
                                sale={combo.sale}
                            />
                        </Link>
                    </Grid>
                ))}
            </Grid>
            {/* Who are we */}
            {/* <Grid container className={classes.section}>
                <Grid item sm={12} md={5}>
                    <h1 className={classes.sectionHeader}>
                        H???p ???C??ng con??? gi??p cha m??? nu??i d???y v?? ph??t tri???n con tr???  hi???u qu??? v?? khoa h???c
                    </h1>
                </Grid>
                <Grid item sm={12} md={6} className={[classes.sectionDescription, classes.gridResponsive]}>
                    <div>
                        C??c ph????ng ph??p v?? ki???n th???c nu??i d???y con ???????c truy???n t???i trong h???p ???C??ng con??? kh??ng ????n thu???n ch??? l?? nh???ng ki???n th???c kh?? khan ????? cha m??? h???c theo m?? ch??ng ???????c thi???t k??? d?????i d???ng c??c tr?? ch??i tr???c quan
                        <br /> <br />
                    </div>
                    <br />
                    <Link to="/toolkit" style={{ textDecoration: "none" }}>
                        <Button variant="constained" className={classes.button}>
                            B??? TOOLKIT
                        </Button>
                    </Link>
                </Grid>
                <Grid item sm={12} md={6} className={classes.banner} style={{ background: "none" }}>
                    <img src={endingBanner} alt="ending banner" style={{ width: "100%" }}></img>
                </Grid>
                <Grid item sm={12} md={6} className={classes.gridResponsive}>
                    <h1 className={classes.sectionHeader}>H???p ???C??ng con??? gi??p cha m??? nu??i d???y v?? ph??t tri???n con tr???  hi???u qu??? v?? khoa h???c</h1>
                    <div>
                        C??c ph????ng ph??p v?? ki???n th???c nu??i d???y con ???????c truy???n t???i trong h???p ???C??ng con??? kh??ng ????n thu???n ch??? l?? nh???ng ki???n th???c kh?? khan ????? cha m??? h???c theo m?? ch??ng ???????c thi???t k??? d?????i d???ng c??c tr?? ch??i tr???c quan
                        <br /> <br />
                    </div>
                    <Link to="/toolkit" style={{ textDecoration: "none" }}>
                        <Button variant="constained" className={classes.button2}>
                            B??? TOOLKIT
                        </Button>
                    </Link>
                </Grid>
            </Grid> */}
            
            {/* Quote */}
            {/* <Grid container className={classes.section}>
                <Grid item sm={12} md={12}>
                    <h1 className={classes.sectionHeader}>?????ng h??nh c??ng b???n v?? con trong nh???ng b?????c ?????u ti??n c???a chuy???n h??nh tr??nh cu???c s???ng ch??nh l?? s??? m???nh c???a ch??ng t??i.</h1>
                </Grid>
                <Grid item sm={12} md={6} className={classes.sectionDescription}>
                    <div>
                        Picture your favorite place. What makes it special?
                        <br /> <br />
                        It???s more than the terrain and landmarks; it???s the story of what that place means to you. It???s the laughter and tears of the people you share it with, the meandering path you took there, the joys you found along the way. It???s how this place connects you to your hopes for the future.
                        ???<br /> <br />
                        In the same way, the Whole Family Toolkit invites you to examine and acknowledge all of the dimensions of your experience ??? your story, your people, your hopes, your plans, and your joys.
                    </div>
                    <br />
                </Grid>
            </Grid> */}
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
                        Recognize all the ways you're growing and take time to enjoy your successes ??? both big and small.
                    </div>
                    <br />
                </Grid>
            </Grid> */}
            {/* <Grid container className={[classes.section, classes.banner]} style={{ alignItems: "center" }}>
                <Grid item sm={12} md={7} className={classes.banner}>
                    <img src={endingBanner} alt="ending banner" style={{ width: "100%" }}></img>
                </Grid>
                <Grid item sm={12} md={4} className={classes.gridResponsive}>
                    <h1 className={classes.sectionHeader}>C??ng b???t ?????u h??nh tr??nh c???a b???n</h1>
                    <Link to="/toolkit" style={{ textDecoration: "none" }}>
                        <Button variant="constained" className={classes.button2}>
                            B??? TOOLKIT
                        </Button>
                    </Link>
                </Grid>
            </Grid> */}
            <Footer />
            <ScrollButton />
        </div>
    );
}