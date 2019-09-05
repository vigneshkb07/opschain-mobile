import React, { useEffect ,useState} from 'react';
import PropTypes from 'prop-types';
import { withRouter} from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import {Container,Typography ,TextField,FormControlLabel,Checkbox,Link,Grid,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../graphql/mutation';


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

function Login(props){
  console.log(props,'--------')
    const classes = useStyles();
    const [login, { data }] = useMutation(LOGIN);
    const [values, setValues] = useState({
      email:'',password:''
    });
  
    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };

    const submitLogin = (e)=>{
        e.preventDefault();
        login({
            variables: values
        }).then(res => { 
          const { email,token} = res.data.login;
          sessionStorage.setItem('email', email);
          sessionStorage.setItem('token',token)
        props.history.push('/dashboard');})
    }

  return (
    <Container maxWidth="xs" className={classes.padTop}>
    <Typography variant="h4" gutterBottom  align="center">
       Ey OpsChain
    </Typography>
    <Typography variant="h5" gutterBottom  align="center">
      Log in
    </Typography>
    <form className={classes.form} onSubmit={submitLogin} noValidate>
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
            value={values.name}
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
            value={values.name}
        onChange={handleChange('password')}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
            <Typography align="center"><Link to="/signin" variant="body2" component={RouterLink}>
                {"New here? Sign in"}
              </Link></Typography>
            
            </Grid>
            </Grid>
        </form>
    </Container>
  );
};

Login.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(Login);
