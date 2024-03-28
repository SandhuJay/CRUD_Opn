
import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
    background: #808080;
`;
    
const List = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar = () => {
    return (
        <Header>
            <Toolbar>
                <List to="./" exact>Home</List>
                <List to="all" exact>All Users</List>
                <List to="add" exact>Add User</List>
            </Toolbar>
        </Header>
    )
}

export default NavBar;