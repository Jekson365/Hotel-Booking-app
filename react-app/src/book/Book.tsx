import { useEffect } from 'react'
import './book.scss'
import { instance } from '../main'



const Book = (props: any) => {
    // const bookIt = (data : any) => {
    //     console.log(data.data)
    //     // instance.post(`/book/${props.data.hotel_id}`)
    // }
    useEffect(() => {
        console.log(JSON.stringify(props.data))
    }, [])

    const bookHotel = (data : any) => {
        console.log(data)
    }

    if (props.data != undefined) {
        return (
            <>
                <>
                    <div className={`book-it ${props.book ? 'book-it-active' : "book-it-de-active"}`}>
                        {/* <h1>{props.data.data.title && props.data.data.title}</h1> */}
                        {/* <form action=""> */}
                            <div className="container-grid">
                                <input type="text" placeholder='name' />
                                <input type="text" placeholder='surname' />
                            </div>
                            <div className="container-grid">
                                <input type="number" placeholder='phone number' />
                                <input type="text" placeholder='email' />
                            </div>
                            <div className="container-grid-min">
                                <input type="number" placeholder='people' />
                                <input type="number" placeholder='people' />
                                <input type="date" placeholder='people' />
                                <input type="date" placeholder='surname' />
                            </div>
                            <div className="container-grid">
                                <button className='cancel'
                                    
                                >cancel</button>
                                <button className='book'
                                    onClick={()=>bookHotel(props.data)}
                                >book</button>
                            </div>
                        {/* </form> */}
                    </div>
                </>
            </>
        )
    }
}

export default Book