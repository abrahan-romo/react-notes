import React from 'react';
import axios from 'axios';
// material ui
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// notes components
import NotesForm from "./NotesForm";
import NotesList from "./NotesList";
import Home from "./Home";
import Note from "./Note";

import { Link, Route, Redirect} from "react-router-dom";



import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            notes: [/*
                {
                    title: "Some Title",
                    description: "Some description"
                }*/
            ]
        };
    }

    componentDidMount() {
        axios.get("/notes.json").then(response => {
            console.log(response.data);
            this.setState({notes: response.data});
        })
        .catch(e => console.log( `Unable to fetch data: ${e}`));
    }

    updateField = field => e => {
        this.setState(
            {
                [field]: e.target.value
            }
        );
    };

    saveNote = () => {
        if(this.state.title && this.state.description) {
            this.setState({ 
                title: "",
                description: "",
                
                notes:[
                ...this.state.notes, 
                { 
                    id: Date.now(),
                    title: this.state.title,
                    description: this.state.description
                }
              ],
              
            });
          }
    };

    /*saveTodo = () => {
        if(this.state.value) {
          this.setState({ 
            todos:[
              ...this.state.todos, 
              { value: this.state.value, completed: false}
            ],
            value: ""
          });
        }
      };
*/
    

    updateValue = event => {
        console.log(event.target);
        //this.state.value = inputValue;  NEVER
        if(event.target==="title")
        {
            this.setState({title: event.target.value});
        }
        else if (event.target==="description")
        {
            this.setState({description: event.target.value});
        }   
    };

    updateValue2 = event => {
        console.log(event.target);
        //this.state.value = inputValue;  NEVER
        if(event.target==="title")
        {
            this.setState({title: event.target.value});
        }
        else if (event.target==="description")
        {
            this.setState({description: event.target.value});
        }   
    };

    deleteNote = id => {
    this.setState({
        notes: this.state.notes.filter(note => note.id !== id)
    });
    };

    filterNote = id => {
        return this.state.notes.filter(note => note.id === parseInt(id)) [0];
    };

    //console.log("los props going out " + props);


  

    render() {
        console.log(this.state);
        return (
            <React.Fragment>
                <Typography align ="center" variant="h2" gutterBottom>
                    My Notes
                </Typography>

                <Link to="/home">
                    Home    
                </Link>
                <Link to="/about-us">
                    about Us    
                </Link>
                <Link to="/Contact">
                    Contact    
                </Link>
                
                <a href="/home">Home</a>

                <Grid container justify='center' spacing={2}>
                    
                    <Grid item xs = {4}>
                        <NotesList notes={this.state.notes} deleteNote={this.deleteNote}/>
                    </Grid>    


                    <Grid item xs={8}>

                        <Route exact path="/" component = {Home} />
                        <Route 
                            path = "/new" 
                            render = {() => (

                       
                        <NotesForm
                            title={this.state.title}
                            description={this.state.description}
                            updateField={this.updateField}
                            saveNote={this.saveNote}
                            
                            />
                            )}
                            />
        
                        <Route 
                            path="/view/:id" 
                            render={ props => {
                                const note = this.filterNote(props.match.params.id);
                                return note ? <Note note = {note} /> : <Redirect to="/" />
                            }}
                        />                                

                    </Grid>
                </Grid>

                <Fab color="primary" component={Link} to="/new">
                    <AddIcon />

                   
                </Fab>
            </React.Fragment>
        );
     }
  }
    
export default App;



///////////////////////////////////////////////////////////////////////////////////

////// closures && Currying


