import React from 'react'

class ContactList extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                    {this.props.contacts.map(elem => {
                        return (
                            <tr>
                                <td>
                                    <img width="50" src={elem.pictureUrl} />
                                </td>
                                <td> {elem.name} </td>
                                <td>{elem.popularity.toFixed(2)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

export default ContactList
