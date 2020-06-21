import * as React from 'react'// Bootstrapのスタイルシート側の機能を読み込む
import * as ReactDOM from 'react-dom'
import Header from './ui/header/header'
import Information from './ui/information/infromation'
import Profile from './ui/profile/profile';
import Contact from './ui/contact/contact';


class App extends React.Component {

  
  render() {
    return (
        <div className="bg-light py-5">
          <Profile/>
          <Information/>
          <Contact/>
        </div>
    )
  }
}

ReactDOM.render(<Header/>,document.querySelector('#header'))
ReactDOM.render(<App/>, document.querySelector('#app'))