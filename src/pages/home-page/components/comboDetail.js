import { makeStyles, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import Tag from "../../toolkit/components/tag";
import Tool from "../../toolkit/components/tool";

import { toolkitData } from "../../../data/data";
import { HashLink } from "react-router-hash-link";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    marginTop: "3vw",
    width: "100%",
    fontFamily: "Livvic",
    color: "#454016",
    textAlign: "left",
    background: "#F8EAEA",
  },
  banner: {
    width: "100%",
    textAlign: "left",
  },
  header: {
    fontFamily: "Montserrat",
    fontWeight: 500,
    fontSize: "50px",
    textAlign: "left",
    lineHeight: "100%",
    margin: "1vw 0",
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
    },
  },
  subTitle: {
    fontFamily: "Livvic",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "150%",
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      padding: "0 !important",
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
      paddingTop: "16vw",
    },
  },
  sectionReverse: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  sectionHeader: {
    fontFamily: "Montserrat",
    fontWeight: 500,
    fontSize: "50px",
    lineHeight: "120%",
    textAlign: "left",
    marginTop: 0,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "28px",
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
    width: "100%",
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
    color: "white",
    // padding: '10px 30px',
    fontSize: "16px",
    "&:hover": {
      background: "white",
      color: "#EFA7A7",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  price: {
    fontSize: "20px",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
    // color: "#DC4E4E"
  },
  originPrice: {
    fontSize: "12px",
    fontWeight: 400,
    color: "grey",
    textDecoration: "line-through",
  },
}));

export default function ComboDetail(props) {
  const classes = useStyles();

  const data = props.data;
  const tags = data.tags;

  return (
    <div className={classes.root}>
      <Grid container className={[classes.section, classes.sectionReverse]}>
        <Grid item sm={12} md={5} style={{ alignSelf: "center" }}>
          <div>
            <div
              style={{
                textAlign: "left",
                color: "#00AFE7",
                fontWeight: "bold",
              }}
            >
              SẢN PHẨM
            </div>
            <h1 className={classes.header}>{data.title}</h1>
            <h2 className={classes.subTitle}>{data.description}</h2>
          </div>
          <div>
            <div
              style={{
                textAlign: "left",
                fontWeight: "bold",
                marginTop: "4vw",
              }}
            >
              BỘ SẢN PHẨM BAO GỒM
            </div>
            <Grid container>
              {tags.map((tag) => (
                <Grid item xs={12} sm={4}>
                  <HashLink
                    to={`#tools`}
                    smooth
                    style={{ textDecoration: "none" }}
                  >
                    <Tag data={tag} />
                  </HashLink>
                </Grid>
              ))}
            </Grid>
          </div>
          <br />
          <br />
          {/* <Grid container style={{ alignItems: "center" }}>
                        <Grid item xs={6} className={classes.price} style={{display: "flex", flexDirection: "row"}}>
                            <div style={{paddingRight: "12px"}}>Giá: </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div>{data.sale}</div>
                                <div className={classes.originPrice}>{data.price}</div>
                            </div>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: "end" }}>
                            <a href="https://forms.gle/enJAmVxbD55PHZMq6" style={{ textDecoration: "none" }}>
                                <Button variant="constained" className={classes.button}>
                                    ĐẶT TRƯỚC NGAY
                                </Button>
                            </a>
                        </Grid>
                    </Grid> */}
        </Grid>
        <Grid item sm={12} md={6}>
          <img src={data.img} alt={data.title} className={classes.banner}></img>
        </Grid>
      </Grid>
      <Grid container className={[classes.section, classes.tools]} id="tools">
        <div className={classes.banner}>
          <h1 className={classes.sectionHeader} style={{ textAlign: "center" }}>
            Chi tiết sản phẩm
          </h1>
        </div>
        {toolkitData.map((tool) => {
          return (
            tags.includes(tool.title) && (
              <Grid item xs={12} sm={6} md={4} className={classes.tool}>
                <Link
                  to={`/tool-detail/${tool._id}`}
                  style={{
                    textDecoration: "none",
                    textAlign: "-webkit-center",
                  }}
                >
                  <Tool
                    img={tool.img}
                    title={tool.title}
                    subTitle={tool.subTitle}
                    description={tool.description}
                  />
                </Link>
              </Grid>
            )
          );
        })}
      </Grid>
    </div>
  );
}
