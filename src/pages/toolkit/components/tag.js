import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        color: "#EFA7A7", 
        background: "#F8EAEA", 
        borderRadius: '16px', 
        padding: '6px 20px', 
        marginRight: '12px', 
        fontWeight: "500", 
        marginTop: "12px", 
        fontSize: "16px"
    },
}));

export default function Tag(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>{props.data}</div>
    )
}