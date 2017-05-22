import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as firebase from 'firebase'
import firebaseDB from './db/db'
import store from './reducers'
import App from './App'
import './index.css'

//Sign into Firebase and kickoff the app
firebase.auth().signInAnonymously().catch((error) => {
  console.log(`Error Code ${error.code} - $error.message`)
})

firebase.auth().onAuthStateChanged((user) => {
	//Populate Redux store from Firebase every time Firebase values change
	firebaseDB.database().ref('/nodes').on('value', (snapshot) => {
		let data = snapshot.val()
		let nodeList = []
		for(let key in data){
			nodeList.push({name: key, data: data[key]})
		}
		store.dispatch({
			type: 'ADD_NODES',
			data: nodeList
		})
	})
})

ReactDOM.render(
  <Provider store={store}>
	<App />
  </Provider>,
  document.getElementById('root')
)	
