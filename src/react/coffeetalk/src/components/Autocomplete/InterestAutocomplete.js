import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { Paper, ThemeProvider, List, Chip, Input, ListItemText, ListItem, Avatar, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem'

const filter = createFilterOptions();

const useStyles = makeStyles((styles) => ({
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
      }
    }))

export default function InterestAutocomplete() {
    const classes = useStyles();
    const [codelanguages, setCodelanguages] = React.useState(
        ['C#',
        'Vue.js',
        'Angular',
        'React',
        'C++',
        'Java',
        'Python']
    )



/*    const createList = () => {
        var returnable = []
        var array = JSON.parse(sessionStorage.getItem("user")).interests
        for (let i = 0; i < array.length; i++) {
            const e = array[i];
            returnable.push({name: e})
        }
        console.log(JSON.parse(sessionStorage.getItem("user")).interests)
        return(returnable)
    }
*/


    const [value, setValue] = React.useState(null);
    const [open, toggleOpen] = React.useState(false);
    const [dialogValue, setDialogValue] = React.useState('');
    const [interests, setInterests] = React.useState([]) //please change, horrible way to do it. send it as parameter to fix
//JSON.parse(sessionStorage.getItem("user")).interests
    const handleClose = () => {
        setDialogValue('');
        toggleOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue(dialogValue);
        const t = codelanguages.length + 1;
        setCodelanguages(codelanguages => [...codelanguages, dialogValue])
        handleClose();
    };

    const handleKeypress = (event) => {
        if(event.key === 'Enter'){
            if(value != null){
            setInterests(interests => [...interests, value])
            var user = JSON.parse(sessionStorage.getItem("user"))
            user.interests = [...interests, value]
            sessionStorage.setItem("user", JSON.stringify(user))
            setValue(null)
            }
        }
        if(interests != undefined){
            if(interests.length > 0){
                console.log([...interests, value]);
            }

        }

    }

    const handleDelete = (data) => {
        var array = [...interests]
        var index = array.indexOf(data)
        if(index !== -1) {
            array.splice(index, 1)
            setInterests(array)
        }
    }

    const renderInterests = () => {
        interests.map((data) => {
            let icon;
            return(
              <li >
                <Chip
                  color={"primary"}
                  onClick={() => handleDelete(data)}
                  variant={"default"}
                  icon={icon}
                  label={data}
                  className={classes.chip}>
                </Chip>
              </li>
            )
          })
    }

    return (
        
        <React.Fragment>
            <GridContainer>
                <GridItem xs={12} sm={12}>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    if(typeof newValue === 'string') {
                        setTimeout(() => {
                            toggleOpen(true);
                            setDialogValue({
                                 interest: newValue
                            }
                            );
                        });
                    } else if (newValue && newValue.inputValue) {
                        toggleOpen(true);
                        setDialogValue({
                            interest: newValue.inputValue
                        }
                        );
                    } else {
                        setValue(newValue);
                    }
                }}
                onKeyPress={handleKeypress}
                filterOptions={(options, params) => {
                    const filtered = filter(options, params);

                    if(params.inputValue !== '') {
                        filtered.push({
                            inputValue: params.inputValue,
                            name: `Add "${params.inputValue}"`
                        });
                    }
                    return filtered;
                }}
                id="dialog picker"
                options={codelanguages}
                getOptionLabel={(option) => {
                    if(typeof option === 'string') {
                        return option;
                    }
                    if(option.inputValue) {
                        return option.inputValue;
                    }
                    return option;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                renderOption={(option) => option.interest}
                style={{width: 300}}
                freeSolo
                renderInput={(params) => (
                    <TextField {...params} label="Interests..." variant="outlined"/>
                )}
                /></GridItem>
                <GridItem xs={12} sm={12}>
                    <Paper component="ul" className={classes.root}>
                    {
                        interests != undefined ? renderInterests() : <label>No interests found</label>
                    }
                  </Paper>
                  </GridItem>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <form onSubmit={handleSubmit}>
                        <DialogTitle id="form-dialog-title">Add a new Interest</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Did you miss any of your interests? Please add it.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                value={dialogValue}
                                onChange={(event) => setDialogValue( ...dialogValue, event.target.value)}
                                label="title"
                                type="text"
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button type="submit" color="primary">
                                Add
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>

            </GridContainer>
        </React.Fragment>
    )
}