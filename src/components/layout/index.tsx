import { Outlet } from 'react-router-dom';
import React, { Suspense } from 'react'
import './styles.css'

const Layout = () => {

    return (
        <>
            <div className='App_Container'>

                <main className="main-container">

                    <section className='section-page-content'>
                        <Suspense>
                            <Outlet />
                        </Suspense>
                    </section>
                </main>
            </div>
        </>
    )
}

export default React.memo(Layout) 