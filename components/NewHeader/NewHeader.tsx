import React from 'react'
import styles from './NewHeader.module.scss';
import Image from 'next/image'
import Link from 'next/link'

const NewHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <Link href="/" replace={true}>
                        <a>
                            <img src='images/Veggy.png' alt="logo" className={styles.logo} />
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default NewHeader