let eContrl;
function openMenu(e) {
  let menu = document.querySelector('#openMenu');
  let menuTap = document.querySelectorAll('.tapMenu');
  let script = document.querySelectorAll('.script');

  let icon = document.querySelectorAll('.icon_change');

  if (e == 'buttonClosed') {
    setTimeout(() => {
      menuTap[0].style.borderRadius = '15px 0 0 15px';
      menuTap[4].style.borderRadius = '0 15px 15px 0';
      menuTap[e].style.backgroundColor = 'hsla(0, 0%, 100%, 1)';
      icon[e].src = '/main/img/' + (e + 1) + '_active.svg';
    }, 1000);
    appearMenu(1);
    smoothClosed();
    closedClosed();
  }

  for (let i = 0; i < menuTap.length; i++) {
    menuTap[i].style.backgroundColor = 'hsla(0, 0%, 100%, 1)';
    icon[i].src = '/main/img/' + (i + 1) + '_active.svg';
  }

  if (e != 'start') {
    for (let i = 0; i < script.length; i++) {
      if (script[i].style.display != 'none') {
        script[i].style.display = 'none';
      } else {
        script[i].style.display = 'block';
      }
    }

    icon[e].src = '/main/img/' + (e + 1) + '_disabled.svg';
    menuTap[0].style.borderRadius = '15px 0 0 0';
    menuTap[4].style.borderRadius = '0 15px 0 0';

    if (e == '0') {
      menuOpen0();
      menuTap[0].style.backgroundColor = 'hsla(46, 100%, 59%, 1)';
    } else if (e == '1') {
      menuOpen1();
      menuTap[1].style.backgroundColor = 'hsla(11, 94%, 65%, 1)';
    } else if (e == '2') {
      menuOpen2();
      menuTap[2].style.backgroundColor = 'hsla(144, 57%, 57%, 1)';
    } else if (e == '3') {
      menuOpen3();
      menuTap[3].style.backgroundColor = 'hsla(285, 100%, 74%, 1)';
    } else if (e == '4') {
      menuOpen4();
      menuTap[4].style.backgroundColor = 'hsla(252, 59%, 59%, 1)';
    }

    if (menu.style.display != 'block') {
      menu.style.display = 'block';
      disAppearMenu();
      smoothOpen();
      openClosed();
    } else if (eContrl === e) {
      setTimeout(() => {
        menuTap[0].style.borderRadius = '15px 0 0 15px';
        menuTap[4].style.borderRadius = '0 15px 15px 0';
        menuTap[e].style.backgroundColor = 'hsla(0, 0%, 100%, 1)';
        icon[e].src = '/main/img/' + (e + 1) + '_active.svg';
      }, 1000);
      appearMenu(1);
      smoothClosed();
      closedClosed();
    }

    eContrl = e;
  } else {
    menuTap[0].style.borderRadius = '15px 0 0 15px';
    menuTap[4].style.borderRadius = '0 15px 15px 0';
  }
}
openMenu('start');

function openClosed() {
  let block = document.querySelector('#closedMenuBack');

  let x = 10;
  block.style.right = '10px';

  function rightMenu() {
    x--;

    block.style.right = x + 'px';

    if (x > -41) {
      setTimeout(rightMenu, 10);
    }
  }
  rightMenu();
}

function closedClosed() {
  let block = document.querySelector('#closedMenuBack');

  let x = -40;
  block.style.right = '-40px';

  function leftMenu() {
    x++;

    block.style.right = x + 'px';

    if (x < 11) {
      setTimeout(leftMenu, 10);
    }
  }
  leftMenu();
}

function appearMenu(n) {
  let menu = document.querySelector('#newsBlock');
  let buttonAdd = document.querySelector('#addButton');
  let menuContent = document.querySelector('#menuContent');

  let x = -250;
  let y = 0.0;
  menu.style.bottom = '-250px';
  menu.style.display = 'flex';
  if (n != 1) {
    buttonAdd.style.display = 'block';
    buttonAdd.style.opacity = '0';
    menuContent.style.display = 'block';
    menuContent.style.opacity = '0';
  } else {
    appearMenuButton();
  }

  function upMenu() {
    x += 5;

    menu.style.bottom = x + 'px';

    if (x < 0) {
      setTimeout(upMenu, 10);
    }
  }

  function appearBut() {
    y += 0.1;

    buttonAdd.style.opacity = y;
    menuContent.style.opacity = y;

    if (y < 1) {
      setTimeout(appearBut, 100);
    }
  }

  upMenu();
  if (n != 1) {
    appearBut();
  }
}
setTimeout(appearMenu, 1000);

