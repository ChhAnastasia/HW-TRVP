import React from 'react';
import "./header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <i className='fa fa-plane' style={{fontSize: '45px', color:'white', marginRight: '15px'}}></i>
        Личный кабинет сотрудника
      </div>
    </div>
  );
};

export default Header;
