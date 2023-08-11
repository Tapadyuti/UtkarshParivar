import React from 'react'

const CardHModal = (props) => {
  return (
    <>
<button type="button" className="btn text-white w-auto" style={{backgroundColor: '#ae67c5'}} data-bs-toggle="modal" data-bs-target={"#"+ props.modal.modalTitle.split(' ').join('')}>
  {props.modal.modalButtonName}
</button>
<div className="modal fade" id={props.modal.modalTitle.split(' ').join('')} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header text-white" style={{backgroundColor: 'blueviolet'}}>
        <h5 className="modal-title" id="exampleModalLabel">{props.modal.modalTitle}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {props.modal.modalDescription}
      </div>
      <div className="modal-footer">
       
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default CardHModal