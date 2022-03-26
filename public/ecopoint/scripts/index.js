mapboxgl.accessToken = 'pk.eyJ1IjoiYWxla3NrdWRyIiwiYSI6ImNrdjUzYnA0MTAzZnMydnBqMHlpNnlqYnQifQ.48QtBK6SnDT_9gaLT6LJuA';

const size = 100;
const pdkIndex = {
  ALL: 0.5,
  CO: 5,
  SO2: 0.5,
  CH4: 50,
  H2S: 0.008,
  NH3: 0.2,
  NO: 0.2,
  NO2: 0.4,
  O3: 0.16,
  PM10: 0.3,
  'PM2.5': 0.16,
  C6H6: 0.3,
  C10H8: 0.007,
  C8H8: 0.003,
  C7H8: 0.6,
  C6H5OH: 0.01,
  CH20: 0.05
};
const data = [
  {
    name: 'Академика Анохина',
    address: 'город Москва, улица Академика Анохина, дом 38, корпус 1',
    lat: 55.658163,
    lng: 37.471434
  },
  { name: 'Бутлерова', address: 'город Москва, улица Бутлерова, дом 15', lat: 55.649412, lng: 37.535874 },
  { name: 'Глебовская', address: 'город Москва, Глебовская улица, дом 3, корпус 1', lat: 55.811801, lng: 37.71249 },
  {
    name: 'Коптевский бул',
    address: 'город Москва, Коптевский бульвар, дом 16, корпус 1, строение 1',
    lat: 55.833222,
    lng: 37.525158
  },
  { name: 'Марьино', address: 'город Москва, Новомарьинская улица, дом 7', lat: 55.652695, lng: 37.751502 },
  { name: 'Останкино', address: 'город Москва, улица Академика Королёва, дом 15А', lat: 55.821154, lng: 37.612592 },
  {
    name: 'Пролетарский проспект',
    address: 'город Москва, Пролетарский проспект, дом 29',
    lat: 55.635129,
    lng: 37.658684
  },
  { name: 'Спиридоновка', address: 'город Москва, улица Спиридоновка, дом 10', lat: 55.759354, lng: 37.595584 },
  { name: 'Туристская', address: 'город Москва, Туристская улица, дом 18', lat: 55.856324, lng: 37.426628 },
  { name: 'Шаболовка', address: 'город Москва, Дальний переулок, дом 2, корпус 1', lat: 55.715698, lng: 37.6052377 }
];
const hemicalButton = [...document.querySelectorAll('.hemical-setting')];
const timeRange = document.querySelector('#timeRange');
let h3DataHimical;
let timeIndex = '3';
let hemicalIndex = 'NO';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [37.6156, 55.7522],
  zoom: 12
});

// This implements `StyleImageInterface`
// to draw a pulsing dot icon on the map.
const pulsingDot = {
  width: size,
  height: size,
  data: new Uint8Array(size * size * 4),

  // When the layer is added to the map,
  // get the rendering context for the map canvas.
  onAdd: function () {
    const canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    this.context = canvas.getContext('2d');
  },

  // Call once before every frame where the icon will be used.
  render: function () {
    const duration = 1000;
    const t = (performance.now() % duration) / duration;

    const radius = (size / 2) * 0.3;
    const outerRadius = (size / 2) * 0.7 * t + radius;
    const context = this.context;

    // Draw the outer circle.
    context.clearRect(0, 0, this.width, this.height);
    context.beginPath();
    context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
    context.fillStyle = `rgba(102, 111, 232, ${1 - t})`;
    context.fill();

    // Draw the inner circle.
    context.beginPath();
    context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
    context.fillStyle = 'rgba(102, 111, 232, 1)';
    context.strokeStyle = '#666FE8';
    context.lineWidth = 2 + 4 * (1 - t);
    context.fill();
    context.stroke();

    // Update this image's data with data from the canvas.
    this.data = context.getImageData(0, 0, this.width, this.height).data;

    // Continuously repaint the map, resulting
    // in the smooth animation of the dot.
    map.triggerRepaint();

    // Return `true` to let the map know that the image was updated.
    return true;
  }
};

hemicalButton.forEach(element => {
  element.addEventListener('click', e => {
    e.preventDefault();
    const spinner = document.querySelector('.spinner-border');
    spinner.hidden = false;
    const oldHemical = document.querySelector('.active.hemical-setting');
    oldHemical.classList.remove('active');
    element.classList.add('active');
    hemicalIndex = element.id;
    document.querySelector('.hemical-active').innerHTML = element.id;
    load();
  });
});

timeRange.addEventListener('change', e => {
  if (['4', '5', '6'].includes(e.target.value)) {
    e.target.value = '6';
  }
  timeIndex = e.target.value;
  const spinner = document.querySelector('.spinner-border');
  spinner.hidden = false;

  load();
});

const load = () => {
  getJSON(`/ecopoint/data/${hemicalIndex}-${timeIndex}.json`).then(info => {
    h3DataHimical = info;
    render();
  });
};

fetch('/ecopoint/results.json')
  .then(response => response.json())
  .then(data => {
    Object.keys(data).forEach(v => {
      document.querySelector(`#${v}`).value = data[v];
    });
  });

// start code after map loaded
map.on('load', () => {
  load();

  map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });

  map.addSource('dot-point', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: data.map(c => {
        return {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [c.lng, c.lat] // icon position [lng, lat]
          },
          properties: {
            description: `<strong>${c.name}</strong><label>${c.address}</label>
                        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Сейчас</th>
      <th scope="col">Через 24 часа</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>• СО 0,0267 ПДК  </td>
      <td>• 0,0267 ПДК   </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>• NO2 0,2097 ПДК</td>
      <td>• 0,2097 ПДК </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>• CН4 0,2097 ПДК</td>
      <td>• 0,2097 ПДК </td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>• O3 0,2097 ПДК</td>
      <td>• 0,2097 ПДК  </td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>• PM10 0,2097 ПДК</td>
      <td>• 0,2097 ПДК </td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>• PM2,5 0,2097 ПДК</td>
      <td>• 0,2097 ПДК  </td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>• H2S 0,2097 ВОЗ</td>
      <td>• 0,2097 ВОЗ </td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>• SO2 0,2097 ПДК</td>
      <td>• 0,2097 ПДК </td>
    </tr>
  </tbody>
</table>
                        
                        
                        `,
            icon: 'bar-15'
          }
        };
      })
    }
  });
  map.addLayer({
    id: 'layer-with-pulsing-dot',
    type: 'symbol',
    source: 'dot-point',
    layout: {
      'icon-image': 'pulsing-dot'
    }
  });

  // When a click event occurs on a feature in the places layer, open a popup at the
  // location of the feature, with description HTML from its properties.
  map.on('click', 'layer-with-pulsing-dot', e => {
    // Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new mapboxgl.Popup().setLngLat(coordinates).setHTML(description).addTo(map);
  });

  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on('mouseenter', 'layer-with-pulsing-do', () => {
    map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'layer-with-pulsing-do', () => {
    map.getCanvas().style.cursor = '';
  });

  document.querySelector('#OnOff').addEventListener('change', e => {
    if (e.target.checked) {
      renderHexes({});
    } else {
      load();
    }
  });
});

document.querySelector('#models-form').addEventListener('submit', e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  fetch(e.target.action, {
    method: 'post',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  });
});
