import { useContext, useEffect, useState } from "react"
import { instance } from "../main";
import Hotel from "../components/Hotel";

import './home.scss'
import { MyContect } from "../App";
import Book from "../book/Book";

const Home = () => {
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        instance.get("/data")
            .then((response) => {
                setData(response.data)
            })
    }, [])

    const [currentData,setCurrentData] = useState<any>([]);
    
    const getData = async () => {
        setCurrentData(
            await instance.get(`/data/${JSON.parse(localStorage.getItem("current") || '[]')}`).then((res: any) => JSON.parse(res.data))
        )
    } 
    

    useEffect(() => {
        console.log(data)
        getData()
    }, [])

    const [savedItem, setSavedItem] = useState<any>(JSON.parse(localStorage.getItem("cart") || "[]") || [])

    const saveTolocal = (data: any) => {

        if (!savedItem.some((cartItem: any) => cartItem.hotel_id === data.hotel_id)) {
            setSavedItem([data, ...savedItem])
        }
        if (savedItem.find((e: any) => e.hotel_id == data.hotel_id)) {
            setSavedItem(savedItem.filter((e: any) => e.hotel_id != data.hotel_id))
        }


        // console.log(savedItem)

    }
    useEffect(() => {
        console.log(savedItem)

        console.log(JSON.parse(localStorage.getItem("cart") || '[]'))

        localStorage.setItem("cart", JSON.stringify(savedItem))
    }, [savedItem])
    const { book, setBook } = useContext<any>(MyContect)

    return (
        <>
            <div className="flex-container">
                {data.map((each: any) => {
                    return (
                        <>

                            <Hotel
                                data={each}
                                book={book}
                                setBook={setBook}
                                handler={saveTolocal}
                                saved={savedItem}
                            />
                            <Book book={book} data={currentData} />
                        
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Home