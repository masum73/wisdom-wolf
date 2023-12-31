import './App.css'
import Blog from './components/Blog/Blog'
import Header from './components/Header/Header'
import Wisdom from './components/Wisdom/Wisdom'

function App() {
  return (
    <div className="App flex flex-col items-center justify-center">
      <Header></Header>
      <Wisdom></Wisdom>
      <Blog></Blog>
    </div>
  )
}

export default App
