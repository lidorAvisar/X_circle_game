import React, { useContext } from 'react'
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faCircle } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from '../context/context';

const ModalStartGame = (props) => {

    const { setXPlaying } = useContext(AppContext);


    const refreshState = (value) => {
        setXPlaying(value);
    }

    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ backdropFilter: 'blur(5px)' }}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Title id="contained-modal-title-vcenter" style={{ borderRadius: '5px 5px 0px 0px', textAlign: 'center', padding: '12px' }}>
                <span>Choose your player:</span>
            </Modal.Title>
            <Modal.Body style={{ borderRadius: '0px 0px 5px 5px' }}>
                <div className='d-flex justify-content-center gap-5 p-4'>
                    <span onClick={props.onHide} className=" float-start">
                        <button onClick={() => { refreshState(true); }}><FontAwesomeIcon icon={faX} beatFade style={{ color: "#ff2e2e", fontSize: '60px' }} /></button>
                    </span>
                    <span onClick={props.onHide} className="float-start">
                        <button onClick={() => { refreshState(false); }}><FontAwesomeIcon icon={faCircle} beatFade style={{ color: "#1264f3", fontSize: '60px' }} /></button>
                    </span>
                </div>

            </Modal.Body>
        </Modal>
    )
}

export default ModalStartGame