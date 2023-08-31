import { useState } from 'react'
import './saved.scss'
import { MyContect } from '../App'
import { useContext } from 'react'


const Saved = () => {
    const { cart,setCart } = useContext<any>(MyContect)

    const [savedData, setSavedData] = useState(JSON.parse(localStorage.getItem("cart") || '[]'))

    window.addEventListener("scroll",()=> {
        setCart(false)
    })
    if (savedData.length != 0) {

        return (
            <>
                <div className={`container-saved ${cart ? 'active-cart' : 'de-active-cart'}`}
                    onClick={()=>setCart(false)}
                >
                    <>
                        {savedData.map((each: any) => {
                            return (
                                <>
                                    <div className="each-box">
                                        <div className="image-place">
                                            <img src={`http://localhost:8080/images/${each.image}`} />
                                        </div>
                                        <div className="content">
                                            <h4>{each.title}</h4>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className={`container-saved ${cart ? 'active-cart' : 'de-active-cart'}`}
                onClick={()=>setCart(false)}
                >
                    <h3>cart is empty</h3>
                </div>
            </>
        )
    }
}

export default Saved