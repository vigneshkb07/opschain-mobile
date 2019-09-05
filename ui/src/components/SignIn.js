import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import {Container,Typography ,TextField,Link,Grid,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SIGNIN } from '../graphql/mutation';
import { useMutation } from '@apollo/react-hooks';
const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    padTop:{
      paddingTop:'25%'
    }
  }));

const SignIn = props => {
  const classes = useStyles();
  const [signin, { data }] = useMutation(SIGNIN);
    const [values, setValues] = useState({
      name:'',email:'',password:'',confirmpassword:'',role:'user'
    });
  
    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };

    const signIn = (e)=>{
        e.preventDefault();
        signin({
            variables: values
        }).then(res => { 
        props.history.push('/');})
    }
  return (
    <Container maxWidth="xs" className={classes.padTop}>
    <Typography variant="h4" gutterBottom  align="center">
       Ey OpsChain
    </Typography>
    <form className={classes.form} onSubmit={signIn} noValidate>
    <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={values.name}
        onChange={handleChange('name')}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={values.email}
        onChange={handleChange('email')}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={values.password}
        onChange={handleChange('password')}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirm_password"
            label="Confirm Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={values.confirmpassword}
        onChange={handleChange('confirmpassword')}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
            <Typography align="center"><Link to="/" variant="body2" component={RouterLink}>
                {"Return to Login"}
              </Link></Typography>
            
            </Grid>
            </Grid>
        </form>
    </Container>
  );
};

SignIn.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(SignIn);
