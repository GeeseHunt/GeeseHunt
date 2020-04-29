import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
  NoSsr,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import PropTypes from 'prop-types';

const LoginDialog = ({ open, onClose }) => {
  return (
    <NoSsr>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="login-dialog-title"
      >
        <DialogTitle id="login-dialog-title">
          Login with our provider
        </DialogTitle>
        <DialogContent>
          <a
            href="/login/facebook"
            style={{ textDecoration: 'none' }}
            onClick={onClose}
          >
            <Button variant="contained" size="large" color="primary">
              <FacebookIcon fontSize="large" />
              &nbsp; Continue with Facebook
            </Button>
          </a>
        </DialogContent>
        <DialogActions />
      </Dialog>
    </NoSsr>
  );
};

LoginDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

LoginDialog.defaultProps = {
  open: false,
};

export default LoginDialog;
