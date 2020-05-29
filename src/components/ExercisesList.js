import React, { Component } from 'react'
import Axios from 'axios'
import Exercise from './Exercise'

export default class ExercisesList extends Component {
    constructor(props){
        super(props)
        this.state = {
            exercises: []
        }
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/exercises')
            .then(res =>{
                this.setState({exercises:res.data})
            })
            .catch((error) => console.log(error))
    }

    onDelete = (id) =>{
        Axios.delete('http://localhost:5000/exercises/'+id)
            .then(res=> console.log(res.data))
        this.setState({
            exercises:this.state.filter(el => el._id !== id)
        })
    }

    exerciseList = () => {
        return this.state.exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} delete={this.onDelete} key={currentexercise._id}/>
        })
    }

    render() {
        return (
            <div>
            <h3>Logged Exercises</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Username</th>
                  <th>Description</th>
                  <th>Duration</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                { this.exerciseList() }
              </tbody>
            </table>
          </div>
        )
    }
}
