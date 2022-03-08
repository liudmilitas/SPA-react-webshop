import { motion } from 'framer-motion'
import React, { useRef, useEffect, useState } from 'react'
import images from '../images.js'

export default function Slider() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(()=> {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <div>
            <motion.div ref={carousel} className='carousel' whileTap={{cursor: 'grabbing'}}>
                <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className='inner-carousel'>
                    { images.map(image => {
                            return(
                                <motion.div className='carousel-single-item' key={image}>
                                    <img src={image} alt=""/>
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </motion.div>
        </div>
    )
}
