import './App.css'
import Header from './components/Header' // 파일 확장자 생략 가능
import Main from './components/Main'
import Footer from './components/Footer'

function App() { // 부모 컴포넌트 (Root 루트 컴포넌트)

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
