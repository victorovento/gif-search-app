import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const [count, setCount] = useState(0);
    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=E840GF7OOO5t1rTOSRkCHcArdizNf1Fq&q=burger&limit=10'
        const resp = await fetch(url);
        const { data } = await resp.json();
        console.log(data);

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs)
        setImages(gifs);
    }

    // getGifs();

    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>

                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>
        </>
    )
}
