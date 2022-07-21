import React from 'react';

export default function PriceCard(){
  return (
  <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Plus</h5>
            <h6 class="card-price text-center">$9<span class="period">/month</span></h6>
            <hr></hr>
            <ul className="fa-ul">
           {
           data.features.map((list)=>{
              return (
              <li className={list.isEnable ?'':'text-muted'}>
                <span className="fa-li">
                  <li className="fas fa-check"></li>
                </span>
                {list.name}
              </li>
              );
            })
           }
           </ul>
            <div class="d-grid">
              <a href="/" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
  );
}
