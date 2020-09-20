import React from 'react';

import './Skills.css';

const Skills = () => {
  return (
    <div className="content">

      <div className="card">
        <div className="card-body">

        <div className="title"><h1>Skills</h1></div>
          <br/>
          In gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, Cras sit amet nibh libero,  vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          <br/>
          <br/><br/>

          <p>Procurement</p>
            <div class="containerSkill">
              <div class="skills procurement">65%</div>
            </div>

            <p>Coding</p>
            <div class="containerSkill">
              <div class="skills coding">80%</div>
            </div>

            <p>Sleeping</p>
            <div class="containerSkill">
              <div class="skills nap">60%</div>
            </div>

            <p>Gaming</p>
          <div class="containerSkill">
              <div class="skills gaming">90%</div>
            </div>
          
          </div>
          </div>
        
    </div>
  );
}

export default Skills;