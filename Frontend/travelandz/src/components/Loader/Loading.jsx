import React from 'react'
import style from './Loading.module.css'
const Loading = () => {
    return (
        <div className={style.textloading}>
            <div className={style.loading_window}>
                <div className={style.car}>
                    <div className={style.strike}></div>
                    <div className={`${style.strike} ${style.strike2}`}></div>
                    <div className={`${style.strike} ${style.strike3}`}></div>
                    <div className={`${style.strike} ${style.strike4}`}></div>
                    <div className={`${style.strike} ${style.strike5}`}></div>
                    <div className={`${style.car_detail} ${style.spoiler}`}></div>
                    <div className={`${style.car_detail} ${style.back}`}></div>
                    <div className={`${style.car_detail} ${style.center}`}></div>
                    <div className={`${style.car_detail} ${style.center1}`}></div>
                    <div className={`${style.car_detail} ${style.front}`}></div>
                    <div className={`${style.car_detail} ${style.wheel}`}></div>
                    <div className={`${style.car_detail} ${style.wheel} ${style.wheel2}`}></div>
                </div>

                <div className={style.text}>
                    <span>Loading</span><span className={style.dots}>...</span>
                </div>
            </div>
        </div>
    )
}

export default Loading
