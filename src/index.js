import "./scss/main.scss";
import 'bootstrap';
import { initializeClock } from './countdown'
import { initMap } from './handleMaps'
const loadGoogleMapsApi = require('load-google-maps-api')



console.log("hello, world!");



initializeClock();
initMap();