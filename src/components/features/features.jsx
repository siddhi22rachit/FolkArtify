import React from 'react';
import './features.css';

const Features =() =>{
  return (
    <div className="panel">
            <div className="panel-item">
                <div className="panel-title"><i className="fa-solid fa-dolly"></i>FREE SHIPPING</div>
                <div className="panel-description">Free Shipping on all orders from the orders of Rs. 499 or more.</div>
            </div>
            <div className="panel-item">
                <div className="panel-title"><i className="fa-solid fa-circle-question"></i>SUPPORT 24/7</div>
                <div className="panel-description">Contact us 24 hours a day, 7 days a week.</div>
            </div>
            <div className="panel-item">
                <div className="panel-title"><i className="fa-solid fa-rotate-left"></i>EASY RETURNS</div>
                <div className="panel-description">Easy returns within 7 days or opt for an exchange.</div>
            </div>
            <div className="panel-item">
                <div className="panel-title">
                    <i className="fa-solid fa-lock"></i>100% PAYMENT SECURE
                </div>
                <div className="panel-description">Your payment methods are 100% secure and safe.</div>
            </div>
        </div>
  );
}

export default Features;