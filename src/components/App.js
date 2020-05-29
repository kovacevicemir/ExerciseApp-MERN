import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./Navbar"
import ExercisesList from "./ExercisesList"
import EditExercise from "./EditExercise"
import CreateExercise from "./CreateExercise"
import CreateUser from "./CreateUser"

class App extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <Navbar />
                        <br/>
                        <Route path="/" exact component={ExercisesList} />
                        <Route path="/edit/:id" exact component={EditExercise} />
                        <Route path="/create" exact component={CreateExercise} />
                        <Route path="/user" exact component={CreateUser} />
                </Router>
            </div>
        )
    }
}

export default App
