import React from 'react'

const CardHModal = (props) => {
  return (
    <>
<button type="button" class="btn text-white w-auto" style={{backgroundColor: '#ae67c5'}} data-bs-toggle="modal" data-bs-target={"#"+ props.modal.modalTitle.split(' ').join('')}>
  {props.modal.modalButtonName}
</button>
<div class="modal fade" id={props.modal.modalTitle.split(' ').join('')} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header text-white" style={{backgroundColor: 'blueviolet'}}>
        <h5 class="modal-title" id="exampleModalLabel">{props.modal.modalTitle}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {props.modal.modalDescription}
      </div>
      <div class="modal-footer">
       
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default CardHModal