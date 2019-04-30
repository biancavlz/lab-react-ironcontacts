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
                    {this.props.contacts.map(el => {
                        return (
                            <tr>
                                <td>
                                    <img width="50" src={el.pictureUrl} />
                                </td>
                                <td> {el.name} </td>
                                <td>{el.popularity.toFixed(2)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

export default ContactList
