import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const ConfirmDialog = (props) => {

    const { title, contentText ,onClose, open } = props;
    return(
        <div>
        <Dialog
            open = {open}
            onClose = {onClose}
          >
           <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {contentText}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose} color="primary">
                não
              </Button>
              <Button onClick={onClose} color="primary" autoFocus>
                sim
              </Button>
            </DialogActions>
          </Dialog>
        </div>
    );
}

export default ConfirmDialog