function disAppearMenu() {
  let menu = document.querySelector('#newsBlock');

  let x = 0;
  menu.style.bottom = '250px';
  menu.style.display = 'flex';

  function downMenu() {
    x -= 5;

    menu.style.bottom = x + 'px';

    if (x > -250) {
      setTimeout(downMenu, 10);
    }
  }

  downMenu();
  disAppearMenuButton();
}

function disAppearMenuButton() {
  let menu = document.querySelector('#addButton');

  let x = 270;
  menu.style.bottom = '270px';

  function downButton() {
    x -= 5;

    menu.style.bottom = x + 'px';

    if (x > 20) {
      setTimeout(downButton, 10);
    }
  }

  downButton();
}

function appearMenuButton() {
  let menu = document.querySelector('#addButton');

  let x = 20;
  menu.style.bottom = '20px';

  function upButton() {
    x += 5;

    menu.style.bottom = x + 'px';

    if (x < 270) {
      setTimeout(upButton, 10);
    }
  }

  upButton();
}

function smoothOpen() {
  let openMenu = document.querySelector('#openMenu');
  let contentMenu = document.querySelector('#contentMenu');

  openMenu.style.height = '0px';
  let x = 0;

  function openField() {
    x += 5;

    openMenu.style.height = x + 'px';
    contentMenu.style.height = document.body.clientHeight - 300 + 'px';

    if (x < document.body.clientHeight - 200) {
      setTimeout(openField, 10);
    }
  }
  openField();
}

function smoothClosed() {
  let openMenu = document.querySelector('#openMenu');

  openMenu.style.height = '440px';
  let x = 440;

  function closedField() {
    x -= 5;

    openMenu.style.height = x + 'px';

    if (x > -5) {
      setTimeout(closedField, 10);
    } else {
      openMenu.style.display = 'none';
    }
  }
  closedField();
}

function modalOpenClosed(n) {
  let modal = document.querySelector('#blackBack');
  let modalWindow = document.querySelector('#modalWindow');
  let modalWindowThanks = document.querySelector('#modalWindowThanks');
  let closedModal2 = document.querySelector('#closedModal2');

  if (modal.style.display != 'block') {
    modal.style.display = 'block';
    modalWindow.style.display = 'block';
    closedModal2.style.display = 'none';
  } else {
    modal.style.display = 'none';
    modalWindow.style.display = 'none';
  }
  if (n == 'thanks') {
    modal.style.display = 'block';
    modal.style.backgroundColor = 'hsla(0, 0%, 0%, 0)';
    modalWindowThanks.style.display = 'block';
    setTimeout(() => {
      modal.style.display = 'none';
      modal.style.backgroundColor = 'hsla(0, 0%, 0%, 0.8)';
      modalWindowThanks.style.display = 'none';
    }, 3000);
  }
}

function openAnotherInfo(e) {
  let modal = document.querySelectorAll('.discriptionPoint');
  let scrollDown = document.querySelector('#contentMenu');
  let modalImg = document.querySelector('#imgBig');

  if (modal[e].style.display != 'block') {
    modal[e].style.display = 'block';
    let x = 0;

    function down() {
      x++;
      scrollDown.scrollTop = scrollDown.scrollTop + x;

      if (x < 15) {
        setTimeout(down, 10);
      }
    }

    down();
  } else {
    modal[e].style.display = 'none';
    modalImg.src = '';
    modalImg.style.display = 'none';
    let x = 0;

    function down() {
      x++;
      scrollDown.scrollTop = scrollDown.scrollTop - x;

      if (x < 15) {
        setTimeout(down, 10);
      }
    }

    down();
  }
}

