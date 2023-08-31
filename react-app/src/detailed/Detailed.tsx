import { useEffect, useState } from 'react'
import './detailed.scss'
import axios from 'axios'
import './detailed.scss'
import { instance } from '../main'

import { BiBed, BiBath } from 'react-icons/bi'
import { PiBroomBold } from 'react-icons/pi'
import { RiTv2Line } from 'react-icons/ri'



const Detailed = () => {
    const id = window.location.href.split("/")[4]
    const [data, setData] = useState<any>([])

    useEffect(() => {
        instance.get(`/data/${id}`)
            .then((response) => {
                setData(response.data[0])
            })

        console.log(data)
    }, [])


    return (
        <>
            <div className="detiled-container">
                <div className="image">
                    <img src={`http://localhost:8080/images/${data.image}`} alt="" />
                </div>
                <div className="content-cover">
                    <h1>{data.title}</h1>
                    <p
                        className='description_main'
                    >{data.longDescription}</p>
                    <div className="line"></div>
                    <div className="amen">
                        <div className="col">
                            <span><BiBed className='asddca' /></span>
                            <span>bedrooms</span>
                            <span>- {data.badroom}</span>
                        </div>
                        <div className="col">
                            <span><PiBroomBold className='asddca' /></span>
                            <span>rooms - 3</span>
                        </div>
                        <div className="col">
                            <span><RiTv2Line className='asddca' /></span>
                            <span>TV - 2</span>
                        </div>
                        <div className="col">
                            <span><BiBath className='asddca' /></span>
                            <span>Bathroom</span>
                        </div>
                    </div>
                    <button>book</button>
                </div>
            </div>
        </>
    )
}

export default Detailed