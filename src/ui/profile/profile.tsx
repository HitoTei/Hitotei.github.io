import * as React from 'react'
import Tile from './tile'
export default class Profile extends React.Component{

    tileList(): Array<React.ReactElement> {
            
        const titles = new Map<string,{title: string,content: string}>()
        titles.set('fas fa-birthday-cake',{title:'誕生日', content: '2002年9月29日'})
        titles.set('fas fa-school',{title:'所属', content:'ITF'})
        titles.set('fas fa-laptop',{title:'学科', content:'mast21'})
        titles.set('fas fa-male',{title: '性別', content:'男'})


        const tileList: Array<React.ReactElement> = []
        titles.forEach(
            (value,key) => tileList.push(
                <div className="col-md text-center my-3">
                    <Tile icon={key} title= {value.title} content={value.content}/>
                </div>
            )
        )

        return tileList
    }

    render(){
        return <div className='container mt-5'>
            <h1>PROFILE</h1>
            <hr className='mb-5'/>
            <div className='my-5'>
                <div className="row">
                    {this.tileList()}
                </div>
            </div>
        </div>
    }
}