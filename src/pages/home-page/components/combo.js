import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        height: 360,
        borderRadius: "15px",
        padding: "1.5rem",
        background: "white",
        position: "relative",
        display: "flex",
        transition: "0.4s ease-out",
        "&:hover": {
            transform: "translateY(20px)",
            "&:before": {
                opacity: 1
            }
        },
        "&:before": {
            position: "absolute",
            top: 0,
            left: 0,
            display: "block",
            width: "100%",
            height: "100%",
            borderRadius: "15px",
            background: "rgb(0 0 0 / 0.6)",
            zIndex: 2,
            transition: "0.5s",
            opacity: 0
        },
        [theme.breakpoints.down("sm")]: {
            height: 280
        },
    },
    media: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "absolute",
        top: 0,
        left: 0,
        borderRadius: "15px",
    },
    content: {
        "&:hover": {
            opacity: 0.8,
            transform: "translateY(0px)",
            background: "black",
            borderRadius: "15px",
        },
        position: "relative",
        zIndex: 3,
        color: "white",
        opacity: 0,
        transform: "translateY(30px)",
        transition: "0.5s",
        height: "90%",
        display: "flex",
        flexDirection: "column-reverse",
        textAlign: "center",
        justifyContent: "center"
    },
    p: {
        letterSpacing: "1px",
        fontSize: "15px",
        marginTop: "8px",
        color: "white",
        [theme.breakpoints.down("sm")]: {
            fontSize: "12px"
        },
    },
    textP: {
        fontWeight: "bold",
        color: "#DC4E4E"
    },
    title: {
        padding: "2vw",
        textDecoration: "none",
        fontWeight: "500",
        fontSize: "20px",
        color: "#00AFE7"
    }
}));

export default function Combo(props) {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.img}
                        title={props.title}
                    />
                    <CardContent className={classes.content}>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.p}>
                            {props.description}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" style={{ margin: 0 }} className={classes.textP}>
                            {props.sale}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.p}>
                            Giá bán {props.price} sẽ chỉ còn
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <div className={classes.title}>
                {props.title}
            </div>
        </div>
    );
}
