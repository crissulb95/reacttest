import React from 'react';

export default function Header({titulo}) { //antes(props), ahora con destructuring
    return (
    <h1 id='header' className="titulo"> {titulo}{/* antes props.titulo*/} </h1>
    );
}