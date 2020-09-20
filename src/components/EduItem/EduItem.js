import React from 'react';

import './EduItem.css';

const EduItem = ({item}) => {
  return (

    <div className="card-body">
      {
        item.map((data) => (
          <>        
              <div className="cardHeader">
              
                <div className="edu-title">
                  <h4 className="card-title"><b>{data.Instituion}</b></h4>
                  <p className="h5 text-muted">{data.Title}</p>
                </div>
                
                </div>
                <br/>
                
            </>
          ))
      }
      
    </div>

  );
}

export default EduItem;