import Map from 'esri/map';


export default Ember.Component.extend({
  map: new Map("map", {
    center: [-118, 34.5],
    zoom: 8,
    basemap: 'topo'
  })
});



