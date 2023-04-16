function shopCart() {
    return (
        <div className="background" style={{display: 'none'}}>
            <div className="drawer-modal">
                <div className="drawer-modal__top">
                    <h3 className='drawer-modal__header mb-30'>Shoping basket</h3>
                    <button className='closeModal clear'>
                        <svg className='removeImage' xmlns="http://www.w3.org/2000/svg" width={31} height={31} viewBox="0 0 32 32" fill="none" >
                            <rect x="0.5" y="0.5" width="31" height="31" rx="14" fill="none" stroke="#ababab"/>
                            <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 
                                15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021
                                20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#ababab" />
                        </svg>
                        {/* <img className='sneaker-add__image' width={31} height={31} src="./img/button.svg" alt="button" /> */}
                    </button>
                </div>
            
                <div className="drawer-modal__goods">
                    <div className="cartItem d-flex align-center mb-20">
                        <img className='cartItem__image mr-20' src="./img/sneakers/air-max.jpg" width={70} height={60} alt="air_max" />
                        <div className='cardContent mr-10'>
                            <p className='cardContent__text'> Мужские Кроссовки Nike Air Max 270 </p>
                            <b className='cardContent__price'>162 $</b>
                        </div>
                        <button className='removeFromBasket clear'>
                            <svg className='removeImage' xmlns="http://www.w3.org/2000/svg" width={31} height={31} viewBox="0 0 32 32" fill="none" >
                            <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="none" stroke="#F2F2F2"/>
                            <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 
                                15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021
                                20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
                            </svg>
                            {/* <img className='sneaker-add__image' width={31} height={31} src="./img/button.svg" alt="button" /> */}
                        </button>
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                        <img className='cartItem__image mr-20' src="./img/sneakers/air-max.jpg" width={70} height={60} alt="air_max" />
                        <div className='cardContent mr-10'>
                            <p className='cardContent__text'> Мужские Кроссовки Nike Air Max 270 </p>
                            <b className='cardContent__price'>162 $</b>
                        </div>
                        <button className='removeFromBasket clear'>
                            <svg className='removeImage' xmlns="http://www.w3.org/2000/svg" width={31} height={31} viewBox="0 0 32 32" fill="none" >
                                <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="none" stroke="#F2F2F2"/>
                                <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 
                                    15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021
                                    20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
                            </svg>
                            {/* <img className='sneaker-add__image' width={31} height={31} src="./img/button.svg" alt="button" /> */}
                        </button>
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                    <img className='cartItem__image mr-20' src="./img/sneakers/air-max.jpg" width={70} height={60} alt="air_max" />
                    <div className='cardContent mr-10'>
                    <p className='cardContent__text'> Мужские Кроссовки Nike Air Max 270 </p>
                    <b className='cardContent__price'>162 $</b>
                    </div>
                    <button className='removeFromBasket clear'>
                        <svg className='removeImage' xmlns="http://www.w3.org/2000/svg" width={31} height={31} viewBox="0 0 32 32" fill="none" >
                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="none" stroke="#F2F2F2"/>
                        <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 
                            15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021
                            20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
                        </svg>
                        {/* <img className='sneaker-add__image' width={31} height={31} src="./img/button.svg" alt="button" /> */}
                    </button>
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                    <img className='cartItem__image mr-20' src="./img/sneakers/air-max.jpg" width={70} height={60} alt="air_max" />
                    <div className='cardContent mr-10'>
                    <p className='cardContent__text'> Мужские Кроссовки Nike Air Max 270 </p>
                    <b className='cardContent__price'>162 $</b>
                    </div>
                    <button className='removeFromBasket clear'>
                        <svg className='removeImage' xmlns="http://www.w3.org/2000/svg" width={31} height={31} viewBox="0 0 32 32" fill="none" >
                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="none" stroke="#F2F2F2"/>
                        <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 
                            15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021
                            20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
                        </svg>
                        {/* <img className='sneaker-add__image' width={31} height={31} src="./img/button.svg" alt="button" /> */}
                    </button>
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                    <img className='cartItem__image mr-20' src="./img/sneakers/air-max.jpg" width={70} height={60} alt="air_max" />
                    <div className='cardContent mr-10'>
                    <p className='cardContent__text'> Мужские Кроссовки Nike Air Max 270 </p>
                    <b className='cardContent__price'>162 $</b>
                    </div>
                    <button className='removeFromBasket clear'>
                        <svg className='removeImage' xmlns="http://www.w3.org/2000/svg" width={31} height={31} viewBox="0 0 32 32" fill="none" >
                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="none" stroke="#F2F2F2"/>
                        <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 
                            15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021
                            20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
                        </svg>
                        {/* <img className='sneaker-add__image' width={31} height={31} src="./img/button.svg" alt="button" /> */}
                    </button>
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                    <img className='cartItem__image mr-20' src="./img/sneakers/air-max.jpg" width={70} height={60} alt="air_max" />
                    <div className='cardContent mr-10'>
                    <p className='cardContent__text'> Мужские Кроссовки Nike Air Max 270 </p>
                    <b className='cardContent__price'>162 $</b>
                    </div>
                    <button className='removeFromBasket clear'>
                        <svg className='removeImage' xmlns="http://www.w3.org/2000/svg" width={31} height={31} viewBox="0 0 32 32" fill="none" >
                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="none" stroke="#F2F2F2"/>
                        <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 
                            15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021
                            20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
                        </svg>
                        {/* <img className='sneaker-add__image' width={31} height={31} src="./img/button.svg" alt="button" /> */}
                    </button>
                    </div>
                </div>
                <ul className='totalInfo'>
                    <li className='totalInfo__item'>
                        <span className='totalInfo__text'>Загальна ціна:</span>
                        <div className='totalInfo__line'></div>
                        <b className='totalInfo__counter'>324$</b>
                    </li>
                    <li className='totalInfo__item'>
                        <span className='totalInfo__text'>Налог 5%:</span>
                        <div className='totalInfo__line'></div>
                        <b className='totalInfo__counter'>16.2$</b>
                    </li>
                </ul>
                <button className='drawer-modal__submit' type="submit"><span className='submitText'>Оформити замовлення</span><img src="./img/arrow.svg" alt="arrow" /></button>

            </div>
      </div>
    );
};

export default shopCart;