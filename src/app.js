import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import authToken from './auth_token';

class App extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: true,
            error: null,
            standings: null,
            teams: null,
            matches: null

        };
    }

    componentDidMount() {
        this.fetchStandings();
        this.fetchTeams();
        this.fetchMatches();
      }

      fetchStandings() {
        fetch(`http://api.football-data.org/v2/competitions/2021/standings`, 
        { 
            headers : {
                'X-Auth-Token': authToken
            }
        } )
          .then(response => response.json())
          .then(data =>
            this.setState({
              standings: data,
              isLoading: false,
            })
          )
          .catch(error => this.setState({ error, isLoading: false }));
      }  

      fetchTeams() {
        fetch(`http://api.football-data.org/v2/competitions/2021/teams`, 
        { 
            headers : {
                'X-Auth-Token': authToken
            }
        } )
          .then(response => response.json())
          .then(data =>
            this.setState({
              teams: data,
              isLoading: false,
            })
          )
          .catch(error => this.setState({ error, isLoading: false }));
      }

      fetchMatches() {
        fetch(`http://api.football-data.org/v2/competitions/2021/matches`, 
        { 
            headers : {
                'X-Auth-Token': authToken
            }
        } )
          .then(response => response.json())
          .then(data =>
            this.setState({
              matches: data,
              isLoading: false,
            })
          )
          .catch(error => this.setState({ error, isLoading: false }));
      }

    render() {
        const { isLoading, userData, error } = this.state
        return (
            <React.Fragment>
                {error ? <p>{error.message}</p> : null}

                {!isLoading ? (
        <p>Map data into a league table here</p>
      // If there is a delay in data, let's let the user know it's loading
      ) : (
        <h3>Loading...</h3>
      )}
            </React.Fragment>
        )
    }

}

export default App;

const wrapper = document.getElementById("create-app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;