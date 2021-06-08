import Table from 'react-bootstrap/Table'
export default function Usertable(props) {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th onClick={props.SortByName}>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map(user => (<tr>
                        <td><img src={user.picture.medium} alt='user' /></td>
                        <td>{user.name.first}</td>
                        <td>{user.name.last}</td>
                        <td>{user.email}</td>
                    </tr>))}

                </tbody>
            </Table>
        </div>
    )
}
