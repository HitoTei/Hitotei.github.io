import * as React from 'react'

export default class Tile extends React.Component<{icon: string,title: string,content: string}>{
    render(){
        return <div className='container my-3'>
            <div>    
                <h4 className='ml-2'>
                    <i className={this.props.icon + ' mx-1'}/>
                    {this.props.title}
                </h4>
            </div>
            <div>
                {this.props.content}
            </div>
        </div>
    }
}
