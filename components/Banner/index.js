import React from 'react'
import styles from './styles.module.css'

const Banner = () => {
    return (
        <header className={styles.cover}>
            <div className={styles.sectionI}>
<h1>Filter The Noise</h1>
<p>Get all the help you need to Learn, Launch, Grow and Scale your business today.</p>
<div className={styles.bkSt}>
<button className={styles.bkBtn}><p>Book Consultation</p></button>
<button className={styles.strtBtn}><p>Statrt Learning</p></button>
</div>

            </div>
            <div className={styles.sectionII}>

            </div>
        </header>
    )
}

export default Banner
