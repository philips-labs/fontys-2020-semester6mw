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

import avatar from "assets/img/faces/marc.jpg";
import { Paper, ThemeProvider, List, Chip, Input, ListItemText, ListItem, Avatar, Icon } from "@material-ui/core";
import CardIcon from "components/Card/CardIcon";
import InterestAutocomplete from "components/Autocomplete/InterestAutocomplete";
import CreateProjectDialog from "components/CreateProjectDialog/CreateProjectDialog";
import { number } from "prop-types";

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

export default function UserProfile(props) {
  const classes = useStyles();
  const [projects, setProjects] = React.useState([
    { key: 0, name: 'Project1', description: 'testdescription', dataset: [{ key: 0, label: 'Angular', active: false }, { key: 1, label: 'React', active: false }, { key: 2, label: 'JQuery', active: true }, { key: 3, label: 'Vue.js', active: false }, { key: 4, label: 'C#', active: false }] },
    { key: 1, name: 'Project2', description: 'description 2', dataset: [{ key: 0, label: 'Angular', active: false }, { key: 1, label: 'React', active: false }, { key: 2, label: 'JQuery', active: true }, { key: 3, label: 'Vue.js', active: false }, { key: 4, label: 'C#', active: false }] },
  ])

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

  /*const profile = {
    firstname: 'Alec',
    lastname: 'Thompson',
    description: 'Dont be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...',
    age: 39
  }*/

  const profileUrl = "http://localhost:5000/api/Profile/5fbd179cc96d991f1b9b5052";

  const [profile, setProfile] = React.useState({})

  React.useEffect(() => {
    getProfileWithFetch();
  }, []);

  const getProfileWithFetch = async () => {
    const response = await fetch(profileUrl);
    const jsonData = await response.json();
    setProfile(jsonData);
  };



  const handleNameChange = (event) => {
    newproject.name = event.target.value;
  }

  const handleDescChange = (event) => {
    newproject.description = event.target.value;
  }


  const handleFirstNameChange = (event) => {
    setProfile({ ...profile, firstname: event.target.value })
    setChangesmade(true)
  }

  const handleLastNameChange = (event) => {
    setProfile({ ...profile, lastname: event.target.value })
    setChangesmade(true)
  }

  const handleAgeChange = (event) => {
    setProfile({ ...profile, age: event.target.value })
    setChangesmade(true)
  }

  const handleProfileDescChange = (event) => {
    setProfile({ ...profile, description: event.target.value })
    setChangesmade(true)
  }

  const handleUpdateProfile = () => {
    setChangesmade(false)
  }

  const handleProjectRemove = (key) => {

    projects.splice(key, 1)
    setCount(count + 1)
  }

  const createprojectcallback = (project) => {
    console.log(project)
    projects.push(project);
    setCount(count + 1)
  }
  
  const RenderChangesmade = () => {
    if(changesmade){
      return(
        <Alert severity="warning">You have unsaved changes</Alert>
      )
    }
  }

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
                      value: profile.firstName
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
                      value: profile.lastName
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
                      value: profile.age,
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
                      value: profile.description
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
                <InterestAutocomplete></InterestAutocomplete>
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
              <h4 className={classes.cardTitle}>{profile.firstName} {profile.lastName}</h4>
              <p>Age: {profile.age}</p>
              <p className={classes.description}>
                {profile.description}
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
                    projects.map((project) => {
                      return (
                        <ListItem>
                          <GridItem xs={12} md={11}>
                            <ListItemText
                              primary={project.name}
                              secondary={project.description}
                            >
                            </ListItemText>
                          </GridItem>
                          <GridItem xs={12} md={1}>
                            <DeleteForeverIcon onClick={() => handleProjectRemove(project.key)}></DeleteForeverIcon>
                          </GridItem>
                        </ListItem>
                      )
                    })
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
  );
}
