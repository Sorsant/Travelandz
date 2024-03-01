import{GET_ID,GET_ALL_SERVICES,GET_SEARCH,GET_VEHICLE,GET_CATEGORY,GET_PRICE,GET_DATE} from './Actions-types';

const initialState ={
    allServices:[],
    allServicesCopy:[],
    search:[],
    ID:[]
};

const reducer =(state=initialState, {type,payload}) => {

    switch (type) {
        case GET_ALL_SERVICES:
            return{...state,allServices:payload,allServicesCopy:payload};
        case GET_SEARCH:
                return{...state,search:payload};
        case GET_VEHICLE:
            return{...state,allServices:payload};
        case GET_CATEGORY:
            return{...state,allServices:payload};
        case GET_PRICE:
            return{...state,allServices:payload};
        case GET_DATE:
        return{...state,allServices:payload};
        case GET_ID:
            return{...state,ID:payload};
        default: 
                return { ...state,allServices:payload };
        };
          
    }
export default reducer;