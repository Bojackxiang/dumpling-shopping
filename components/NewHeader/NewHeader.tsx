import React from 'react'
import styles from './NewHeader.module.scss';
import Image from 'next/image'


const NewHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <Image src={'/images/Veggy.png'} height="36" width={123} />
                </div>
            </div>
        </header>
    )
}

export default NewHeader