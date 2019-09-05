import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import {Container,Grid,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FotterNavigation from '../components/BottomNavigation';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER } from '../graphql/queries';
const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    pad0:{
        paddingLeft:0,
        paddingRight:0
    },
    heading:{
        backgroundColor:'#1b3a61',
        padding:'30px',
        color:'white'
    }
}));

function Dashboard(props){
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { email:sessionStorage.getItem('email') }
  });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <Container maxWidth="xs" className={classes.pad0}>
        <Grid container >
        <Grid item xs={12} className={classes.heading}>
        <Typography variant="h4" gutterBottom>
        My Wallet
      </Typography>
      
        </Grid>
        <Grid item xs={12}><Typography variant="body2" gutterBottom>
       Address: { data.getUser.walletAddress}
      </Typography></Grid>
        
        </Grid>
       <FotterNavigation/>
    </Container>
  );
};

Dashboard.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(Dashboard);
