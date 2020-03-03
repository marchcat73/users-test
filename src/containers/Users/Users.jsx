import React, { useState, useEffect, useCallback } from 'react';

import './Users.scss';

const Users = () => {
  const [users, setUsers] = useState([]);
  const usersUrl = process.env.REACT_APP_USERS_URL;

  const fetchUsers = useCallback(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch(`${usersUrl}`);
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        throw new Error(`Error: ${error}`);
      }
    };

    fetchApi();
  }, [usersUrl]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const renderUsers = users.map((user, index) => {
    const {
      address: {
        city,
        street,
        suite,
        zipcode,
        geo: { lat, lng }
      },
      company: { bs, catchPhrase, name: companyName },
      id,
      email,
      name: firstAndLastName,
      phone,
      username,
      website
    } = user;

    const key = `user-${id}-${index}`;

    return (
      <div key={key} className="users__item">
        <p>
          <b>{firstAndLastName}</b>
        </p>
        <p>
          Address:{' '}
          {`${city}, ${street}, ${suite}, ${zipcode}, GEO: ${lat}, ${lng}`}
        </p>
        <p>Company: {`${companyName} ${bs} ${catchPhrase} `}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>username: {username}</p>
        <p>website: {website}</p>
      </div>
    );
  });

  if (users.length > 0) {
    return <>{renderUsers}</>;
  }

  return <div className="users">&nbsp;</div>;
};

export { Users };
export default Users;
