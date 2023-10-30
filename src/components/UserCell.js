
const UserCell = ({ user }) => {
    return (
        <div className="user-cell">
            <div className="user-cell__name">{user.name}</div>
            <div className="user-cell__email">{user.email}</div>
        </div>
    );
};

export default UserCell;