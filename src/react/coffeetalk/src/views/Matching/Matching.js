import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import Communication from "Communication"

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { ListItem, ListItemText, List } from "@material-ui/core";
import Button from "components/CustomButtons/Button.js";
import MatchDialog from "components/MatchDialog/MatchDialog";

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
        boxShadow: 3,
    },
    image: {
        maxWidth: 200,
        maxHeight: 200,
    },

}));




/*    {interests: ["C#", "Vue.js"], projects: ["React frontend project", "Productivity increasing software"]},
    {interests: ["C#","Java", "Vue.js"], projects: ["Angular testing component", "Hardware limit tester"]},
    {interests: ["Java", "Vue.js"], projects: ["generic project 1", "generic project 2"]},
    {interests: ["React", "Angular"], projects: ["generic project 3", "generic project 4"]},*/







export default function Matching() {

    const classes = useStyles();
    const com = new Communication();


    const [hardcodedMatch, sethardcodedmatch] = React.useState({firstname: "Mark",
        lastname: "Veltman",
        age: "24",
        description: "description",
        interests: ["React", "C#"]})
    
    const hmmark = {
        firstname: "Mark",
        lastname: "Veltman",
        age: "24",
        description: "description",
        interests: ["React", "C#"]
    }
    const hmfriso = {
        firstname: "Friso",
        lastname: "Westenbrink",
        age: "23",
        description: "description",
        interests: ["Java", "Vue.js"]
    }




    const [hardcodedMatchedInterests, sethardcodedinterests] = React.useState([{ interests: ["C#", "Vue.js"], projects: [{ name: "React frontend project", desc: "A react frontend application that was used in order to learn the react framework. this application is purely for testing purposes" }, { name: "Productivity increasing software", desc: "this software will allow its user to massively increase its productivity. How does it manage to do this? its an agenda." }] },
    { interests: ["C#", "Java", "Vue.js"], projects: [{ name: "Angular testing component", desc: "This component allows the user to test any angular based application for compiler errors. not very usefull." }, { name: "Hardware limit tester", desc: "it tests the limit of a piece of hardware. The clue is in the name." }] },
    { interests: ["React", "C#"], projects: [{ name: "testproject1", desc: "testproject1" }, { name: "testproject2", desc: "testproject2" }] }])
    const hardcodedPotentialMatchesmark = [
        { interests: ["C#", "Vue.js"], projects: [{ name: "React frontend project", desc: "A react frontend application that was used in order to learn the react framework. this application is purely for testing purposes" }, { name: "Productivity increasing software", desc: "this software will allow its user to massively increase its productivity. How does it manage to do this? its an agenda." }] },
        { interests: ["C#", "Java", "Vue.js"], projects: [{ name: "Angular testing component", desc: "This component allows the user to test any angular based application for compiler errors. not very usefull." }, { name: "Hardware limit tester", desc: "it tests the limit of a piece of hardware. The clue is in the name." }] },
        { interests: ["React", "C#"], projects: [{ name: "testproject1", desc: "testproject1" }, { name: "testproject2", desc: "testproject2" }] },
    ]
    
    const hardcodedPotentialMatchesFriso = [
        { interests: ["C#", "Vue.js"], projects: [{ name: "React frontend project", desc: "A react frontend application that was used in order to learn the react framework. this application is purely for testing purposes" }, { name: "Productivity increasing software", desc: "this software will allow its user to massively increase its productivity. How does it manage to do this? its an agenda." }] },
        { interests: ["C#", "Java", "Vue.js"], projects: [{ name: "Angular testing component", desc: "This component allows the user to test any angular based application for compiler errors. not very usefull." }, { name: "Hardware limit tester", desc: "it tests the limit of a piece of hardware. The clue is in the name." }] },
        { interests: ["Java", "Vue.js"], projects: [{ name: "testproject1", desc: "testproject1" }, { name: "testproject2", desc: "testproject2" }] },
    ]



    const [op, setopen] = React.useState(false);


    const handleKey = (event) => {
        if(event.key === 'z'){
            sethardcodedmatch(hmmark);
            sethardcodedinterests(hardcodedPotentialMatchesmark);
        }
        if(event.key === 'x'){
            sethardcodedmatch(hmfriso);
            sethardcodedinterests(hardcodedPotentialMatchesFriso);
        }
        if(event.key === 'v'){
            setopen(true);
            setCount(count + 1);
        }
    }


    const RetrieveNextMatch = () => {
        if (hardcodedMatchedInterests.length < 1) {
            return (
                <div>
                    <label>No more matches were found</label>
                </div>
            )
        } else {
            var mat = hardcodedMatchedInterests[0]
            return (
                <div >
                    <GridContainer >
                        <GridItem xs={12} sm={12} md={6}>
                            <h4>Professional interests</h4>
                            <List className={classes.listroot}>
                                {
                                    mat.interests.map((interest) => {
                                        return (
                                            <ListItem>
                                                <ListItemText
                                                    primary={interest}>

                                                </ListItemText>
                                            </ListItem>
                                        )
                                    })
                                }
                            </List>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                            <h4>Projects</h4>
                            <List>
                                {
                                    mat.projects.map((project) => {
                                        return (
                                            <ListItem>
                                                <ListItemText
                                                    primary={project.name} secondary={project.desc}>

                                                </ListItemText>
                                            </ListItem>
                                        )
                                    })
                                }
                            </List>
                        </GridItem>
                    </GridContainer>
                </div>
            )
        }
    }

    const RejectMatch = () => {
        hardcodedMatchedInterests.splice(0, 1)
        setCount(count + 1)
    }

    const AcceptMatch = () => {
        hardcodedMatchedInterests.splice(0, 1)
        setCount(count + 1)
    }

    const [count, setCount] = React.useState(0);
    return (
        <div onKeyPress={handleKey}>

            <GridContainer>
                <MatchDialog open={op} match={hardcodedMatch} matchinterests={hardcodedMatchedInterests}></MatchDialog>
            </GridContainer>
            <GridContainer>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Potential matches</h4>
                        <p className={classes.cardCategoryWhite}>These matches were found based on your professional interests and projects</p>
                    </CardHeader>
                    <CardBody>
                        {RetrieveNextMatch()}
                    </CardBody>
                    <CardFooter>
                        <GridContainer>
                            <GridItem md={6}>
                                <Button color="primary" onClick={AcceptMatch}>Match</Button>
                            </GridItem>
                            <GridItem md={6}>
                                <Button color="primary" onClick={RejectMatch}>Uninterested</Button>
                            </GridItem>
                        </GridContainer>
                    </CardFooter>
                </Card>
            </GridContainer>
        </div>
    );
}