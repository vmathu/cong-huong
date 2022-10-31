import { makeStyles } from "@material-ui/core/styles";

import NavBar from "../../components/navBar";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        margin: 0,
        width: "100%",
        fontFamily: "Poppins",
        color: "#404040",
    }
}))

export default function HomePage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NavBar current="Home"/>
        </div>
    );
}