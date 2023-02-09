import React from 'react';

function Empty({title}) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <p className="text-danger fs-1">{title}</p>
      </div>
    );
}

export default Empty;