import React from 'react'
import Contact from './Contact'
import contacts from './contacts.json'

class ContactList extends React.Component {
    render() {
        const contactInfo = Object.keys(contacts)
            .slice(0, 5)
            .map(key => ({ [key]: contacts[key] }))
        console.log(contactInfo)

        return (
            <table>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>

                <Contact />
            </table>
        )
    }
}

export default ContactList
