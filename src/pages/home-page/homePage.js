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
                    Cùng con khôn lớn, cộng hưởng yêu thương
                </h1>
                <h2 className={classes.subTitle}>
                    Hộp “Cùng con” gồm những món đồ được thiết kế chuyên biệt với từng mục đích khác nhau giúp cha mẹ có thể tiếp thu được những kiến thức nuôi dạy con hiệu quả và khoa học, đồng thời tạo cơ hội để cha mẹ và con cái có thể trở nên gắn kết hơn.
                </h2>
                <div style={{ margin: "4vw 0" }} >
                    <HashLink to="/#combo" style={{ textDecoration: "none" }} smooth>
                        <Button variant="constained" className={classes.button2}>
                            TÌM HIỂU THÊM
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
                        <h1 className={classes.sectionHeader} style={{ textAlign: "center" }}>Cộng Hưởng Yêu Thương như thế nào?</h1>
                    </Grid>
                    <Grid>
                        <Grid container style={{ justifyContent: "space-between" }}>
                            <Grid item xs={12} sm={4} className={classes.sectionDescription} style={{ paddingRight: "20px" }}>
                                <div className={classes.sectionSubHeader}>Đưa con đến một tương lai đẹp nhất</div>
                                <br />
                                <div style={{ fontSize: "14px" }}>
                                    Bộ kit được xây dựng dựa trên những kiến thức khoa học với sự hỗ trợ của các chuyên gia giáo dục và phát triển trẻ em. Những hoạt động xây dựng trong bộ kit sẽ giúp con bạn được lớn lên trong một môi trường giáo dục lành mạnh, hỗ trợ con bạn phát triển trên nhiều phương diện, cả về tâm lý lẫn sinh lý.
                                    <br /> <br />
                                    Sứ mệnh của chúng tôi chính là đồng hành cùng bạn và con trong những bước đầu tiên của chuyến hành trình cuộc sống.
                                </div>
                                <br />
                            </Grid>
                            <Grid item xs={12} sm={4} className={classes.sectionDescription} style={{ paddingRight: "20px" }}>
                                <div className={classes.sectionSubHeader}>Dành cho bạn và dành cho con</div>
                                <br />
                                <div style={{ fontSize: "14px" }}>
                                    Chúng tôi tin rằng hạnh phúc của mỗi gia đình đến từ việc cộng hưởng yêu thương từ hai phía. Bộ kit sẽ hỗ trợ gia đình bạn thực hiện điều đó thông qua hoạt động cung cấp kiến thức cho cả bạn và con, đồng thời tăng cường gắn kết và tương tác trong gia đình.
                                    <br /> <br />
                                </div>
                                <br />
                            </Grid>
                            <Grid item xs={12} sm={4} className={classes.sectionDescription} style={{ paddingRight: "20px" }}>
                                <div className={classes.sectionSubHeader}>Cùng chơi, cùng học và hơn thế nữa</div>
                                <br />
                                <div style={{ fontSize: "14px" }}>
                                    Hơn cả một bộ trò chơi và hơn cả một cuốn sách, bộ kit được xây dựng với những hoạt động thú vị nhưng không kém phần bổ ích với các giá trị truyền tải được gửi gắm nguyên vẹn trong từng vật phẩm. Quan trọng hơn tất cả, bộ kit chính là phương tiện để kết nối bạn và con.
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
                        Bộ sản phẩm Cùng Con
                    </h1>
                    <h2 className={classes.sectionSubHeader}>Dự kiến ra mắt vào tháng 2/ 2023</h2>
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
                        Hộp “Cùng con” giúp cha mẹ nuôi dạy và phát triển con trẻ  hiệu quả và khoa học
                    </h1>
                </Grid>
                <Grid item sm={12} md={6} className={[classes.sectionDescription, classes.gridResponsive]}>
                    <div>
                        Các phương pháp và kiến thức nuôi dạy con được truyền tải trong hộp “Cùng con” không đơn thuần chỉ là những kiến thức khô khan để cha mẹ học theo mà chúng được thiết kế dưới dạng các trò chơi trực quan
                        <br /> <br />
                    </div>
                    <br />
                    <Link to="/toolkit" style={{ textDecoration: "none" }}>
                        <Button variant="constained" className={classes.button}>
                            BỘ TOOLKIT
                        </Button>
                    </Link>
                </Grid>
                <Grid item sm={12} md={6} className={classes.banner} style={{ background: "none" }}>
                    <img src={endingBanner} alt="ending banner" style={{ width: "100%" }}></img>
                </Grid>
                <Grid item sm={12} md={6} className={classes.gridResponsive}>
                    <h1 className={classes.sectionHeader}>Hộp “Cùng con” giúp cha mẹ nuôi dạy và phát triển con trẻ  hiệu quả và khoa học</h1>
                    <div>
                        Các phương pháp và kiến thức nuôi dạy con được truyền tải trong hộp “Cùng con” không đơn thuần chỉ là những kiến thức khô khan để cha mẹ học theo mà chúng được thiết kế dưới dạng các trò chơi trực quan
                        <br /> <br />
                    </div>
                    <Link to="/toolkit" style={{ textDecoration: "none" }}>
                        <Button variant="constained" className={classes.button2}>
                            BỘ TOOLKIT
                        </Button>
                    </Link>
                </Grid>
            </Grid> */}
            
            {/* Quote */}
            {/* <Grid container className={classes.section}>
                <Grid item sm={12} md={12}>
                    <h1 className={classes.sectionHeader}>Đồng hành cùng bạn và con trong những bước đầu tiên của chuyến hành trình cuộc sống chính là sứ mệnh của chúng tôi.</h1>
                </Grid>
                <Grid item sm={12} md={6} className={classes.sectionDescription}>
                    <div>
                        Picture your favorite place. What makes it special?
                        <br /> <br />
                        It’s more than the terrain and landmarks; it’s the story of what that place means to you. It’s the laughter and tears of the people you share it with, the meandering path you took there, the joys you found along the way. It’s how this place connects you to your hopes for the future.
                        ‍<br /> <br />
                        In the same way, the Whole Family Toolkit invites you to examine and acknowledge all of the dimensions of your experience — your story, your people, your hopes, your plans, and your joys.
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
                        Recognize all the ways you're growing and take time to enjoy your successes — both big and small.
                    </div>
                    <br />
                </Grid>
            </Grid> */}
            {/* <Grid container className={[classes.section, classes.banner]} style={{ alignItems: "center" }}>
                <Grid item sm={12} md={7} className={classes.banner}>
                    <img src={endingBanner} alt="ending banner" style={{ width: "100%" }}></img>
                </Grid>
                <Grid item sm={12} md={4} className={classes.gridResponsive}>
                    <h1 className={classes.sectionHeader}>Cùng bắt đầu hành trình của bạn</h1>
                    <Link to="/toolkit" style={{ textDecoration: "none" }}>
                        <Button variant="constained" className={classes.button2}>
                            BỘ TOOLKIT
                        </Button>
                    </Link>
                </Grid>
            </Grid> */}
            <Footer />
            <ScrollButton />
        </div>
    );
}