import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";


import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput";
import Communication from "Communication";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(styles);
const com = new Communication()

export default function Login() {
    const classes = useStyles();

    const [login, setLogin] = React.useState(true);

    const [profile, setProfile] = React.useState({});
    const [loggedin, setLoggedin] = React.useState(false);

    const handleLogin = () => {
        com.loginUser(profile.FirstName, profile.LastName, handleLoginCallback)
    }
    const handleLoginCallback = (data) => {
        sessionStorage.setItem("user", JSON.stringify(data));
        console.log(JSON.parse(sessionStorage.getItem("user")));
        setLoggedin(true);
    }

    const handleRegister = () => {
        com.registerUser(profile, handleLoginCallback);
    }

    const getlogin = () => {
        return (<div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                    <Card color="primary">
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Login</h4>
                            <p className={classes.cardCategoryWhite}>Please fill in your login details</p>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={8}>
                                    <CustomInput
                                        labelText="First Name"
                                        id="first-name"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            onChange: (event) => { setProfile({ ...profile, FirstName: event.target.value }) },
                                            value: profile.firstname
                                        }}
                                    />

                                </GridItem>
                                <GridItem xs={12} sm={12} md={8}>
                                    <CustomInput
                                        labelText="Password"
                                        id="Password"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            onChange: (event) => { setProfile({ ...profile, LastName: event.target.value }) },
                                            value: profile.lastname
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Button onClick={() => handleLogin()} color="primary">Login</Button> <Button onClick={() => setLogin(false)} color="primary">Switch to registration</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>)
    }

    const getRegister = () => {
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={8}>
                        <Card color="primary">
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>Register</h4>
                                <p className={classes.cardCategoryWhite}>Please fill in your details</p>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={8}>
                                        <CustomInput
                                            labelText="first name"
                                            id="first-name"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                onChange: (event) => { setProfile({ ...profile, FirstName: event.target.value }) },
                                                value: profile.firstname
                                            }}
                                        />
                                    </GridItem >
                                    <GridItem xs={12} sm={12} md={8}>
                                        <CustomInput
                                            labelText="password"
                                            id="last-name"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                onChange: (event) => { setProfile({ ...profile, LastName: event.target.value }) },
                                                value: profile.lastname
                                            }}
                                        />
                                    </GridItem >
                                    <GridItem xs={12} sm={12} md={8}>
                                        <CustomInput
                                            labelText="age"
                                            id="age"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                            onChange: (event) => { setProfile({ ...profile, Age: event.target.value }) },
                                                value: profile.age,
                                                type: "number"
                                            }}
                                        />
                                    </GridItem >
                                    <GridItem xs={12} sm={12} md={8}>
                                        <CustomInput
                                            labelText="description"
                                            id="description"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                onChange: (event) => { setProfile({ ...profile, Description: event.target.value }) },
                                                value: profile.description
                                            }}
                                        />
                                    </GridItem >
                                </GridContainer>
                            </CardBody>
                            <CardFooter>
                                <Button onClick={() => handleRegister()} color="primary">Register</Button> <Button onClick={() => setLogin(true)} color="primary">Switch to login</Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>)
    }

    return (
        <div>
            {
                login ? getlogin() : getRegister()
            }
            {
                loggedin ? <Redirect to='/user'></Redirect> : <div/>
            }
        </div>
    );
}
