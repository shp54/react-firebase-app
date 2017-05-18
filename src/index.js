import React from 'react'
import ReactDOM from 'react-dom'
import * as firebase from 'firebase'
import config from './config'
import App from './App'
import './index.css'

// Initialize Firebase
firebase.initializeApp(config)
const database = firebase.database()

//Sign into Firebase and kickoff the app
firebase.auth().signInAnonymously().catch((error) => {
  console.log(`Error Code ${error.code} - $error.message`)
});


firebase.auth().onAuthStateChanged((user) => {
	database.ref('/nodes').on('value', (snapshot) => {
		let data = snapshot.val()
		let nodeList = []
		for(let key in data){ 
			nodeList.push({name: key, data: data[key]})
		}
		ReactDOM.render(
		  <App nodes={nodeList}/>,
		  document.getElementById('root')
		)	
	})
});

