import React from 'react';

import './ExpItem.css';

const ExpItem = ({item}) => {
  return (

    <div className="card-body">
      {
        item.map((data) => (
          <>        
              <div className="cardHeader">
              
                <div className="exp-title">
                  <h4 className="card-title"><b>{data.expName}</b></h4>
                  <p className="h5 text-muted">{data.expTitle}</p>
                </div>
                <text className="expDate">{data.expFrom} - {data.expTo}</text>
                </div>
              
                <p className="card-text">{data.expDesc}</p>
            </>
          ))
      }
      
    </div>

  );
}

export default ExpItem;