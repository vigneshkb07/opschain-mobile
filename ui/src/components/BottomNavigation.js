import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Notifications from '@material-ui/icons/Notifications';
import Message from '@material-ui/icons/Message';
import Person from '@material-ui/icons/Person';
const useStyles = makeStyles({
  root: {
    overflow: 'hidden',
    position: 'fixed',
    bottom: 0,
    width: '100%'
  },
});

export default function FotterNavigation() {
  const classes = useStyles();
  const [value, setValue] = useState('recents');

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction  value="wallet" icon={<AccountBalanceWallet />} />
      <BottomNavigationAction value="notifications" icon={<Notifications />} />
      <BottomNavigationAction value="camera" icon={<PhotoCamera />} />
      <BottomNavigationAction  value="message" icon={<Message />} />
      <BottomNavigationAction  value="person" icon={<Person/>} />
    </BottomNavigation>
  );
}