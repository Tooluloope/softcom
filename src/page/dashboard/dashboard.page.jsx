import React from 'react';
import './dashboard.style.css'
import { Link } from 'react-router-dom';




export const Dashboard = () => {
   
    return(
            <>
            <nav className='isnav'>
                <header>
                    <span></span>
                </header>
                <ul>            
                    <li>Navigation</li>
                    <li><Link className="active" to='/' >Dashboard</Link></li>
                </ul>
            </nav>
            <main>
                <>
                    <h1>Dashboard</h1>
                    <div className="flex-grid">
                       <p>Welcome to Softcom!</p>
                    </div>
                </>
            </main>
        </>
    )
}


