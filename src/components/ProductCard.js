function productCard() {
    return (
        <div className='sneaker-card'>
            <div className="image-block">
                <label class="label-input" htmlFor="favorite1">
                    <input
                    class="checkbox is-hidden-checkbox"
                    type="checkbox"
                    name="favorite"
                    id="favorite1" />
                
                    <div className='svg-block'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='heart' width={12} height={12} viewBox="0 0 1024 1024">
                            <path d="M853.931 524.8c35.499-35.942 57.426-85.361 57.426-139.9 0-109.974-89.151-199.125-199.125-199.125-54.54 0-103.958 21.927-139.921 57.446l-60.311 60.311-60.331-60.331c-36.122-36.573-86.265-59.225-141.7-59.225-109.974 0-199.125 89.151-199.125 199.125 0 55.434 22.652 105.578 59.205 141.68l320.831 320.831c5.405 5.405 12.872 8.749 21.12 8.749s15.715-3.343 21.12-8.749l320.811-320.853zM914.261 585.131l-320.811 320.811c-20.846 20.842-49.643 33.733-81.451 33.733s-60.604-12.891-81.451-33.734l-320.853-320.81c-51.036-51.402-82.578-122.219-82.578-200.402 0-157.102 127.356-284.459 284.459-284.459 78.194 0 149.020 31.551 200.44 82.616l-0.016-0.016c51.248-50.172 121.476-81.132 198.935-81.132 157.102 0 284.459 127.356 284.459 284.459 0 77.459-30.96 147.687-81.181 198.985l0.049-0.050z"></path>
                        </svg>
                    </div>

                </label>
                <img className='image-block__image' width={133} height={112} src="./img/sneakers/Air-Max.jpg" alt="dcd" />
            </div>
            <h3 className='sneaker-card__text'>Мужские Кроссовки Nike Air Max 270</h3>
            <div className='d-flex justify-between align-center'>
                <div className='price-card d-flex flex-column'>
                    <span className='price-card__text text-uppercase'>price:</span>
                    <b className='price-card__price'>73$</b>
                </div>
                <button className='sneaker-add clear'>
                    <img className='sneaker-add__image' width={31} height={31} src="./img/button.svg" alt="button" />
                </button>
            </div>
        </div>
    );
};

export default productCard;