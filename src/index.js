import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Component/Form';
function Layout(){
  return(
    <div>
    <Form />
    </div>
  )
}
ReactDOM.render(<Layout/>,document.getElementById('root'));