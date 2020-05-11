import { makeStyles, fade } from '@material-ui/core';

export default makeStyles(theme => ({
  input: {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid',
    borderColor: theme.palette.action.disabled,
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create(['border-color', 'box-shadow']),

    '&:focus': {
      borderColor: 'none',
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
    },
  },
}));
