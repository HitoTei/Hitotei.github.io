import * as React from 'react'
import Tile from './tile'

export default class Information extends React.Component{
    render(){
        const titles = new Map<string,Array<string>>()
        titles.set('Likes',['睡眠','競プロ','コーヒー'])
        titles.set('Skills',['競プロ(AtCoder緑)','flutter','android app'])
        titles.set('Languages' , ['C/C++','Kotlin','Dart'])
        titles.set('Interest' , ['設計','web','DDD','低レイヤ(少し)'])
        titles.set('Qualification' , ['基本情報技術者試験'])
        titles.set('Works' , ['githubみて'])
        
        const tileList: Array<React.ReactElement> = []
        titles.forEach(
            (value,key) => tileList.push(
                <div className='col-lg-3  mx-auto'>
                    <Tile title = {key} contents = {value} key={key}/>
                </div>
            )
        )
        console.log(titles.size);
        
        return <div className='container mt-5'>
            <h1>ABOUT ME</h1>
            <hr className='mb-5'/>
            <div className='row'>
                {tileList}
            </div>
        </div>
    }
}