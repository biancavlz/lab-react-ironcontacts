import React from 'react'

import Contact from './Contact'

class ContactList extends React.Component {
    render() {
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
