import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import AddLogModel from '../logs/AddLogModel';
import AddTechModel from '../techs/AddTechModal';
import TechListModal from '../techs/TechListModal';

const AddBtn = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [nestedModal2, setNestedModal2] = useState(false);
  const [nestedModal3, setNestedModal3] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);

  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }

  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }

  const toggleNested2 = () => {
    setNestedModal2(!nestedModal2);
    setCloseAll(false);
  }

  const toggleAll2 = () => {
    setNestedModal2(!nestedModal2);
    setCloseAll(true);
  }

  const toggleNested3 = () => {
    setNestedModal3(!nestedModal3);
    setCloseAll(false);
  }

  const toggleAll3 = () => {
    setNestedModal3(!nestedModal3);
    setCloseAll(true);
  }

  return (
    <div>
      <a href="#" className="btn btn-info rounded-pill mt-3" onClick={toggle}><i className="large material-icons">add</i></a>
      {/* Main Modal */}
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>First Modal title</ModalHeader>
        <ModalBody>
          First Body modal
          <br />
          <div className="d-flex mt-3">
            <div className="text-center">
              <Button className="mx-5" color="success" onClick={toggleNested}><i className="material-icons">system_update</i></Button>
              <p className="mt-3">Enter/Update Log</p>
            </div>
            <div className="text-center">
              <Button className="mx-5" color="success" onClick={toggleNested2}><i className="material-icons">person_add</i></Button>
              <p className="mt-3">Add Technician</p>
            </div>
            <div className="text-center">
              <Button className="mx-5" color="success" onClick={toggleNested3}><i className="material-icons">person</i></Button>
              <p className="mt-3">List Technicians</p>
            </div>
          </div>
          
          {/* Fist Modal */}
          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Enter System Log</ModalHeader>
            <ModalBody>
              <AddLogModel toggleNested={toggleNested} />
            </ModalBody>
            <ModalFooter>
              <Button color="warning" onClick={toggleNested}>Go back</Button>
              <Button color="secondary" onClick={toggleAll}>All Done</Button>
            </ModalFooter>
          </Modal>
          {/* Second Modal */}
          <Modal isOpen={nestedModal2} toggle={toggleNested2} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>New Technician</ModalHeader>
            <ModalBody>
              <AddTechModel toggleNested={toggleNested} toggleAll2={toggleAll2} />
            </ModalBody>
            <ModalFooter>
              <Button color="warning" onClick={toggleNested2}>Go back</Button>
              <Button color="secondary" onClick={toggleAll2}>All Done</Button>
            </ModalFooter>
          </Modal>
          {/* Third Modal */}
          <Modal isOpen={nestedModal3} toggle={toggleNested3} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Technicians List</ModalHeader>
            <ModalBody>
              <TechListModal toggleNested={toggleNested} toggleAll2={toggleAll3} />
            </ModalBody>
            <ModalFooter>
              <Button color="warning" onClick={toggleNested3}>Go back</Button>
              <Button color="secondary" onClick={toggleAll3}>All Done</Button>
            </ModalFooter>
          </Modal>
        </ModalBody>

        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddBtn;
