import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

type Props = {
  commentText: string;
  setCommentText: (text: string) => string | void;
  classes: any;
};

const OptionalCommentField: React.FC<Props> = ({
  commentText,
  setCommentText,
  classes,
}) => {
  const wrapperStyle = { width: 400, margin: 50 };

  return (
    <div style={wrapperStyle}>
      <p>
        <b>Step 3:</b> Any other comments?
      </p>

      <TextField
        value={commentText}
        fullWidth
        className={classes.root}
        placeholder='Type here...'
        onChange={(event): string | void => setCommentText(event.target.value)}
      />
    </div>
  );
};

const styles = {
  root: {
    '& .MuiInput-underline:after': {
      borderBottomColor: '#17a2b8',
    },
  },
};

export default withStyles(styles)(OptionalCommentField);
