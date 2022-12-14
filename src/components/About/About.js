import React from 'react'
import './About.css'
import logos from '../../assets/images/logos'

const About = ({ refContainer }) => {
    const { location, creativity, hardworker, building, developer, responsive } = logos
    const aboutLogos = [creativity, hardworker, building, developer, responsive, location]
    return (
        <div className={refContainer ? refContainer : 'noShowAbout'}>
            <div className='aboutInnerContainer'>

                {aboutLogos.map((v) => (<div key={v.src} className='aboutSingleItem'>
                    <img
                        className='aboutLogo'
                        src={v.src}
                        alt='location'
                        title='logo'
                    />
                    <div className='aboutLogoTitle'>{v.title}</div>
                </div>))}
            </div>
        </div>
    )
}
export default About