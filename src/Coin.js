import React from 'react'

const Coin = ({name, image, symbol, price, volume, priceChange}) => {
  return (
    <div className='container'>
        <div className='coin-row'>
            <div className=' coin'>
                <img src={image} alt='crypto'/>
                <h1 className='coin-name' >{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className='col-6 coin-data'>
                <p className='coin-price'>{price.toFixed(2)}€</p>
                <p className='hide-mobile coin-volume'>{volume.toLocaleString()}€</p>
                {priceChange < 0 ? (
                    <p className='coin-percent red'> {priceChange.toFixed(2)}%</p>
                ) : (<p className='coin-percent green'> {priceChange.toFixed(2)}%</p>)}

            </div>
        </div>
    </div>
  );
};

export default Coin