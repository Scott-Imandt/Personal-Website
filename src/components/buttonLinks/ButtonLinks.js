import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonLinks.css'
import { motion } from 'framer-motion'

function ButtonLinks({ image: imagelink, title: altText, buttonLink: link, onError: errorlink }) {

    return (
        <motion.div whileHover={{ scale: 1.1}} whileTap={{scale: .95}}>
            <Link to={link} className='buttonLink'>
                <div>
                    <button className='buttonElement'>
                        <img className="title-icons"
                            src={imagelink}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = errorlink;
                            }}
                            alt={altText} />
                    </button>
                </div>
            </Link>
        </motion.div>
    )
}

export default ButtonLinks