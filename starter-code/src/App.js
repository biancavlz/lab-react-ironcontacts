import React, { Component } from 'react'
import './App.css'
import ContactList from './ContactList'
import JSONContacts from './contacts.json'

class App extends Component {
    state = {
        contacts: JSONContacts.slice(0, 5) //gets only the first five elements
    }

    handleRandom = () => {
        const randomNumber = Math.floor(Math.random() * JSONContacts.length)
        let newContacts = this.state.contacts.slice() // get all five elements at once with slice()
        newContacts.push(JSONContacts[randomNumber])

        this.setState({
            contacts: newContacts
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRandom}>Add a random contact</button>
                <ContactList contacts={this.state.contacts} />
            </div>
        )
    }
}

export default App
