import React from 'react';
import { TextField } from '@material-ui/core';

import { useCommentText } from '../hooks';

const OptionalCommentField: React.FC = () => {
  const wrapperStyle = { width: 400, margin: 50 };

  const { setCommentText, commentText } = useCommentText();

  return (
    <div style={wrapperStyle}>
      <p>
        <b>Step 3:</b> Any other comments?
      </p>

      <TextField
        id='outlined-basic'
        value={commentText}
        onChange={(event): void => setCommentText(event.target.value)}
      />
    </div>
  );
};

export default OptionalCommentField;
