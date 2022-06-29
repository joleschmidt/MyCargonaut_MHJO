import React from "react";
import { Modal} from "react-bootstrap";

const SuccessModal = (props) => {
    const { showModal, setShowModal } = props;
    const handleClose = () => {
        setShowModal(false);
    };


    return (
        <div>
            <Modal
                style={styles.container}
                show={showModal}
                onHide={handleClose}
                centered
            >
                {/* Modal */}
                <Modal.Header closeButton style={styles.modalCenter}>
                    <Modal.Title style={styles.loginTitle} className="ms-auto">
                        Herzlichen Glückwunsch
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={styles.modalCenter}>
                   Dein Angebot wurde erfolgreich veröffentlicht!
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default SuccessModal;

let styles = {
    aReg: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px",
    },
    border: {
        border: "1px solid #659e98",
    },
    container: {
        borderRadius: "15px !important",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    textInput: {
        height: "50px",
        width: "456px",
        borderRadius: "15px",
        marginTop: "30px",
        borderColor: "#8cb6b2",
    },
    link: {
        margin: "5px",
    },
    loginTitle: {
        fontSize: "26px",
        color: "#4F4F4F",
    },
    modalCenter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    modalFooter: {
        width: "456px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    signInBtn: {
        height: "55px",
        width: "456px",
        borderRadius: "15px",
        borderWidth: "0px",
        backgroundColor: "#659e98",
        marginTop: "30px",
    },
    signWGBtn: {
        height: "50px",
        width: "456px",
        borderRadius: "15px",
        borderWidth: "1px",
        borderColor: "#659e98",
        color: "black",
        backgroundColor: "white",
        marginTop: "30px",
        marginBottom: "30px",
    },
};
