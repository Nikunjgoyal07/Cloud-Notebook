import React from 'react';

export default function Notecomponent(props) {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card border-primary shadow">
            <div className="card-body">
              <h3 className="card-title">{props.name}</h3>
              <p className="card-text">{props.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
