

const Table = () => {
    const users = [{ id: 1, checkbox: true, name: 'John Doe', position: 'Developer', email: 'john@example.com', lastLogin: '2021-01-01', registrationTime: '2021-01-01', status: 'Active' }, { id: 2, checkbox: false, name: 'May Reynold', position: 'marketing', email: 'may@example.com', lastLogin: '2022-02-04', registrationTime: '2021-01-02', status: 'Blocked' }];
    return (
        <table className="table table-striped table-hover container">
            <thead>
                <tr>
                    <th>Select</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Email</th>
                    <th>Last Login</th>
                    <th>Registration Time</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>≈
                {users.map((user) => (
                    <tr key={user.id}>
                        <td><input type="checkbox" checked={user.checkbox} /></td>
                        <td>{user.name}</td>
                        <td>{user.position}</td>
                        <td>{user.email}</td>
                        <td>{user.lastLogin}</td>
                        <td>{user.registrationTime}</td>
                        <td>{user.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;