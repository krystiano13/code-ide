import React from "react";
import './Loading.css';

const Loading = () => {
    return (
      <div className="p-fixed loadingWrapper width-100 height-100 d-flex jc-center ai-center">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    );
}

export { Loading };