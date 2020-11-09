import React from "react";
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
import Autocomplete from '@material-ui/lab'


import avatar from "assets/img/faces/marc.jpg";
import { Paper, ThemeProvider, List, Chip, Input, ListItemText, ListItem, Avatar, Icon } from "@material-ui/core";
import CardIcon from "components/Card/CardIcon";
import InterestAutocomplete from "components/Autocomplete/InterestAutocomplete";

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

export default function UserProfile() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    {key: 0, label: 'Angular', active: false},
    {key: 1, label: 'React', active: false},
    {key: 2, label: 'JQuery', active: true},
    {key: 3, label: 'Vue.js', active: false},
    {key: 4, label: 'C#', active: false},
  ]);

  const [projects, setProjects] = React.useState([
    {key: 0, name: 'Project1', description: 'testdescription', dataset: [{key: 0, label: 'Angular', active: false},{key: 1, label: 'React', active: false},{key: 2, label: 'JQuery', active: true},{key: 3, label: 'Vue.js', active: false},{key: 4, label: 'C#', active: false}]},
    {key: 1, name: 'Project2', description: 'description 2', dataset: [{key: 0, label: 'Angular', active: false},{key: 1, label: 'React', active: false},{key: 2, label: 'JQuery', active: true},{key: 3, label: 'Vue.js', active: false},{key: 4, label: 'C#', active: false}]},
    ])

  const [count, setCount] = React.useState(0);

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

  const [profile, setProfile] = React.useState({
    firstname: 'Alec',
    lastname: 'Thompson',
    description: 'Dont be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...',
    age: 39
  })

  const handleClick = (c) => {
    chipData[c].active = !chipData[c].active
    setCount(count + 1)
  }

  const handleNameChange = (event) => {
    newproject.name = event.target.value;
  }

  const handleDescChange = (event) => {
    newproject.description = event.target.value;
  }

  const handleNewProjectClick = () => {
    projects.push(newproject);
    setCount(count + 1)
  }

  const handleFirstNameChange = (event) => {
    profile.firstname = event.target.value;
    console.log(profile);
  }

  const handleLastNameChange = (event) => {
    profile.lastname = event.target.value;
  }

  const handleAgeChange = (event) => {
    profile.age = event.target.value;
  }

  const handleProfileDescChange = (event) => {
    profile.description = event.target.value;
  }

  const handleUpdateProfile = () => {
    setCount(count + 1)
    console.log(profile)
  }

  const handleProjectRemove = (key) => {
    
    projects.splice(key, 1)
    setCount(count + 1)
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
                      onChange: handleFirstNameChange
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
                      onChange: handleLastNameChange
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
                      onChange: handleAgeChange
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <br/>
                <CardIcon profile>
                    <img className={classes.image} src={avatar}/>
                  </CardIcon>
                  {/*<Button color="primary">Change profile picture</Button>*/}
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem>
                  <CustomInput
                      labelText="Profile description"
                      id="profiledescription"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                        onChange: handleProfileDescChange
                      }}
                      >
                    </CustomInput>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <h4>Professional interests</h4>
              </GridContainer>
              <GridContainer>
                <InterestAutocomplete></InterestAutocomplete>
              </GridContainer>
              <GridContainer>
              <Paper component="ul" className={classes.root}>
                    {chipData.map((data) => {
                      let icon;
                      return(
                        <li key={data.key}>
                          <Chip
                            color={"primary"}
                            onClick={() => handleClick(data.key)}
                            variant={data.active ? "default" : "outlined"}
                            icon={icon}
                            label={data.label}
                            className={classes.chip}>
                          </Chip>
                        </li>
                      )
                    })}
                  </Paper>
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
              <h4 className={classes.cardTitle}>{profile.firstname} {profile.lastname}</h4>
              <p>Age: {profile.age}</p>
              <p className={classes.description}>
                {profile.description}
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
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
                    return(
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

            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Add Project</h4>
            </CardHeader>
            <CardBody>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Project name"
                    id="projectname"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: handleNameChange
                    }}
                  ></CustomInput>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}></GridItem>
                <GridItem xs={12} sm={12} md={8}>
                  <CustomInput
                    labelText="Project description"
                    id="projectdescription"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                      onChange: handleDescChange
                    }}
                    >
                  </CustomInput>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}></GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Paper component="ul" className={classes.root}>
                    {chipData.map((data) => {
                      let icon;
                      return(
                        <li key={data.key}>
                          <Chip
                            color={"primary"}
                            onClick={() => handleClick(data.key)}
                            variant={data.active ? "default" : "outlined"}
                            icon={icon}
                            label={data.label}
                            className={classes.chip}>
                          </Chip>
                        </li>
                      )
                    })}
                  </Paper>
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={() => handleNewProjectClick()}>Add project</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
