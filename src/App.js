import React, { Component } from 'react'
import "./App.css"

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {response:[]
       
    }
  }
  getData=async()=>
{
 const response = await fetch ("https://api.github.com/users")
 const convertData = await response.json()
 console.log(convertData)
this.setState({response:convertData})
}
  
  render() {
    return (
      <div>
        <button onClick={this.getData}>Get data</button>
        {this.state.response.map((details)=>
        {
          return(
            <div>
              <h1>{details.login}</h1>
          <img src={details.avatar_url}/>
          </div>

          )
          
        }
        )}
      </div>
    )
  }
}
