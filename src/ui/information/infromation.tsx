import * as React from 'react'
import Tile from './tile'

export default class Information extends React.Component{
    render(){
        const titles = new Map<string,Array<string>>()
        titles.set('Likes',['睡眠','競プロ','コーヒー'])
        titles.set('Skills',['競プロ(AtCoder緑)','Flutter','Android app', 'RL (Ml-Agents)'])
        titles.set('Languages' , ['C/C++','Kotlin','Dart', 'C#', 'Python'])
        titles.set('Interest' , ['Web', 'RL', 'ANN', ])
        titles.set('Qualification' , ['基本情報技術者試験', "応用情報技術者試験", "TOEIC 775"])
        titles.set('Intern' , ['Cybozu Android2week (2023 8/21 ~ 9/1)'])
        titles.set('Works' , ['githubみて！'])
        
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
