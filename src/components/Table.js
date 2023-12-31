import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaLock, FaUnlock, FaTrash } from 'react-icons/fa';

const Table = () => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  // const [checkbox, setCheckbox] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get('https://user-control-pro-6d69dacacf7c.herokuapp.com/users');
    const usersWithCheckbox = response.data.map((user) => ({
      ...user,
      checkbox: false,
    }));
    setUsers(usersWithCheckbox);
  };

  useEffect(() => {
    fetchUsers();
    console.log('useEffect');
  }, [selectedUsers]);

  const timeFormatter = (time) => {
    const date = new Date(time);
    return date.toLocaleString('en-US', {
      day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true,
    });
  };

  const handleCheckboxChange = (id) => {
    const newSelectedUsers = [...selectedUsers];
    const index = newSelectedUsers.indexOf(id);
    if (index > -1) {
      newSelectedUsers.splice(index, 1);
    } else {
      newSelectedUsers.push(id);
    }
    setSelectedUsers(newSelectedUsers);
  };

  const handleBlock = () => {
    const promises = selectedUsers.map((user) => axios.put(`https://user-control-pro-6d69dacacf7c.herokuapp.com/users/${user}`, {
      status: 'blocked',
    }));

    Promise.all(promises)
      .then((responses) => {
        console.log('Blocked', responses);
        setSelectedUsers([]);
      })
      .catch((error) => {
        console.log('Block error', error);
      });
  };

  const handleUnblock = () => {
    const promises = selectedUsers.map((user) => axios.put(`https://user-control-pro-6d69dacacf7c.herokuapp.com/users/${user}`, {
      status: 'active',
    }));

    Promise.all(promises)
      .then((responses) => {
        console.log('Unblocked', responses);
        setSelectedUsers([]);
      })
      .catch((error) => {
        console.log('Unblock error', error);
      });
  };

  const handleDelete = () => {
    const promises = selectedUsers.map((user) => axios.delete(`https://user-control-pro-6d69dacacf7c.herokuapp.com/users/${user}`));

    Promise.all(promises)
      .then((responses) => {
        console.log('Deleted', responses);
        setSelectedUsers([]);
      })
      .catch((error) => {
        console.log('Delete error', error);
      });
  };

  const className = (userStatus) => {
    if (userStatus === 'blocked') {
      return 'text-secondary';
    }
    return '';
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-start gap-3">
        <button type="button" className="btn btn-secondary" onClick={handleBlock}>
          <FaLock />
          {' '}
          Block
        </button>
        <button type="button" className="btn btn-secondary" onClick={handleUnblock}>
          <FaUnlock />
          {' '}
          Unclock
        </button>
        <button type="button" className="btn btn-secondary" onClick={handleDelete}>
          <FaTrash />
          {' '}
          Delete
        </button>
      </div>
      <br />
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
        <tbody>
          ≈
          {users.map((user) => (

            <tr key={user.id}>
              <td>
                {/* eslint-disable */}
                                <input
                                    type="checkbox"
                                    checked={selectedUsers.includes(user.id)}
                                    onChange={() => handleCheckboxChange(user.id)}
                                />
                                {/* eslint-disable */}
                            </td>
                            <td className={className(user.status)}>{user.username}</td>
                            <td className={className(user.status)}>{user.position}</td>
                            <td className={className(user.status)}>{user.email}</td>
                            <td className={className(user.status)}>{timeFormatter(user.updated_at)}</td>
                            <td className={className(user.status)}>{timeFormatter(user.created_at)}</td>
                            <td className={className(user.status)}>{user.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
