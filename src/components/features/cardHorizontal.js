import React from 'react'
import CardHModal from './cardMmodal'

const CardHorizontal = (props) => {
    return (
        <div className="card m-3" >
            <div className="row g-0">
                <div className="col-md-4 p-2">
                    <img src={props.card.image} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body p-2">
                        <h3 className="card-title p-1">{props.card.title}</h3>
                        <p className="card-text">{props.card.description}</p>
                        <p className="card-text"><small className="text-muted"></small></p>
                        {props.card?.modal && props.card?.modal?.modalButtonName ? <CardHModal modal={props.card?.modal} /> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardHorizontal