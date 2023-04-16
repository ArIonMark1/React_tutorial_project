import './App.css';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ShopCart from './components/Cart';

function App() {
  return (
    <div className="wrapper clear">
      <ShopCart />
      <main className='mainContent'>
        <Header />
        {/* ########################################### */}
        <section className='content p-40'>
          <div className="top-content d-flex justify-between">
            <h2 className='top-content__header'>All sneakers</h2>
            <div className="top-content__searching d-flex">
              <img src="./img/search.svg" width={18} height={18} alt="search" />
              <input className='search-input' type="text" placeholder='searching...' />
            </div>
            
          </div>

          <div className="content-field d-flex">
            {/* ########################################### */}
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

          </div>

        </section>
      </main>
    </div>
  );
}

export default App;
