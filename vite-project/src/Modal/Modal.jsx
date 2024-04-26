import { useState } from "react"
import "./Modal.css"
function Modal() {
    const[modalShow,setmodalShow]=useState(false)

    function modalShowFunction(val) {
        setmodalShow(val)
    }
    
  return (
    <div className="main_modal_container">
      <div className={`modal_container ${modalShow ? "active" : null}` }>
        <h1>page name</h1>
        <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint sit error temporibus similique velit. Inventore!</h4>
      </div>
      <button onClick={()=>modalShowFunction(true)}>show</button>
      <button onClick={()=>modalShowFunction(false)}>delete</button>
    </div>
  )
}

export default Modal
