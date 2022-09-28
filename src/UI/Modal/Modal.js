import { Fragment } from "react"
import ReactDOM from "react-dom"
import './Modal.css'

function BackDrop() {
    return <div className="backdrop"></div>
}

function ModalOverlay(props) {
    return <div className="modal">
        <div className="content">{props.children}</div>
    </div>
}

function Modal(props) {
    return <Fragment>
        {ReactDOM.createPortal(<BackDrop />, document.getElementById('overlays'))}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
    </Fragment>
}

export default Modal