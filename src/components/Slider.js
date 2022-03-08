import { motion } from 'framer-motion'
import React, { useRef, useEffect, useState } from 'react'
import images from '../images.js'

export default function Slider() {
    return (
        <div>
            <motion.div className='carousel'>
                <motion.div drag="x" dragConstraints={{right: 0}} className='inner-carousel'>
                    { images.map(image => {
                            return(
                                <motion.div className='carousel-single-item'>
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
