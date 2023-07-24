import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Users = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    async function getUsersData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();
        setUsersData(result);
      } catch (error) {
        console.log(error);
      }
    }

    getUsersData();
  }, []);

  return (
    <StyledUsers>
      <StyledList>
        {usersData.map((user) => (
          <StyledListItem key={user.id}>
            <p>Имя: {user.name}</p>
            <p>Email: {user.email}</p>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledUsers>
  );
};

const StyledUsers = styled.div`
  max-width: 100%;
  overflow-x: auto;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap; 
`;

const StyledListItem = styled.li`
  background-color: #ffffff;
  padding: 10px;
  margin: 15px; 
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  p {
    margin: 0;
  }
`;

export default Users;
