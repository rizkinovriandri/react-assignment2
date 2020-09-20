import React from 'react';

import './Awards.css';

const Awards = () => {
  return (
    <div className="content">

      <div className="card">
        <div className="card-body">

        <div className="title"><h1>Awards</h1></div>
          <br/>
           Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          <br/>
          <br/><br/>
            <ul class="list-unstyled">
              <li class="media">
                <img id="instanceLogo" src="https://www.iconfinder.com/data/icons/education-flat-7/128/39_Trophy-512.png" class="mr-3" alt="trophy"/>
                <div class="media-body">
                  <h5 class="mt-0 mb-1">Juara Lomba Makan Kerupuk</h5>
                  Fusce condimentum nunc ac nisi vulputate fringilla.
                </div>
              </li>
              <li class="media my-4">
                <img id="instanceLogo" src="https://www.iconfinder.com/data/icons/education-flat-7/128/39_Trophy-512.png" class="mr-3" alt="trophy"/>
                <div class="media-body">
                  <h5 class="mt-0 mb-1">Juara Marathon Menonton Serial Netflix</h5>
                  Donec lacinia congue felis in faucibus
                </div>
              </li>
              
            </ul>
            
          
          </div>
          </div>
        
    </div>
  );
}

export default Awards;