import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    width:'100%'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  
  
}));

export default function TokenCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
           Business Token
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
              OBT
          </Typography>
        </CardContent>
        
      </div>
      <div className={classes.details}>
        <CardContent >
          <Typography component="h5" variant="h5">
           120
          </Typography>
          
        </CardContent>
        
      </div>
    </Card>
  );
}