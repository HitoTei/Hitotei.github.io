import * as React from 'react'
import Pair from '../../model/pair'

export default class Tile extends React.Component<Pair<Array<string>>>{
    render(){
        const tileElement = this.props.contents.map((str) => <li>{str}</li>)
        return <div className='my-3 container'>
                <h3 className=''>{this.props.title}</h3>
                <ul className='ml-2'>{tileElement}</ul>
            </div>

    }
}