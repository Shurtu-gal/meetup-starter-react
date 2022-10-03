import classes from './Modal.module.css';

function Modal(props){
  function cancelHandler(){
      props.onCancel();
  }

  return(
      <div className={classes.modal}>
          <h2>Are you Sure?</h2>
          <div className={classes.actions}>
              <button className = {classes.alt} onClick={cancelHandler}>Cancel</button>
              <button className = {classes.btn} onClick={props.onConfirm}>Confirm</button>
          </div>
      </div>
  );
}

export default Modal;