import React from 'react'
import styles from './style.module.css'
import Button from '../../components/commons/button'
import Cards from '../../components/commons/cards'
import Banner from '../../components/Banner'
const HomeMain = () => {
    return (
        <div className={styles.homeCover}>
            <div className={styles.top}>
              <Banner/>
            </div>
            <Cards/>
        </div>
    )
}

export default HomeMain
