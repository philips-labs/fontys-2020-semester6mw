import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const filter = createFilterOptions();

export default function InterestAutocomplete() {
    const [codelanguages, setCodelanguages] = React.useState(
        [{name: 'C#'},
        {name: 'Vue.js'},
        {name: 'Angular'},
        {name: 'React'},
        {name: 'C++'},
        {name: 'Java'},
        {name: 'Python'}]
    )





    const [value, setValue] = React.useState(null);
    const [open, toggleOpen] = React.useState(false);
    const [dialogValue, setDialogValue] = React.useState({name:''});

    const handleClose = () => {
        setDialogValue({
            name:''
        });
        toggleOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue({
            name: dialogValue.name
        });
        console.log(dialogValue.name)
        setCodelanguages(codelanguages => {
            const list = codelanguages.concat(dialogValue.name);
            return {
                list
            };
        });
        console.log(codelanguages);
        handleClose();
    };

    return (
        <React.Fragment>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    if(typeof newValue === 'string') {
                        setTimeout(() => {
                            toggleOpen(true);
                            setDialogValue({
                                name: newValue
                            });
                        });
                    } else if (newValue && newValue.inputValue) {
                        toggleOpen(true);
                        setDialogValue({
                            name: newValue.inputValue
                        });
                    } else {
                        setValue(newValue);
                    }
                }}
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
                    return option.name;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                renderOption={(option) => option.name}
                style={{width: 300}}
                freeSolo
                renderInput={(params) => (
                    <TextField {...params} label="Interests..." variant="outlined"/>
                )}
                />
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <form onSubmit={handleSubmit}>
                        <DialogTitle id="form-dialog-title">Add a new Language</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Did you miss any coding language or framework? Please add it.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                value={dialogValue.name}
                                onChange={(event) => setDialogValue({ ...dialogValue, name: event.target.value})}
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
        </React.Fragment>
    )
}