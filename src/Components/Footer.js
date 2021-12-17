import React from 'react'
import "../styles/Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faDiscord, faTwitter, faReddit, faFacebook, faInstagram, faTiktok, faTelegram } from "@fortawesome/free-brands-svg-icons";


function Footer() {
    return (
        <div className='container'>
            <div className="row">
                <div className="col col-sm-7 mx-auto mb-5 text-center">
                    <a className="social-icons px-2 px-sm-4" href="https://t.me/+-tLGe4BSh1pkODYx"><FontAwesomeIcon className='text-white fs-1 telegram' icon={faTelegram}></FontAwesomeIcon></a>{' '}
                    <a className="social-icons px-2 px-sm-4" href="https://www.facebook.com/Wurklo"><FontAwesomeIcon className='text-white fs-1 facebook' icon={faFacebook}></FontAwesomeIcon></a>{' '}
                    <a className="social-icons px-2 px-sm-4" href="https://twitter.com/Wurklo"><FontAwesomeIcon className='text-white fs-1 twitter' icon={faTwitter}></FontAwesomeIcon></a>{' '}
                    <a className="social-icons px-2 px-sm-4" href="https://www.reddit.com/user/Wurklo/comments/ri14n4/what_is_wurklo/"><FontAwesomeIcon className='text-white fs-1 reddit' icon={faReddit}></FontAwesomeIcon></a>{' '}
                    <a className="social-icons px-2 px-sm-4" href=" https://www.instagram.com/wurklo/"><FontAwesomeIcon className='text-white fs-1 instagram' icon={faInstagram}></FontAwesomeIcon></a>{' '}
                    <a className="social-icons px-2 px-sm-4" href="https://discord.gg/7sK89kZf"><FontAwesomeIcon className='text-white fs-1 discord' icon={faDiscord}></FontAwesomeIcon></a>{' '}
                    <a className="social-icons px-2 px-sm-4" href="https://www.youtube.com/channel/UCxGURLHBrraodONmnB7jxcw"><FontAwesomeIcon className='text-white fs-1 youtube' icon={faYoutube}></FontAwesomeIcon></a>{' '}
                    <a className="social-icons px-2 px-sm-4" href="https://www.tiktok.com/@wurklo"><FontAwesomeIcon className='text-white fs-1 tiktok' icon={faTiktok}></FontAwesomeIcon></a>{' '}
                </div>
            </div>
        </div>
    )
}

export default Footer
