import * as React from 'react'
import Icon from './icon'
import Name from './name'
import Prose from './prose'

export default class Header extends React.Component{
    render(){
        return <div className='container my-3 text-center'>
            <div>
                <Icon/>
                <Name/>
                <hr className='mb-5'/>
                <Prose/>
                <div className='my-5 py-5'/>
            </div>
        </div>
    }
}