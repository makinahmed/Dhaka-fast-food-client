import React from 'react';
import './menulist.css';
import coldDrinks from '../../asstes/Cold Drinks.png';
function MenuList( ) {
    return (
        <div className='menu-list-container'>
            <div className='menu-img'>
                <img src={coldDrinks} alt="" />
                <h3>COMBO</h3>
            </div><div className='menu-img'>
                <img src={coldDrinks} alt="" />
                <h3>COMBO</h3>
            </div><div className='menu-img'>
                <img src={coldDrinks} alt="" />
                <h3>COMBO</h3>
            </div><div className='menu-img'>
                <img src={coldDrinks} alt="" />
                <h3>COMBO</h3>
            </div><div className='menu-img'>
                <img src={coldDrinks} alt="" />
                <h3>COMBO</h3>
            </div><div className='menu-img'>
                <img src={coldDrinks} alt="" />
                <h3>COMBO</h3>
            </div><div className='menu-img'>
                <img src={coldDrinks} alt="" />
                <h3>COMBO</h3>
            </div><div className='menu-img'>
                <img src={coldDrinks} alt="" />
                <h3>COMBO</h3>
            </div><div className='menu-img'>
                <img src={coldDrinks} alt="" />
                <h3>COMBO</h3>
            </div>
        </div>
    );
}

export default MenuList;