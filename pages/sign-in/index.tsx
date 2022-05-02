import React from 'react'
import Footer from '../../components/Footer/Footer'
import NewHeader from '../../components/NewHeader/NewHeader'


const signIn = () => {
    return (
        <div className='container'>
            <NewHeader />
            <h1 style={{ flexGrow: 1 }}>Sign In</h1>
            <Footer />
        </div>
    )
}

export default signIn