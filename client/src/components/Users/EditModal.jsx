import React, {useState, useRef} from 'react'
import {Button, Modal} from 'react-bootstrap'
import UserForm from './UserForm';


function EditUser({user}) {
  const [show, setShow] = useState(false);
  const formRef = useRef(null);
  
  const handleClose = () => { 
    formRef.current.click();
    setShow(false);
  }

    
  const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>
        <Modal show={show}>
          <Modal.Header closeButton>
            <Modal.Title>Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UserForm
              ref={formRef}
              userId={user.id}
              buttonHidden={true}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default EditUser;