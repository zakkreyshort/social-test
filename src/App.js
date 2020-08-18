import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';

class App extends Component {

  // Downloads oauth.js from CDN, pretty much like adding external scripts
  componentDidMount () {
    const oauthScript = document.createElement("script");
    oauthScript.src = "https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js";

    document.body.appendChild(oauthScript);
  }

  handleClick(e) {
    // Prevents page reload
    e.preventDefault();

    // Initializes OAuth.io with API key
    // Sign-up an account to get one
    window.OAuth.initialize('BTfcjv51Sd9sJJrfLVp8QyIBZUM');

    // Popup Github and ask for authorization
    window.OAuth.popup('github').then((provider) => {

      // Prompts 'welcome' message with User's name on successful login
      // Check console logs for additional User info
      provider.me().then((data) => {
        console.log("data: ", data);
        alert("Welcome " + data.name + "!");
      });

      // You can also call Github's API using .get()
      provider.get('/user').then((data) => {
         console.log('self data:', data);
      });

    });
  }

  render() {
    return <a href="" onClick={this.handleClick.bind(this)} className="btn btn-social btn-github">
             <span className="fa fa-github"></span> Sign in with Github
           </a>;
  }
}

export default App;
