import React, { Component } from 'react'
import './App.css'
import ContactList from './ContactList'
import JSONContacts from './contacts.json'

class App extends Component {
    state = {
        contacts: JSONContacts.slice(0, 5)
    }
    render() {
        return <ContactList contacts={this.state.contacts} />
    }
}

export default App
