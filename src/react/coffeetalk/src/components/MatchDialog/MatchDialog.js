import React from 'react';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import InterestAutocomplete from 'components/Autocomplete/InterestAutocomplete';
import avatar from "assets/img/faces/marc.jpg";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((styles) => ({
    cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none"
    },
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: styles.spacing(0.5),
      margin: 0,
    },
    chip: {
      margin: styles.spacing(0.5),
    },
    listroot: {
      width: '100%',
      maxWidth: 3600,
      backgroundColor: styles.palette.background.paper,
    },
    image: {
      maxWidth: 200,
      maxHeight: 200,
    },
  }));

export default function MatchDialog(props) {


    const classes = useStyles();
    const [open, toggleOpen] = React.useState(props.open);
    const [match, setMatch] = React.useState(props.match);

    const handleClose = () => {

        console.log(props)
        toggleOpen(false);
    }

    const handleSubmit = (event) => {
        console.log("submitting")
    }

    const handleKeyPress = (event) => {
        if(event.key === 'v'){
            toggleOpen(true);
        }
    }

    const handleClick = () => {
            toggleOpen(true);
    }



    return (
        <div onKeyPress={handleKeyPress}>
           <label onClick={handleClick}>.</label>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <form onSubmit={e => e.preventDefault()}>
                    <DialogTitle id="form-dialog-title">You have matched!</DialogTitle>
                    <DialogContent>
                        <br/>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <Card profile>
                                    <CardAvatar profile>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <img src={avatar} alt="..." />
                                        </a>
                                    </CardAvatar>
                                    <CardBody profile>
                                        <h4 className={classes.cardTitle}>{props.match.firstname} {props.match.lastname}</h4>
                                        <p>Age: {props.match.age}</p>
                                        <p className={classes.description}>
                                            {props.match.description}
                                        </p>
                                    </CardBody>
                                </Card>
                            </GridItem>
                        </GridContainer>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleSubmit} color="primary">
                            Start chatting
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )
}