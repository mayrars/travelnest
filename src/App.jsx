import './App.css'
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <>
      <Header />
      <section className={`bg-center bg-no-repeat bg-gray-100 bg-blend-multiply principal-image`}>
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-48">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-8xl principal-title">
                Trip with us
              </h1>
              <h2 className="mb-8 text-lg font-normal text-white md:text-5xl lg:text-9xl second-title">Travel hub</h2>
              <h3 className="mb-8 text-lg font-normal text-white md:text-5xl lg:text-5xl principal-title">Plan your trips with us</h3>
          </div>
          <div className="px-2 mx-auto max-w-screen-xl text-center py-24 lg:py-5">
              <Search />
          </div>
      </section>
    </>
  )
}

export default App
