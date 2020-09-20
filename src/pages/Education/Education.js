import React from 'react';

import './Education.css';

const Education = () => {
  return (
    <div className="content">

      <div className="card">
        <div className="card-body">

        <div className="title"><h1>Educations</h1></div>
          <br/>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          <br/>
          <br/><br/>
            <ul class="list-unstyled">
              <li class="media">
                <img id="instanceLogo" src="https://image.psikolif.com/wp-content/uploads/2018/10/Logo-USU-Ilmu-ilmu-Sosial-dan-Ilmu-Politik-Universitas-Sumatera-Utara.png" class="mr-3" alt="logo_usu"/>
                <div class="media-body">
                  <h5 class="mt-0 mb-1">Universitas Sumatera Utara</h5>
                  Sarjana Komputer, Fakultas Ilmu Komputer
                </div>
              </li>
              <li class="media my-4">
                <img id="instanceLogo" src="https://www.fonasba.com/wp-content/uploads/2020/02/ICC-Academy_logo_ScreensHigh-PNG-300x300.png" class="mr-3" alt="ICC"/>
                <div class="media-body">
                  <h5 class="mt-0 mb-1">International Chamber of Commerce (ICC)</h5>
                   Incotemrs 2020
                </div>
              </li>
              <li class="media">
                <img id="instanceLogo" src="https://fendiharis.com/wp-content/uploads/2020/03/hacktiv8.png" class="mr-3" alt="hacktiv"/>
                <div class="media-body">
                  <h5 class="mt-0 mb-1">Hacktiv8</h5>
                  React JS & React Native
                </div>
              </li>
            </ul>
            
          
          </div>
          </div>
        
    </div>
  );
}

export default Education;