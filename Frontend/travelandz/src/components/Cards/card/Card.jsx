import { Link } from 'react-router-dom'
import React from 'react'
import style from './Card.module.css'
const Card = (props) => {
    const url = props?.images[2].url
    return (
        <div className={style.contenedor} >
            <Link to={`/home/${props.id}`} className={style.link}>
                <div className={style.imagContainer}>
                    <img className={style.imag} src={url} alt="" />
                </div>
                <div>

                    <div className={style.modulo}>
                        <div className={style.direcction}>

                            <p ><strong>from:</strong> {props.pickupInformationFrom}</p>
                            <p ><strong>to:</strong> {props.pickupInformationTo}</p>
                        </div>

                        <div className={style.direcction}>
                            <p><strong>Vehicle:</strong> {props.vehicle}</p> <br /> <p><strong>Category:</strong> {props.category}</p>
                        </div>


                        <div className={style.direcction}>
                            <p>Capacity  <strong>Min:</strong> {props.minPaxCapacity} /  <strong>Max:</strong> {props.maxPaxCapacity}</p>
                            <p><strong> Date: </strong>{props.date}</p>
                        </div>
                        <p className={style.posicionm}><strong>Price: </strong> <strong className={style.monto}>{props.price.totalAmount} {props.price.currencyId}</strong></p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card
