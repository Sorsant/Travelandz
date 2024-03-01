import{GET_ID,GET_ALL_SERVICES,GET_SEARCH,GET_VEHICLE,GET_CATEGORY,GET_CAPACITY,GET_PRICE,GET_DATE} from './Actions-types';
import axios from 'axios';

export const getServices = ()=>{
    const endpoint ="http://localhost:3001/app/services"
    return async(dispatch)=>{
        try {
            const {data}=await axios.get(endpoint);
            return dispatch({
                type: GET_ALL_SERVICES,
                payload:data
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export const getSearch = ()=>{
    const endpoint ="http://localhost:3001/app/search"
    return async(dispatch)=>{
        try {
            const {data}=await axios.get(endpoint);
            return dispatch({
                type:GET_SEARCH,
                payload:data
            })
        } catch (error) {
            console.error(error);
        }
    }
}
export const handlerVehicles = (value)=>{
    const endpoint ="http://localhost:3001/app/services"
    return async(dispatch)=>{
        try {
            const {data}=await axios.get(endpoint);
           
            if(value === "Car"){
                const newarray= data.filter((Q)=> Q.content.vehicle.name === "Car")
                
                return dispatch({
                        type: GET_VEHICLE,
                        payload:newarray
                    })
            }
            else if(value==="Minibus"){
                const newarray= data.filter((Q)=> Q.content.vehicle.name === "Minibus")
               
                return dispatch({
                        type: GET_VEHICLE,
                        payload:newarray
                    })
            }
            else if(value==="Bus"){
                const newarray= data.filter((Q)=> Q.content.vehicle.name === "Bus")
                
                return dispatch({
                        type: GET_VEHICLE,
                        payload:newarray
                    })
            }
            else if(value==="Adapted Vehicle"){
                const newarray= data.filter((Q)=> Q.content.vehicle.name === "Adapted Vehicle")
       
                return dispatch({
                        type: GET_VEHICLE,
                        payload:newarray
                    })
            }
            else if(value==="All"){
        //    console.log(data)
                return dispatch({
                        type: GET_VEHICLE,
                        payload:data
                    })
            }
            
        } catch (error) {
            console.error(error);
        }
    }
}


export const handlerCategories = (value)=>{
    const endpoint ="http://localhost:3001/app/services"
    return async(dispatch)=>{
        try {
            const {data}=await axios.get(endpoint);
           
            if(value === "Standard"){
                const newarray= data.filter((Q)=> Q.content.category.name === "Standard")
                
                return dispatch({
                        type: GET_CATEGORY,
                        payload:newarray
                    })
            }
            else if(value==="Premium"){
                const newarray= data.filter((Q)=> Q.content.category.name === "Premium")
               
                return dispatch({
                        type: GET_CATEGORY,
                        payload:newarray
                    })
            }
            else if(value==="All"){
           
                return dispatch({
                        type: GET_CATEGORY,
                        payload:data
                    })
            }
            
        } catch (error) {
            console.error(error);
        }
    }
}
export const handleCapacites = (value)=>{
    const endpoint ="http://localhost:3001/app/services"
    return async(dispatch)=>{
        try {
            const {data}=await axios.get(endpoint);
           
            if(value === "maxPaxCapacity"){
                const decendente = data.sort((a, b) => b.maxPaxCapacity
                - a.minPaxCapacity
                );
                
                return dispatch({
                        type: GET_CAPACITY,
                        payload:decendente
                    })
            }
            else if(value==="minPaxCapacity"){
                const acendente = data.sort((a, b) => a.minPaxCapacity
                - b.maxPaxCapacity);
               
                return dispatch({
                        type: GET_CAPACITY,
                        payload:acendente
                    })
            }
            else if(value==="All"){
           
                return dispatch({
                        type: GET_CAPACITY,
                        payload:data
                    })
            }
            
        } catch (error) {
            console.error(error);
        }
    }
}
export const handlePrices = (value)=>{
    const endpoint ="http://localhost:3001/app/services"
    return async(dispatch)=>{
        try {
            const {data}=await axios.get(endpoint);
           
            if(value === "caro"){
                const decendente = data.sort((a, b) => b.price.totalAmount
                - a.price.totalAmount
                );
                
                return dispatch({
                        type: GET_PRICE,
                        payload:decendente
                    })
            }
            else if(value==="barato"){
                const acendente = data.sort((a, b) => a.price.totalAmount
                - b.price.totalAmount);
               
                return dispatch({
                        type: GET_PRICE,
                        payload:acendente
                    })
            }
            else if(value==="All"){
           
                return dispatch({
                        type: GET_PRICE,
                        payload:data
                    })
            }
            
        } catch (error) {
            console.error(error);
        }
    }
}
export const handleDates = (value)=>{
    const endpoint ="http://localhost:3001/app/services"
    return async(dispatch)=>{
        try {
            const {data}=await axios.get(endpoint);
           
            if(value === "distant"){
                const decendente = data.sort((a, b) => b.price.totalAmount
                - a.price.totalAmount
                );
                
                return dispatch({
                        type: GET_DATE,
                        payload:decendente
                    })
            }
            else if(value=== "upcoming"){
                const acendente = data.sort((a, b) => a.pickupInformation.date
                - b.pickupInformation.date);
               
                return dispatch({
                        type: GET_DATE,
                        payload:acendente
                    })
            }
            else if(value==="All"){
           
                return dispatch({
                        type: GET_DATE,
                        payload:data
                    })
            }
            
        } catch (error) {
            console.error(error);
        }
    }
}
export const getIdTransfer =(id)=>{
    const endpoint =`http://localhost:3001/app/services/${id}`
    return async (dispatch)=>{
        try {
            const {data} = await axios.get(endpoint);
            console.log(data)
            return dispatch({
                type:GET_ID,
                payload:data
            })
        } catch (error) {
            console.log(error)
        }
    }
}