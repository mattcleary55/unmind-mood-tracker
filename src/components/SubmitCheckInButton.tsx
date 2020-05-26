import React from 'react';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import { logCheckInHistory } from '../api';

const SubmitCheckInButton: React.FC = (props: any) => {
  const wrapperStyle = { width: 400, margin: 50 };

  return (
    <div style={wrapperStyle}>
      <Button
        variant='outlined'
        onClick={async () => {
          await logCheckInHistory();
          props.history.push('/checkin-history');
        }}
      >
        Log Check-In
      </Button>
    </div>
  );
};

export default withRouter(SubmitCheckInButton);
