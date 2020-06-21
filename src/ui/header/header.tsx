import * as React from 'react'
import Icon from './icon'
import Name from './name'
import Some from './some'

export default class Header extends React.Component{
    render(){
        return <div className='container my-3 text-center'>
            <div>
                <Icon/>
                <Name/>
                <hr className='mb-5'/>
                <Some/>
                <div className='my-5 py-5'/>
            </div>
        </div>
    }
}