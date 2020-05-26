import React from 'react';
import { TextField } from '@material-ui/core';

type Props = {
  commentText: string;
  setCommentText: (text: string) => string | void;
};

const OptionalCommentField: React.FC<Props> = ({
  commentText,
  setCommentText,
}) => {
  const wrapperStyle = { width: 400, margin: 50 };

  return (
    <div style={wrapperStyle}>
      <p>
        <b>Step 3:</b> Any other comments?
      </p>

      <TextField
        id='outlined-basic'
        value={commentText}
        onChange={(event): string | void => setCommentText(event.target.value)}
      />
    </div>
  );
};

export default OptionalCommentField;
