import React from 'react'
import {cardData} from '../data'
import Button from './button'
import styles from './cards.module.css'

const Cards = () => {
    console.log(cardData)
    return (
        <div className={styles.cardCov}>
            <div className={styles.cardInn}>
            {
            cardData.map((data, index)=>{
         return(
             <>
            <div className={styles.card}>
                <h2>{data.name}</h2>
                <p className={styles.pCard}>
                    {data.content}
                </p>
                <h3>Features</h3>
                <ul className={styles.ul}>
                {data.features.map((featuresData, index)=>{
                  return(
                      
                          <div className={styles.features}>
                          <p>&#9745;</p><li key={index}>{featuresData}</li>
                          </div>
                    
                  )
                })}
                  </ul>
                  <div className={styles.btnDiv}>
                <Button text="Get Started" link="#"/>
                </div>
            </div>
            
            </>
             )
             
            })

            }
            
            </div>
        </div>
    )
}

export default Cards
