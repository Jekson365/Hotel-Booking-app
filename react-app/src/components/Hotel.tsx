import { BASE } from "../main"
import { AiOutlineCheckCircle } from 'react-icons/ai'
// styles
import './hotel.scss'
import {useEffect, useState } from "react"


// icons
import { BiBed, BiBath } from 'react-icons/bi'
import { PiBroomBold } from 'react-icons/pi'
import { RiTv2Line } from 'react-icons/ri'


const Hotel = (data: any) => {
    // const [book, setBook] = useState<boolean>(false)
    const [saved, setSaved] = useState(data.saved.find((i: any) => i.hotel_id === data.data.hotel_id));
    const [savedItem] = useState<any>(JSON.parse(localStorage.getItem("cart") || '[]'))
    const [now, setNow] = useState<any>({})
    const met = () => {
        data.handler(data.data)
        setSaved(!saved)

        location.reload()
    }
    const handler = (data: any) => {
        if (!data.data.status_) {
            data.setBook(true)
            setNow(data)
        }
    
        localStorage.setItem("current",data.data.hotel_id)
    }


    useEffect(() => {
        console.log(savedItem.includes(data))
    }, [])
    useEffect(() => {
        console.log(savedItem)
    }, [savedItem])

    useEffect(() => {
        console.log(data)
    }, [data])

    const relocate = (hotel_id : any) => {
        window.location.href = `detailed/${hotel_id}`
    }

    return (
        <>
            <div className="card">
                <div className="image-cover" onClick={()=>relocate(data.data.hotel_id)}>
                    <img src={`${BASE + '/images/' + data.data.image}`} />
                </div>
                <div className="row row-1">
                    <h1 className="title">{data.data.title}</h1>
                    <h2 className="price">{data.data.price}
                        <span
                            style={
                                {
                                    fontSize: "18px"
                                }
                            }
                        >$</span>
                    </h2>
                </div>
                <div className="row short-dec">
                    {data.data.shortDescription}
                </div>
                <hr className="line" />
                <div className="amen">
                    <div className="col">
                        <span><BiBed className='asddca' /></span>
                        <span>bedrooms</span>
                        <span>- {data.data.badroom}</span>
                    </div>
                    <div className="col">
                        <span><PiBroomBold className='asddca' /></span>
                        <span>rooms</span>
                    </div>
                    <div className="col">
                        <span><RiTv2Line className='asddca' /></span>
                        <span>TV</span>
                    </div>
                    <div className="col">
                        <span><BiBath className='asddca' /></span>
                        <span>Bathroom</span>
                        <span>{data.data.bathroom ? "+" : "-"}</span>
                    </div>
                </div>
                <div className="row row-2">
                    <button className={`cart ${saved ? 'saved' : ""}`}
                        onClick={met}
                    >{saved ? 'saved' : "save"}
                        {saved ? <AiOutlineCheckCircle className='asdmsa' /> : ""}
                    </button>
                    <button className={`book ${data.data.status_ ? 'blocked' : ""}`}
                        onClick={() => handler(data)}
                    >book</button>
                </div>
            </div>
            {/* <Saved /> */}
            {/* <Book book={book} data={now} /> */}
        </>
    )
}

export default Hotel