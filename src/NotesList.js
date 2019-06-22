import React from "react";


import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

const NotesList = ({notes}) => {
    return(
        
            <List>

                { notes.length ? (
                    notes.map((note, index) => (
                                     
                    <ListItem key={index} button component={Link} to={`/view/${note.id}`}>
                    <ListItemText primary={note.title} />
                    <ListItemSecondaryAction>
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                    </ListItem>
                )))
            : (
                <Typography align="center" variant="subtitle1">
                    No notes yet...
                </Typography>
            )}
            </List>
        
    );
};





export default NotesList;