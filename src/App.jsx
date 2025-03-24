import './App.css'
import Header from './components/Header';
//importar imagen
import backprincipal from './assets/images/machupichu.jpg';

function App() {
  return (
    <>
      <Header />
      <section  className={`bg-[url(${backprincipal})] bg-cover bg-center bg-no-repeat principal-image`}>
        <img src={backprincipal}></img>
      </section>
    </>
  )
}

export default App
