import React from 'react';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from 'components/CustomButtons/Button.js'
import CustomInput from "components/CustomInput/CustomInput.js";
import InterestAutocomplete from 'components/Autocomplete/Autocomplete2.js';

export default function CreateProjectDialog(props){

    const [open, toggleOpen] = React.useState(false);
    const [project, setProject] = React.useState({
        projectName: "",
        projectDescription: "",
        interests: []
    });

    const handleClose = () => {
        console.log(project)
        toggleOpen(false);
    }

    const handleSubmit = (event) => {
        console.log(project)
        props.submitcallback(project)
        toggleOpen(false);
    }
    
    const interestCallback = (interest) => {
        var inter = project.interests;
        inter.push(interest)
        setProject({...project, interests: inter})
    }

    return(
        <div>
            <Button color="primary" onClick={() => toggleOpen(true)}>Create project</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <form onSubmit={e => e.preventDefault()}>
                    <DialogTitle id="form-dialog-title">Create a new project</DialogTitle>
                    <DialogContent>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={4}>
                                <CustomInput
                                    labelText="Project name"
                                    id="projectname"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                    inputProps={{
                                    onChange: (event) => setProject({...project, projectName: event.target.value})
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
                                    rows: 4,
                                    onChange: (event) => setProject({...project, projectDescription: event.target.value})
                                    }}
                                ></CustomInput>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={8}/>
                            <GridItem xs={12} sm={12} md={8}>
                                <InterestAutocomplete callback={interestCallback}></InterestAutocomplete>
                            </GridItem>
                        </GridContainer>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleSubmit} color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )
}