import * as React from 'react'

export default class Contact extends React.Component{
    render(){
        return <div className='container my-5'>
            <h1>CONTACT</h1>
            <hr className='mb-5'/>
            <ul className='pt-1 list-inline text-center'>
                <li className='list-inline-item'>
                    <a href="https://twitter.com/Hito_Tei" 
                    className="btn btn-outline-secondary btn-social text-center">
                        <i className="fab fa-twitter fa-fw"/>
                    </a>
                </li>
                <li className='list-inline-item'>
                    <a href="https://github.com/HitoTei"
                    className="btn btn-outline-secondary btn-social text-center">
                        <i className='fab fa-github fa-fw'></i>
                    </a>
                </li>
            </ul>

        </div>
    }
}