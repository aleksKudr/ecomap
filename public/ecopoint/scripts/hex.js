// config to map
const config = {
  lat: 55.658163,
  lng: 37.471434,
  zoom: 11.5,
  fillOpacity: 0.6,
  colorScale: ['rgba(0,255,0,0.8)', 'rgba(255,255,0,0.8)', 'rgba(255,0,0,0.8)']
};

// return json data from any file path (asynchronous)
function getJSON(path) {
  const spinner = document.querySelector('.spinner-border');
  spinner.hidden = false;
  return fetch(path).then(response => response.json());
}

function genRandomHexagons(r) {
  return r.map(e => {
    const centerHex = h3.geoToH3(e.lat, e.lng, 8);
    const kRing = h3.kRing(centerHex, 3);
    const ttt = kRing.reduce((res, hexagon) => ({ ...res, [hexagon]: Math.random() }), {});
    return ttt;
  });
}

function renderAreas(hexagons, threshold) {
  // Transform the current hexagon map into a GeoJSON object
  const geojson = geojson2h3.h3SetToFeature(Object.keys(hexagons).filter(hex => hexagons[hex] > threshold));

  const sourceId = 'h3-hex-areas' + Math.random();
  const layerId = `${sourceId}-layer`;
  let source = map.getSource(sourceId);
  // Add the source and layer if we haven't created them yet
  if (!source) {
    map.addSource(sourceId, {
      type: 'geojson',
      data: geojson
    });
    map.addLayer({
      id: layerId,
      source: sourceId,
      type: 'line',
      interactive: false,
      paint: {
        'line-width': 3,
        'line-color': config.colorScale[2]
      }
    });
    source = map.getSource(sourceId);
  }

  // Update the geojson data
  source.setData(geojson);
}

function renderHexes(hexagons) {
  // Transform the current hexagon map into a GeoJSON object
  const geojson = geojson2h3.h3SetToFeatureCollection(Object.keys(hexagons), hex => ({ value: hexagons[hex] }));

  const sourceId = 'h3-hexes';
  const layerId = `${sourceId}-layer`;
  let source = map.getSource(sourceId);

  // Add the source and layer if we haven't created them yet
  if (!source) {
    map.addSource(sourceId, {
      type: 'geojson',
      data: geojson
    });
    map.addLayer({
      id: layerId,
      source: sourceId,
      type: 'fill',
      interactive: false,
      paint: {
        'fill-outline-color': 'rgba(255,255,255,1)'
      }
    });
    source = map.getSource(sourceId);
  }

  // Update the geojson data
  source.setData(geojson);

  const pdk = getPDK();
  // Update the layer paint properties, using the current config values
  map.setPaintProperty(layerId, 'fill-color', {
    property: 'value',
    stops: [
      [0, config.colorScale[0]],
      [pdk, config.colorScale[1]],
      [pdk * 1.5, config.colorScale[2]]
    ]
  });

  map.setPaintProperty(layerId, 'fill-opacity', config.fillOpacity);

  // When a click event occurs on a feature in the places layer, open a popup at the
  // location of the feature, with description HTML from its properties.
  map.on('click', layerId, e => {
    const check = document.querySelector('.mapboxgl-popup');
    if (!check) {
      // Copy coordinates array.
      const coordinates = e.features[0].geometry.coordinates[0][2];
      const description = `${hemicalIndex}: ${e.features[0].properties.value}`;

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new mapboxgl.Popup().setLngLat(coordinates).setHTML(description).addTo(map);
    }
  });

  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on('mouseenter', layerId, () => {
    map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', layerId, () => {
    map.getCanvas().style.cursor = '';
  });

  const spinner = document.querySelector('.spinner-border');
  spinner.hidden = true;
}
