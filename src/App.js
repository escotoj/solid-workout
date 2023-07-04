import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(3),
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
  },
  input: {
    marginRight: theme.spacing(2),
  },
  submitButton: {
    marginLeft: theme.spacing(2),
  },
  submittedValue: {
    marginTop: theme.spacing(2),
  },
}));

const App = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue('');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1" gutterBottom>
        Solid Workout App
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.input}
          variant="outlined"
          label="Workout"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          type="submit"
        >
          Log
        </Button>
      </form>
      {submittedValue && (
        <div className={classes.submittedValue}>
          <Typography variant="h6" component="h2" gutterBottom>
            Workout:
          </Typography>
          <Typography variant="body1">{submittedValue}</Typography>
        </div>
      )}
    </div>
  );
};

export default App;
