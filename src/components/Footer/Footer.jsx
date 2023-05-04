import React from 'react';
import { FaFacebook, FaInstagram, FaThumbsUp, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer mt-auto py-3 bg-dark text-white text-center'>
            <div className='container'>
                <div className='my-2'>
                <p className='text-semibold'>Contact Us on</p>
                <Link to={"https://www.facebook.com/"}><FaFacebook></FaFacebook></Link>
                <Link className='mx-2' to={"https://twitter.com/"}><FaTwitter></FaTwitter></Link>
                <Link to={"https://www.instagram.com/"}><FaInstagram></FaInstagram></Link>
                </div>
            <p ><small>Copyright &#169; 2023 CookLike-a-Chef. All rights reserved.</small></p>
        </div>
        </footer>
    );
};

export default Footer;