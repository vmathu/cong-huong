import { useParams } from "react-router-dom";

import { makeStyles, Grid } from "@material-ui/core";

import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import ScrollButton from '../../components/scrollBtn';

import Tool from "./components/tool";
import ToolDetail from "./components/toolDetail";

import { toolkitData, productsData } from "../../data/data";

const useStyles = makeStyles((theme) => ({
  banner: {
    width: "100%",
    textAlign: "left",
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
  tools: {
    justifyContent: "flex-start",
  },
  tool: {
    padding: "8px",
  }
}))

function Check(id) {
  for (let i = 0; i < productsData.length; i++) {
    if (productsData[i]._id === id) return i;
  }
  return -1;
}

function ToolDetailPage() {
  const classes = useStyles();
  const { id } = useParams();

  let ans = Check(id);
  let products = [];
  if (ans !== -1) {
    products = productsData[ans].products;
  }


  return (
    <div>
      <NavBar />
      <ToolDetail data={toolkitData[id - 1]} />
      {ans !== -1 ?
        <Grid container className={[classes.section, classes.tools]}>
          <div className={classes.banner}>
            <h1 className={classes.sectionHeader} style={{ textAlign: "center" }}>
              {toolkitData[id - 1].title}
            </h1>
          </div>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} className={classes.tool}>
              <Tool
                img={product.img}
                subTitle={product.description}
              />
            </Grid>
          ))}
        </Grid> : null
      }
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default ToolDetailPage;
