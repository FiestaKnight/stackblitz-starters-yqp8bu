import React, { Component } from "react";

class Four extends Component {

      constructor(props) {
        super(props) 

          this.state = {
            firstname: '',
            lastname: '',
            email: ''

          }
        }

      handleFirstnameChange = (event) => {
        this.setState({
          firstname: event.target.value,
        })

      }

      handleLastnameChange = (event) => {
        this.setState({
          lastname: event.target.value,
        })
      }

      handleEmailChange = (event) => {
        this.setState({
          email: event.target.value,
        })
      }

      handleSubmit = event => {
        alert(`${this.state.firstname} ${this.state.lastname}, ${this.state.email}`)
        event.preventDefault()
      }


    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>First Name: </label>
            <input type='text' value={this.state.firstname} 
            onChange={this.handleFirstnameChange} 
            />
          </div>
          <div>
            <label>Last Name: </label>
            <input type='text' value={this.state.lastname}
            onChange={this.handleLastnameChange}
            />
          </div>
          <div>
            <label>Email: </label>
            <input type='email' value={this.state.email}
            onChange={this.handleEmailChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )
    }

}

export default Four;
