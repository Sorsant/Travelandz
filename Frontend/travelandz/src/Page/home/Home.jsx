import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react'
import { handlerVehicles } from '../../redux/actions.js'
import Cards from '../../components/Cards/Cards.jsx'
import Search from '../../components/search/Search.jsx'
import Load from '../../components/Loader/Loading.jsx'
const Home = () => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)

        dispatch(handlerVehicles("All"))
            .then(() => setLoading(false))
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })


    }, [dispatch])
    return (
        <div>
            {loading ? (<Load />) : (
                <div>
                    <Search />
                    <Cards />
                </div>

            )}
        </div>
    )
}

export default Home