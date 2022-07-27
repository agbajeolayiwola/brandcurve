import React from 'react'
import styles from './layout.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navCov}>
            <div className={styles.navInn}>
            <div>
                <h1>BrandCurve</h1>
            </div>
            <div className={styles.navMid}>
                <div>
                    <h6 className={styles.navRoutes}>What We Do</h6>
                </div>
                <div>
                    <h6 className={styles.navRoutes}>Project</h6>
                </div>
                <div>
                    <h6 className={styles.navRoutes}>About Us</h6>
                </div>
                <div>
                    <h6 className={styles.navRoutes}>Plan</h6>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.bookCon}>Book Consultation</div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar
