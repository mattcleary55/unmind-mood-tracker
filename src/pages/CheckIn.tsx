import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const CheckIn = () => {
  const classes = useStyles();

  return (
    <div>
      <h2>How are you feeling?</h2>

      <form className={classes.root} noValidate autoComplete='off'>
        <TextField
          id='outlined-basic'
          label='Leave a comment'
          variant='outlined'
        />
      </form>
    </div>
  );
};

export default CheckIn;
