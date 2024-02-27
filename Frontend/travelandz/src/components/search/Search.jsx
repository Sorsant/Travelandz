import React from 'react';
import style from './search.module.css';
import { useDispatch } from 'react-redux'
import { handlerVehicles, handlerCategories, handleCapacites, handlePrices, handleDates } from '../../redux/actions.js'

const Search = () => {

    const dispatch = useDispatch();

    const handleVehicle = (event) => {
        const { value } = event.target;
        dispatch(handlerVehicles(value))
    };
    const handleCategory = (event) => {
        const { value } = event.target;
        dispatch(handlerCategories(value))
    }
    const handleCapacity = (event) => {
        const { value } = event.target;
        dispatch(handleCapacites(value))
    }
    const handlePrice = (event) => {
        const { value } = event.target;
        dispatch(handlePrices(value))
    }
    const handleDate = (event) => {
        const { value } = event.target;
        dispatch(handleDates(value))
    }
    return (
        <div className={style.marg}>
            <div className={style.contenedor}>
                <div className={style.selectContainer}>
                    <div className={style.selectWrapper}>
                        <h4>Vehicle</h4>
                        <select name="Vehicle" onChange={handleVehicle}>
                            <optgroup label='Vehicle'></optgroup>
                            <option value="Car">Car</option>
                            <option value="Minibus">Minibus</option>
                            <option value="Bus">Bus</option>
                            <option value="Adapted Vehicle">Adapted Vehicle</option>
                            <option value="All">Default</option>
                        </select>
                    </div>
                    <div className={style.selectWrapper}>
                        <h4>Category</h4>
                        <select name="Category" onChange={handleCategory}>
                            <optgroup label='Category'></optgroup>
                            <option value="Standard">Standar</option>
                            <option value="Premium">Premium</option>
                            <option value="All">Default</option>
                        </select>
                    </div>

                    <div className={style.selectWrapper}>
                        <h4>Capacity</h4>
                        <select name="Capacity" onChange={handleCapacity}>
                            <optgroup label='Capacity'></optgroup>
                            <option value="minPaxCapacity">Min Capacity</option>
                            <option value="maxPaxCapacity">Max Capacity</option>
                            <option value="All">Default</option>
                        </select>
                    </div>
                    <div className={style.selectWrapper}>
                        <h4>Date</h4>
                        <select name="Date" onChange={handleDate}>
                            <optgroup label='Date'></optgroup>
                            <option value="upcoming">Upcoming Events</option>
                            <option value="distant">Distant Events</option>
                            <option value="All">Default</option>
                        </select>
                    </div>
                    <div className={style.selectWrapper}>
                        <h4>Price</h4>
                        <select name="Price" onChange={handlePrice}>
                            <optgroup label='Price'></optgroup>
                            <option value="barato">Min</option>
                            <option value="caro">Max</option>
                            <option value="All">Default</option>

                        </select>
                    </div>


                </div>
            </div>
        </div>

    );
}

export default Search;
