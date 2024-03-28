import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material';
import { getUsers, deleteUser } from '../service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 100%;
    margin: 50px 0 0 0;
  
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
        padding: 12px;
    }
`;

const TRow = styled(TableRow)`
    & > td {
        font-size: 18px;
        padding: 12px;
    }
`;

const ButtonContainer = styled('div')`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

const UserList = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        try {
            let response = await getUsers();
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Actions</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user._id}>
                        <TableCell>{user._id}</TableCell> 
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <ButtonContainer>
                                <Button color="primary" variant="contained" component={Link} to={`/edit/${user._id}`}>Edit</Button>
                                <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button>
                            </ButtonContainer>
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default UserList;