function bigPhoto(e) {
  let modalImg = document.querySelector('#imgBig');
  let modal = document.querySelector('#blackBack');
  let closedModal2 = document.querySelector('#closedModal2');

  modalImg.src = e.src;
  modalImg.style.display = 'block';
  modal.style.display = 'block';
  closedModal2.style.display = 'block';
}

for (let i = 0; i < 5; i++) {
  document.querySelectorAll('.boxIcon')[i].style.border = '3px solid hsla(252, 59%, 59%, 0)';
  document.querySelectorAll('.boxIconInner')[i].style.border = '1px solid hsla(252, 59%, 59%, 0)';
}
document.querySelectorAll('.boxIcon')[0].style.border = '3px solid hsla(252, 59%, 59%, 0.5)';
document.querySelectorAll('.boxIconInner')[0].style.border = '1px solid hsla(210, 50%, 20%, 1)';

let butWinHere;

butWinHere =
  '<div class="blockForWindow">' +
  '<div class="color" onclick="butInnerUse(this, 0)"><b>Батарейки</b></div>' +
  '<div class="color" onclick="butInnerUse(this, 1)"><b>Пластик</b></div>' +
  '<div class="color" onclick="butInnerUse(this, 2)"><b>Бумага</b></div>' +
  '<div class="color" onclick="butInnerUse(this, 3)"><b>Одежда</b></div>' +
  '<div class="color" onclick="butInnerUse(this, 4)"><b>Бытовая техника</b></div>' +
  '</div>' +
  '<div class="blockForWindow">' +
  '<div class="color" onclick="butInnerUse(this, 5)"><b>Лампочки</b></div>' +
  '<div class="color" onclick="butInnerUse(this, 6)"><b>Стекло</b></div>' +
  '</div>';

document.querySelector('#butWinHere').innerHTML = butWinHere;

function changeButWindow(n) {
  for (let i = 0; i < 5; i++) {
    document.querySelectorAll('.boxIcon')[i].style.border = '3px solid hsla(252, 59%, 59%, 0)';
    document.querySelectorAll('.boxIconInner')[i].style.border = '1px solid hsla(252, 59%, 59%, 0)';
  }

  if (n == 1) {
    document.querySelectorAll('.boxIcon')[0].style.border = '3px solid hsla(252, 59%, 59%, 0.5)';
    document.querySelectorAll('.boxIconInner')[0].style.border = '1px solid hsla(210, 50%, 20%, 1)';

    butWinHere =
      '<div class="blockForWindow">' +
      '<div class="color" onclick="butInnerUse(this, 0)"><b>Батарейки</b></div>' +
      '<div class="color" onclick="butInnerUse(this, 1)"><b>Пластик</b></div>' +
      '<div class="color" onclick="butInnerUse(this, 2)"><b>Бумага</b></div>' +
      '<div class="color" onclick="butInnerUse(this, 3)"><b>Одежда</b></div>' +
      '<div class="color" onclick="butInnerUse(this, 4)"><b>Бытовая техника</b></div>' +
      '</div>' +
      '<div class="blockForWindow">' +
      '<div class="color" onclick="butInnerUse(this, 5)"><b>Лампочки</b></div>' +
      '<div class="color" onclick="butInnerUse(this, 6)"><b>Стекло</b></div>' +
      '</div>';
  } else if (n == 2) {
    document.querySelectorAll('.boxIcon')[1].style.border = '3px solid hsla(252, 59%, 59%, 0.5)';
    document.querySelectorAll('.boxIconInner')[1].style.border = '1px solid hsla(210, 50%, 20%, 1)';

    butWinHere =
      '<div class="blockForWindow">' +
      '<div class="color" onclick="butInnerUse(this, 7)"><b>Книги</b></div>' +
      '<div class="color" onclick="butInnerUse(this, 8)"><b>Одежда</b></div>' +
      '<div class="color" onclick="butInnerUse(this, 9)"><b>Продукты</b></div>' +
      '<div class="color" onclick="butInnerUse(this, 10)"><b>Хобби</b></div>' +
      '</div>';
  } else if (n == 3) {
    document.querySelectorAll('.boxIcon')[2].style.border = '3px solid hsla(252, 59%, 59%, 0.5)';
    document.querySelectorAll('.boxIconInner')[2].style.border = '1px solid hsla(210, 50%, 20%, 1)';

    butWinHere =
      '<div class="blockForWindow">' +
      '<div class="color" onclick="butInnerUse(this, 11)"><b>Транспорт</b></div>' +
      '<div class="color" onclick="butInnerUse(this, 12)"><b>Экомаршруты</b></div>' +
      '<div class="color" onclick="butInnerUse(this, 13)"><b>...</b></div>' +
      '</div>';
  } else if (n == 4) {
    document.querySelectorAll('.boxIcon')[3].style.border = '3px solid hsla(252, 59%, 59%, 0.5)';
    document.querySelectorAll('.boxIconInner')[3].style.border = '1px solid hsla(210, 50%, 20%, 1)';

    butWinHere =
      '<div class="blockForWindow">' +
      '<div class="color" onclick="butInnerUse(this, 14)"><b>Субботники</b></div>' +
      '<div class="color" onclick="butInnerUse(this, 15)"><b>Точки сбора экологистов</b></div>' +
      '<div class="color" onclick="butInnerUse(this, 16)"><b>...</b></div>' +
      '</div>';
  } else if (n == 5) {
    document.querySelectorAll('.boxIcon')[4].style.border = '3px solid hsla(252, 59%, 59%, 0.5)';
    document.querySelectorAll('.boxIconInner')[4].style.border = '1px solid hsla(210, 50%, 20%, 1)';

    butWinHere =
      '<div class="blockForWindow">' +
      '<div class="color" onclick="butInnerUse(this, 17)"><b>Статьи</b></div>' +
      '<div class="color" onclick="butInnerUse(this, 18)"><b>Материалы</b></div>' +
      '</div>';
  }

  document.querySelector('#butWinHere').innerHTML = butWinHere;
}

