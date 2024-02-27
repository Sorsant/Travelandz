import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getServices } from '../../redux/actions'
import Card from './card/Card'
import style from '../../components/Cards/cards1.module.css'
const Cards = () => {
    const dispatch = useDispatch();
    const Service = useSelector((state) => state.allServices)
    useEffect(() => {
        dispatch(getServices())
    }, [dispatch])
    return (

        <div>

            <div className={style.Conteiner}>
                {Service?.map((serv) =>
                    <Card
                        key={serv.id}
                        id={serv.id}
                        direction={serv.direction}
                        transferType={serv.transferType}
                        vehicle={serv.vehicle.name}
                        category={serv.category.name}
                        pickupInformationFrom={serv?.pickupInformation?.from.description}
                        pickupInformationTo={serv?.pickupInformation?.to.description}
                        minPaxCapacity={serv.minPaxCapacity}
                        maxPaxCapacity={serv.maxPaxCapacity}
                        date={serv?.pickupInformation.date}
                        images={serv.content.images}
                        transferDetailInfo={serv.transferDetailInfo}
                        transferRemarks={serv.transferRemarks}
                        price={serv.price}
                        cancellationPolicies={serv.cancellationPolicies}
                        links={serv.links}
                        rateKey={serv.rateKey}
                        factsheetId={serv.factsheetId}
                    />)}
            </div>
        </div>
    )
}

export default Cards
