import React from 'react';

import './Interest.css';

const Interest = () => {
  return (
    <div className="content">

      <div className="card">
        <div className="card-body">

        <div className="title"><h1>Interest</h1></div>
          <br/>
          Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, Cras sit amet nibh libero,  vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          
          <div class="card-group">
            <div class="card" id="cardInt">
              <img id="intImg" class="card-img-top" src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="gaming"/>
              <div class="card-body">
                <h5 class="card-title">Gaming</h5>
                
              </div>
            </div>
            <div class="card">
              <img id="intImg" class="card-img-top" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="coding"/>
              <div class="card-body">
                <h5 class="card-title">Coding</h5>
               
              </div>
            </div>
            <div class="card">
              <img id="intImg" class="card-img-top" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="interior"/>
              <div class="card-body">
                <h5 class="card-title">Interior Design</h5>
               
              </div>
            </div>
          </div>
          
          </div>
          </div>
        
    </div>
  );
}

export default Interest;