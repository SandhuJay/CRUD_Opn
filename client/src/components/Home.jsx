import React from 'react';
import { Typography, Grid, Card, CardContent, Box,Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h2" gutterBottom>
        Welcome to User CRUD App
      </Typography>

    
      <Box mb={4}>
        <Typography variant="h4" gutterBottom>
          MERN Stack
        </Typography>
        <Typography variant="body1">
          The MERN stack consists of MongoDB, Express.js, React, and Node.js. It is a powerful combination for building full-stack web applications.
        </Typography>
      </Box>

      
      <Box mb={4}>
        <Typography variant="h4" gutterBottom>
          Material-UI
        </Typography>
        <Typography variant="body1">
          Material-UI is a popular React UI framework that provides pre-designed components and styles, making it easy to create attractive user interfaces.
        </Typography>
      </Box>

     
      <Typography variant="h4" gutterBottom>
        CRUD Operations
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={10} sm={5} md={3}>
          <Card sx={{ height: '100%', backgroundColor: '#ffcc80' }}>
            <CardContent>
              <Typography variant="h5" component="h2">
              <Link component={RouterLink} to="/add" color="inherit">
                        Create User
                    </Link>
              </Typography>
              <Typography variant="body2" component="p">
                Add new users to the database.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} sm={5} md={3}>
          <Card sx={{ height: '100%', backgroundColor: '#ffee58' }}>
            <CardContent>
              <Typography variant="h5" component="h2">
              <Link component={RouterLink} to="/all" color="inherit">
                        Read Users
                    </Link>
              </Typography>
              <Typography variant="body2" component="p">
                View all users in the database.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} sm={5} md={3}>
          <Card sx={{ height: '100%', backgroundColor: '#64b5f6' }}>
            <CardContent>
              <Typography variant="h5" component="h2">
              <Link component={RouterLink} to="/all" color="inherit">
                        Update User
                    </Link>
              </Typography>
              <Typography variant="body2" component="p">
                Edit existing user details.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} sm={5} md={3}>
          <Card sx={{ height: '100%', backgroundColor: '#e57373' }}>
            <CardContent>
              <Typography variant="h5" component="h2">
              <Link component={RouterLink} to="/all" color="inherit">
                        Delete User
                    </Link>
              </Typography>
              <Typography variant="body2" component="p">
                Remove users from the database.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
