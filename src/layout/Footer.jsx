import React from 'react'
import { footerdata } from '../constant/data'
import { Mapping } from '../utils/util'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-links-container'>
                <Mapping
                    of={footerdata}
                    render={(item, index) => (
                        <div className='footer-content'
                            key={index}>
                            <h4>{item.text}</h4>
                            <ul>
                                <Mapping
                                    of={item.children}
                                    render={(list, index) => (
                                        <Link key={index} to={list.path} className='footer-list'>{list.text}</Link>
                                    )}
                                />
                            </ul>
                        </div>


                    )}
                />
            </div>
            <div className='footer-icon'>
                <FaFacebookSquare />
                <FaInstagramSquare />
                <FaYoutube />
                <FaLinkedin />
            </div>

        </div>
    )
}

export default Footer
