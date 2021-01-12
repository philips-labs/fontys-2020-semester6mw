import apiconfig from "APIconfig";

export default class Communication {


    constructor(){
        this.base = apiconfig.baseroute;
    }

    loginUser = async( firstname, lastname, callback) => {
        const response = await fetch(this.base + "api/Profile/getprofile?firstname=" + firstname + "&lastname=" + lastname)
        const jsonData = await response.json();
        callback(jsonData);
    }

    registerUser = async(profile, callback) => {
        const response = await fetch(this.base + "api/Profile", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(profile),
        });
        if(response.status == 200){
            this.loginUser(profile.FirstName, profile.LastName, callback)
        }
    }

    retrieveUsers = async(callback) => {
        const response = await fetch(this.base + "api/Profile/getlast2", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        if(response.status == 200){
            callback(await response.json());
        }
    }

    updateInterests = async(id, interests) => {
        const response = await fetch(this.base + "api/Profile/updateinterests", {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({id, interests}),
        });
        if(response.status == 200){

        }else{
            console.log("Error, response was not 200");
        }
    }

    updateUser = async(user) => {
        const craftbody = {Id: user.id, FirstName: user.firstName, LastName: user.lastName, Age: user.age.toString(), Description: user.description}

        const response = await fetch(this.base + "api/Profile/updateprofile", {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(craftbody),
        });
        if(response.status == 200){

        }else{
            console.log("Error, response was not 200");
        }

    }


}