let arrButNum = [
  'false',
  'false',
  'false',
  'false',
  'false',
  'false',
  'false',
  'false',
  'false',
  'false',
  'false',
  'false',
  'false',
  'false',
  'false',
  'false',
  'false',
  'false',
  'false'
];

function butInnerUse(e, n) {
  if (e.style.backgroundColor != 'hsla(0, 0%, 60%, 1)' && e.style.backgroundColor != 'rgb(153, 153, 153)') {
    e.style.backgroundColor = 'rgb(153, 153, 153)';
    e.style.color = 'rgb(255, 255, 255)';
    arrButNum[n] = 'true';
  } else {
    e.style.backgroundColor = 'hsla(0, 0%, 100%, 1)';
    e.style.color = 'rgb(0, 0, 0)';
    arrButNum[n] = 'false';
  }
}

function butUpUse(e) {
  if (e.style.zIndex != '1') {
    e.style.backgroundColor = 'hsla(252, 59%, 59%, 1)';
    e.style.color = 'rgb(255, 255, 255)';
    e.style.zIndex = '1';
  } else {
    e.style.backgroundColor = 'hsla(0, 0%, 100%, 0)';
    e.style.color = 'rgb(0, 0, 0)';
    e.style.zIndex = '0';
  }
}

var LeafIcon = L.Icon.extend({
  options: {
    shadowUrl: '',
    iconSize: [32, 37],
    shadowSize: [51, 37],
    iconAnchor: [16, 37],
    shadowAnchor: [16, 37],
    popupAnchor: [0, -30]
  }
});

var pointFirstDemo = new LeafIcon({ iconUrl: '/main/img/Point.svg' });

