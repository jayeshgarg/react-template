import React from 'react';
import ReactDOM from 'react-dom';

//All css from admin lte
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import 'admin-lte/dist/css/adminlte.css';

//main app
import App from './App';

//All scripts from adminlte
import 'jquery/dist/jquery';
import 'overlayscrollbars/js/jquery.overlayScrollbars';
import 'admin-lte/dist/js/adminlte';
import 'jquery-mousewheel/jquery.mousewheel';
import 'raphael/raphael';
import 'jquery-mapael/js/jquery.mapael';
import 'chart.js/dist/chart';
import 'bootstrap/dist/js/bootstrap.bundle';

ReactDOM.render(<App />, document.getElementById('app'));
// hot reloading. It works by replacing a module of the application
// during runtime with an updated one so that it’s available for instant use.
module.hot.accept();
