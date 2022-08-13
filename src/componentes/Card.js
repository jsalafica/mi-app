import React from "react";

function Card(props) {
    return(
        <div className="col-md-3">
            <div className='card m-2'>
                <div  className='card-header'>
                    <h4>{props.titulo}</h4>
                </div>
                <div className='card-body'>
                    <div className='card-title'>
                        <h5>{props.cuerpo}</h5>
                    </div>
                </div>
                <div className='card-footer'>
                    <h6>{props.footer}</h6>
                </div>
            </div>
        </div>
    );
}

export default Card;