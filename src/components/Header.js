function header() {
    return (
        <header className='shop-header p-40'>
            <nav className='shop-header__navigation d-flex justify-between align-center'>
            <div className='shop-header__left-menu d-flex align-center'>

                <img className='logo mr-15' src="./img/logo.svg" alt="logo" />

                <div className='logo-content m-0'>
                <h1 className='logo-content__header text-uppercase'>React sneakers</h1>
                <p className='logo-content__describe'>Shop for the best sneakers</p>
                </div>  
            </div>
            <ul className='shop-header__right-menu d-flex'>
                <li className='mr-30'>

                <img className='mr-10' src="./img/cart.svg" width={18} height={18} alt="trolley" /> 
                100$</li>
                <li>
                    <img src="./img/user.svg" width={18} height={18} alt="user" />
                </li>
            </ul>
            </nav>
        </header>
    );
};

export default header;