let marker;
function initialize(e, left, right) {
  var mapnall;
  if (e == 'select') {
    panTo([Number(left), Number(right)]);
  } else {
    mapnall = L.map('obj_map', {
      center: [56.185, 36.981],
      zoom: 15
    });
  }

  L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(mapnall);
  if (e != 'select') {
    L.marker([56.19690433351169, 36.95694805333598], { icon: pointFirstDemo })
      .bindPopup(
        '<strong>Эльдорадо</strong><br><br>Пункт приема электротехники и батареек в магазине Эльдорадо, Иное, Батарейки, Бытовая техника.<br><br><b>г. Солнечногорск, Красная улица 157</b>'
      )
      .addTo(mapnall);
    L.marker([56.194134874016584, 36.96790219495273], { icon: pointFirstDemo })
      .bindPopup(
        '<strong>Перекресток</strong><br><br>Точка приема зубных щеток в магазине Перекресток, Иное.<br><br><b>г. Солнечногорск, Красная улица 15</b>'
      )
      .addTo(mapnall);
    L.marker([56.18014693407129, 36.95673347661434], { icon: pointFirstDemo })
      .bindPopup(
        '<strong>Перекресток</strong><br><br>Точка приема зубных щеток в магазине Перекресток, Иное.<br><br><b>г. Солнечногорск, Обуховская улица с44А</b>'
      )
      .addTo(mapnall);
    L.marker([56.18626205236132, 36.97470427701376], { icon: pointFirstDemo })
      .bindPopup(
        '<strong>Первый Экологический Сервис</strong><br><br>Контейнер для сбора опасных отходов от компании "Первый Экологический Сервис", Опасные отходы, Лампочки.<br><br><b>г. Солнечногорск, Почтовая улица, 9</b>'
      )
      .addTo(mapnall);
    L.marker([56.1889034569558, 36.976463806127306], { icon: pointFirstDemo })
      .bindPopup(
        '<strong>Первый Экологический Сервис</strong><br><br>Контейнер для сбора опасных отходов от компании "Первый Экологический Сервис", Опасные отходы, Лампочки.<br><br><b>г. Солнечногорск, Красная улица, 120</b>'
      )
      .addTo(mapnall);
    L.marker([56.18735393467215, 36.98250414082844], { icon: pointFirstDemo })
      .bindPopup(
        '<strong>ВкусВилл Батарейки</strong><br><br>Точка приема батареек в магазине ВкусВилл Батарейки.<br><br><b>г. Солнечногорск, ул. Дзержинского, д. 15А</b>'
      )
      .addTo(mapnall);
    L.marker([56.175434273986866, 36.99896217534477], { icon: pointFirstDemo })
      .bindPopup(
        '<strong>ВкусВилл Батарейки</strong><br><br>Точка приема батареек в магазине ВкусВилл Батарейки.<br><br><b>г. Солнечногорск, Красная ул., д. 22А</b>'
      )
      .addTo(mapnall);
  }

  getDataPoint();
  setTimeout(() => {
    for (let i = 0; i < arrCoordinats.length; i++) {
      console.log('arrCoordinats', arrCoordinats);
      console.log('arrCoordinats[i]', arrCoordinats[i]);
      L.marker([Number(arrCoordinats[i].coordinats.split(';')[0]), Number(arrCoordinats[i].coordinats.split(';')[1])], {
        icon: pointFirstDemo
      })
        .bindPopup(
          `<strong>${arrCoordinats[i].name_place}</strong><br><br>${arrCoordinats[i].discription}<br><br><b>${arrCoordinats[i].adress}</b>`
        )
        .addTo(mapnall);
    }
  }, 2000);

  let accept = document.querySelector('#addButton');
  let coords = document.querySelector('#coordinats');
  let discription = document.querySelector('#discription');

  accept.onclick = function (e) {
    let arrCoords = coords.value.split(';');
    marker = L.marker([arrCoords[0], arrCoords[1]], { icon: pointFirstDemo })
      .bindPopup(discription.value)
      .addTo(mapnall);
    modalOpenClosed('thanks');
    saveDataPoint();
  };

  mapnall.on('click', function (e) {
    modalOpenClosed();

    coords.value = e.latlng.lat + ';' + e.latlng.lng;
    // Отправляем данные AJAX
    // ...
  });
}

function editText(e) {
  let discription = document.querySelector('#discription');

  if (e == '0') {
    discription.value += '<br>';
  } else if (e == '1') {
    discription.value += '<b></b>';
  } else if (e == '2') {
    discription.value += '<i></i>';
  }
}

function clearAll() {
  document.querySelector('#coordinats').value = '';
  document.querySelector('#discription').value = '';
}
