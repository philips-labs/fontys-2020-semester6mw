import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Autocomplete, { Alert } from '@material-ui/lab'
import Snackbar from '@material-ui/core/Snackbar';
import Communication from "Communication"

import avatar from "assets/img/faces/marc.jpg";
import { Paper, ThemeProvider, List, Chip, Input, ListItemText, ListItem, Avatar, Icon } from "@material-ui/core";
import CardIcon from "components/Card/CardIcon";
import InterestAutocomplete from "components/Autocomplete/Autocomplete2.js";
import CreateProjectDialog from "components/CreateProjectDialog/CreateProjectDialog";
import { number } from "prop-types";
import apiconfig from "APIconfig";

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
  chip: {

  }
}));

export default function UserProfile(props) {
  const classes = useStyles();
  const com = new Communication();
  const [projects, setProjects] = React.useState([])


  const [count, setCount] = React.useState(0);

  const [changesmade, setChangesmade] = React.useState(false);

  /*const newproject = {
    name: 'p',
    description: 'd',
    dataset: []
  }*/

  const [newproject, setNewproject] = React.useState({
    name: 'p',
    description: 'd',
    dataset: []
  })

  const [interests, setInterests] = React.useState([])

  const [user, setUser] = React.useState(JSON.parse(sessionStorage.getItem("user")))

  const handleNameChange = (event) => {
    newproject.name = event.target.value;
  }

  const handleDescChange = (event) => {
    newproject.description = event.target.value;
  }

  const handleInterestsCallback = (value) => {
    console.log(value);
    setInterests(interests.concat(value));
    setCount(count + 1)
  }

  const handleFirstNameChange = (event) => {
    setUser({ ...user, firstName: event.target.value })
    setChangesmade(true)
  }

  const handleLastNameChange = (event) => {
    setUser({ ...user, lastName: event.target.value })
    setChangesmade(true)
  }

  const handleAgeChange = (event) => {
    setUser({ ...user, age: event.target.value })
    setChangesmade(true)
  }

  const handleProfileDescChange = (event) => {
    console.log(event)
    setUser({ ...user, description: event.target.value })
    setChangesmade(true)
  }

  const handleUpdateProfile = () => {
    com.updateUser(user)
    com.updateInterests(user.id, JSON.parse(sessionStorage.getItem("user")).interests)
    setChangesmade(false)
  }

  const handleProjectRemove = (key) => {
    var array = [...projects];
    var index = array.indexOf(key);
    array.splice(index, 1);
    setProjects(array);
  }

  const handleDeleteInterest = (data) => {
    var array = [...interests];
    var index = array.indexOf(data);
    console.log(index + "  " + array);
    if (index !== -1) {
      setInterests(array.splice(index, 1))
    }
  }

  const createprojectcallback = (project) => {
    console.log(project)
    setProjects(projects.concat(project))
    setCount(count + 1)
  }

  const RenderChangesmade = () => {
    if (changesmade) {
      return (
        <Alert severity="warning">You have unsaved changes</Alert>
      )
    }
  }




  const renderInterests = () => {
    return (
      interests.map((data) =>
          <Chip
            color={"primary"}
            onClick={() => handleDeleteInterest(data)}
            variant={"default"}
            label={data.language}
            className={classes.chip}>
          </Chip>
      ))
  }

  const renderProjects = () => {
    return(
      projects.map((project) => (
        <ListItem>
          <GridItem xs={12} md={11}>
            <ListItemText
              primary={project.projectName}
              secondary={project.projectDescription}
            >
            </ListItemText>
          </GridItem>
          <GridItem xs={12} md={1}>
            <DeleteForeverIcon onClick={() => handleProjectRemove(project)}></DeleteForeverIcon>
          </GridItem>
        </ListItem>
      ))
    )
  }


  const renderProfile = () => {

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                <p className={classes.cardCategoryWhite}>Complete your profile</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="First Name"

                      id="first-name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: handleFirstNameChange,
                        value: user.firstName
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Last Name"
                      id="last-name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: handleLastNameChange,
                        value: user.lastName
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Age"
                      id="age"
                      formControlProps={{
                        fullWidth: false
                      }}
                      inputProps={{
                        onChange: handleAgeChange,
                        value: user.age,
                        type: "number"
                      }}
                    />
                  </GridItem>

                </GridContainer>
                <GridContainer>
                  <GridItem xs={12}>
                    <CustomInput
                      labelText="Profile description"
                      id="profiledescription"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 3,
                        onChange: handleProfileDescChange,
                        value: user.description
                      }}
                    >
                    </CustomInput>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12}>
                    <h4>Professional interests</h4>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12}>
                    <InterestAutocomplete callback={handleInterestsCallback}></InterestAutocomplete>
                  </GridItem>
                  <GridItem>
                    <Paper component="ul">
                      {renderInterests()}
                    </Paper>
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary" onClick={() => handleUpdateProfile()}>Update Profile</Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h4 className={classes.cardTitle}>{user.firstName} {user.lastName}</h4>
                <p>Age: {user.age}</p>
                <p className={classes.description}>
                  {user.description}
                </p>
              </CardBody>
              <CardFooter>

              </CardFooter>
            </Card>
            {RenderChangesmade()}
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Edit Projects</h4>
                <p className={classes.cardCategoryWhite}>Edit or remove projects</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <List className={classes.listroot}>
                    {
                      projects.length != 0 ? renderProjects() : <label>No projects found</label>
                    }
                  </List>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <CreateProjectDialog submitcallback={createprojectcallback}></CreateProjectDialog>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    )
  }

  const renderNoLogin = () => {
    return (<div>
      <h3>
        Please login first.
      </h3>
    </div>
    );
  }

  return (
    <div>
      {
        user !== null ? renderProfile() : renderNoLogin()
      }
    </div>
  );
}
