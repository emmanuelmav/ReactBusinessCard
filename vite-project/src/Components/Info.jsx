import React from 'react'


export default function Info() {
    return (
        <section className='info'>
            <img className='info--profile' src="src/assets/profile.svg" alt="profile" />
            <h2 className='info--name'>Laura Smith</h2>
            <h3 className='info--job'>Frontend Developer</h3>
            <h4 className='info--website'>laurasmith.website</h4>
            <div className="info-btns">
                <button className="btns email--btn">
                    <img className='info--icon' src="src/assets/email.svg" alt="email" />
                    Email
                </button>
                <button className="btns linkedin--btn">
                    <img className='info--icon' src="src/assets/linkedin.svg" alt="email" />
                    LinkedIn
                </button>
            </div>
        </section>
    )
}

