import { useForm } from 'react-hook-form'
import './upload.scss'



// import icons
import { BiBed, BiBath } from 'react-icons/bi'
import { PiBroomBold } from 'react-icons/pi'
import { RiTv2Line } from 'react-icons/ri'
import { instance } from '../main'
import { useState } from 'react'

const Upload = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [image, handleImage] = useState<any>();
    const onSubmit = (data: any) => {
        instance.post(
            '/upload',
            { ...data, image: image },
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
            .then((res) => {
                console.log(res)
            })
        console.log({ ...data, image: image })
    }
    return (
        <>
            <form action="" datatype='multipart/form-data' method="post" onSubmit={handleSubmit(onSubmit)}>
                <div className="row row-1">
                    <input type="text" placeholder="title"
                        {...register('title')}
                    />
                    <input type="number" placeholder="price"
                        {...register("price")}
                    />
                </div>
                <div className="row row-2">
                    <input type="text" placeholder="short description"
                        {...register("desc_short")}
                    />
                    <input type="text" placeholder="long description"
                        {...register("desc_long")}
                    />
                </div>
                <div className="columns">
                    <div className="inp img">
                        <input type="file"
                            name='image'
                            onChange={(e: any) => handleImage(e.target.files[0])}
                        />
                        <label htmlFor="image">

                            Image</label>
                    </div>
                    <div className="inp">
                        <input type="number"
                            {...register("rooms")}
                        />
                        <div className="row">
                            <PiBroomBold />
                            <label htmlFor="rooms">
                                rooms</label>
                        </div>
                    </div>
                    <div className="inp">
                        <input type="number"
                            {...register("bedrooms")}
                        />
                        <div className="row">
                            <BiBed />
                            <label htmlFor="bedrooms">
                                bedrooms</label>
                        </div>
                    </div>
                    <div className="inp">
                        <input type="number"
                            {...register("bathroom")}
                        />
                        <div className="row">
                            <BiBath />
                            <label htmlFor="bathroom"

                            >
                                bathroom</label>
                        </div>
                    </div>
                    <div className="inp">
                        <input type="number"
                            {...register("tv")}
                        />
                        <div className="row">
                            <RiTv2Line />
                            <label htmlFor="TV">
                                TV</label>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button className='submit'>Submit</button>
                    <button className='clear'>Clear</button>
                </div>
            </form >
        </>
    )
}

export default Upload