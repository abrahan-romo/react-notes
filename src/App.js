import React from 'react';
// material ui
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// notes components
import NotesForm from "./NotesForm";
import NotesList from "./NotesList";
import Home from "./Home";
import Note from "./Note";

import { Link, Route} from "react-router-dom";



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
                        <NotesList notes={this.state.notes} />
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
                            render={props => <Note {...props} notes={this.state.notes} /> }
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


