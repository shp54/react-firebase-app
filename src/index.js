import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as firebase from 'firebase'
import firebaseDB from './db/db'
import store from './reducers'
import App from './components/App'
import './index.css'

//Sign into Firebase and kickoff the app
const db = firebaseDB.database()

firebase.auth().signInAnonymously().catch((error) => {
  console.log(`Error Code ${error.code} - $error.message`)
})

firebase.auth().onAuthStateChanged((user) => {
	//Populate Redux store from Firebase every time Firebase values change
	db.ref('/nodes').on('value', (snapshot) => {
		let data = snapshot.val()
		console.log(data)
		
		//Function to wrap wrangling children into data format we want
		const childrenForKey = (key) => (data[key] && data[key].children) ? Object.entries(data[key].children).map((a) => { return { key: a[0], value: a[1] } }) : []
			
		let nodeList = []
		for(let key in data){
			nodeList.push({name: key, 
						   numChildren: data[key].numberOfChildren, 
						   min: data[key].min, 
						   max: data[key].max, 
						   children: childrenForKey(key)})
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
