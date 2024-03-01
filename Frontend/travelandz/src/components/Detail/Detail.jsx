import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { getIdTransfer } from '../../redux/actions'
const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const infoID = useSelector((state) => state.ID)
    const imagen = infoID.content && infoID.content.images && infoID.content.images[2] ? infoID.content.images[2].url : '';
    useEffect(() => {
        dispatch(getIdTransfer(id))
    }, [id]);
    return (
        <div>
            <div>
                <img src={imagen} alt="" />
                <div>
                    <h3>{infoID.pickupInformation?.from.description}</h3>
                    <h3>{infoID.pickupInformation?.to.description}</h3>
                    <h4>{infoID.price?.totalAmount} <span>{infoID.price?.currencyId}</span></h4>
                    <h3>{infoID.vehicle?.name}  {infoID.category?.name}</h3>
                    <h3>{infoID.pickupInformation?.date}</h3>
                    <h3>{infoID.pickupInformation?.time}</h3>
                    <p>{infoID.pickupInformation?.pickup.description}</p>
                    <p>{infoID.content?.transferDetailInfo?.map(detail => detail.name)}</p>

                </div>

            </div>

        </div>
    )
}

export default Detail
