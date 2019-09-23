// React di oerlukan untk dapat membuat / membaca / mengetahui cara kerja dari komponent
import React from 'react'
// React DOM akan me render komponen app di file index.html di tag dic id root
import ReactDOM from 'react-dom'
// App ada komponen induk dari semua komponen yang ada
// komponen yang di butuhkan akan berkumpul di app.js
// di import  
import App from './component/App.jsx'

ReactDOM.render(
    <App />,
    document.getElementById('root')
)