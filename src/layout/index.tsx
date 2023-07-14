import { Outlet } from 'react-router-dom';
import React, { Suspense } from 'react'
import './styles.css'
import Header from '../components/organisms/header';

const Layout = () => {

    return (
        <>
            <div className='App_Container'>
                <Header />
                <main className="main-container">
                    <Suspense>
                        <Outlet />
                    </Suspense>
                </main>
            </div>
        </>
    )
}

export default React.memo(Layout) 