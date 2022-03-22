let dataInfo_1;
let dataInfo_2;
let dataInfo_3;
let dataInfo_4;
let dataInfo_5;

function saveDataPoint(){
    let data = JSON.stringify({filter: JSON.stringify(arrButNum).replaceAll("\"",'').replaceAll('[', '').replaceAll(']',''),
        name_place: document.querySelector('#namePlace').value,
        coordinats: document.querySelector('#coordinats').value,
        discription: document.querySelector('#discription').value,
        adress: document.querySelector('#adress').value,
        timework_1: document.querySelector('#timeWork_1').value,
        timework_2: document.querySelector('#timeWork_2').value,});
    return fetch("api/v1/point", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: data,
    }).then(async (response) => {
            let data = await response.text();
            console.log(data);
            getDataPoint();
    })
}

let arrCoordinats = [];

function getDataPoint(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);
            let arrData = data;
            let x = 0;
            
            for (let i = 0; i < arrData.length; i += 1){
                arrCoordinats[x] = arrData[i];
                x++;
            }
            
            for (let i = 0; i < arrData.length; i += 1){
                dataInfo_1 += '<div class="boxOfPoint">' +
                    '<div class="upBlockOfPoint" onclick="openAnotherInfo(7), initialize(\'select\', 56.175434273986866, 36.99896217534477)">' +
                        '<div class="leftPoint">' +
                            '<img src="img/Point.svg" alt="icon" width="65%" height="65%">' +
                        '</div>' +
                        '<div class="rightPoint">' +
                            '<div class="" style="display: none">' + arrData[i].name_place + '</div>' +
                            '<div class="upPoint">' + arrData[i].name_place + '</div>' +
                            '<div class="middlePoint">' +
                                '<div class="middleLeft">' + arrData[i].adress + '</div>' +
                                '<div class="middleRight">' + arrData[i].timework_1 + '-' + arrData[i].timework_2 + '</div>' +
                            '</div>' +
                            '<div class="bottomPoint">' + arrData[i].discription + '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="discriptionPoint">' +
                        '<div class="discOne">' +
                            '<div class="upDiscr" onclick="openAnotherInfo(7)">свернуть</div>' +
                            '<span>Можно сдать:</span>' +
                            '<ol class="listPadding">' +
                                '<li>батарейки</li>' +
                            '</ol>' +
                            '<br>' +
                            '<span>Описание отсутствует</span>' +
                        '</div>' +
                        '<div class="discTwo">' +
                            '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
                            '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
                        '</div>' +
                        '<div class="discThree"><span>Обновить информацию об объекте</span>&#160;&#160;<div class="classZ">!</div></div>' +
                    '</div>' +
                '</div>';
                
            }

            document.querySelector('#contentMenu').innerHTML += dataInfo_1;
        };
    };
    xhr.open("GET", "/api/v1/point", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send();
}

function menuOpen0(){
    let buttonData = '<div class="blockForMenu">' +
            '<span><b>СДАТЬ НА ПЕРЕРАБОТКУ</b></span>' +
        '</div>' +
        '<div class="blockForMenu">' +
            '<div onclick="butUpUse(this, 1)"><b>Батарейки</b></div>' +
            '<div onclick="butUpUse(this, 2)"><b>Пластик</b></div>' +
            '<div onclick="butUpUse(this, 3)"><b>Бумага</b></div>' +
            '<div onclick="butUpUse(this, 4)"><b>Одежда</b></div>' +
        '</div>' +
        '<div class="blockForMenu">' +
            '<div onclick="butUpUse(this, 5)"><b>Бытовая техника</b></div>' +
            '<div onclick="butUpUse(this, 6)"><b>Лампочки</b></div>' +
            '<div onclick="butUpUse(this, 7)"><b>Стекло</b></div>' +
            '<div onclick="butUpUse(this, 8)"><b>Иное</b></div>' +
        '</div>';
    
    document.querySelector('#buttonMenu').innerHTML = buttonData;
    document.querySelector('#buttonMenu').style.backgroundColor = 'hsla(46, 100%, 59%, 1)';
    document.querySelector('#contentMenu').innerHTML = dataInfo_1;
}

function startPoint(){
    dataInfo_1 = '<div class="boxOfPoint">' +
        '<div class="upBlockOfPoint" onclick="openAnotherInfo(0), initialize(\'select\', 56.19690433351169, 36.95694805333598)">' +
            '<div class="leftPoint">' +
                '<img src="img/Point.svg" alt="icon" width="65%" height="65%">' +
            '</div>' +
            '<div class="rightPoint">' +
                '<div class="upPoint">Перекресток</div>' +
                '<div class="middlePoint">' +
                    '<div class="middleLeft">г. Солнечногорск, Обуховская улица с44А</div>' +
                    '<div class="middleRight">10:00-18:00</div>' +
                '</div>' +
                '<div class="bottomPoint">Точка приема зубных щеток в магазине Перекресток.</div>' +
            '</div>' +
        '</div>' +
        '<div class="discriptionPoint">' +
            '<div class="discOne">' +
                '<div class="upDiscr" onclick="openAnotherInfo(0)">свернуть</div>' +
                '<span>Можно сдать:</span>' +
                '<ol class="listPadding">' +
                    '<li>зубные щетки</li>' +
                '</ol>' +
                '<br>' +
                '<span>Описание отсутствует</span>' +
            '</div>' +
            '<div class="discTwo">' +
                '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
                '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
            '</div>' +
            '<div class="discThree"><span>Обновить информацию об объекте</span>&#160;&#160;<div class="classZ">!</div></div>' +
        '</div>' +
    '</div>' +
    '<div class="boxOfPoint">' +
        '<div class="upBlockOfPoint" onclick="openAnotherInfo(1), initialize(\'select\', 56.194134874016584, 36.96790219495273)">' +
            '<div class="leftPoint">' +
                '<img src="img/Point.svg" alt="icon" width="65%" height="65%">' +
            '</div>' +
            '<div class="rightPoint">' +
                '<div class="upPoint">Эльдорадо</div>' +
                '<div class="middlePoint">' +
                    '<div class="middleLeft">г. Солнечногорск, Красная улица 157</div>' +
                    '<div class="middleRight">10:00-18:00</div>' +
                '</div>' +
                '<div class="bottomPoint">Пункт приема электротехники и батареек в магазине Эльдорадо.</div>' +
            '</div>' +
        '</div>' +
        '<div class="discriptionPoint">' +
            '<div class="discOne">' +
                '<div class="upDiscr" onclick="openAnotherInfo(1)">свернуть</div>' +
                '<span>Можно сдать:</span>' +
                '<ol class="listPadding">' +
                    '<li>электротехнику</li>' +
                    '<li>батарейки</li>' +
                    '<li>иное</li>' +
                '</ol>' +
                '<br>' +
                '<span>Описание отсутствует</span>' +
            '</div>' +
            '<div class="discTwo">' +
                '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
                '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
            '</div>' +
            '<div class="discThree"><span>Обновить информацию об объекте</span>&#160;&#160;<div class="classZ">!</div></div>' +
        '</div>' +
    '</div>' +
    '<div class="boxOfPoint">' +
        '<div class="upBlockOfPoint" onclick="openAnotherInfo(2), initialize(\'select\', 56.18014693407129, 36.95673347661434)">' +
            '<div class="leftPoint">' +
                '<img src="img/Point.svg" alt="icon" width="65%" height="65%">' +
            '</div>' +
            '<div class="rightPoint">' +
                '<div class="upPoint">Перекресток</div>' +
                '<div class="middlePoint">' +
                    '<div class="middleLeft">г. Солнечногорск, Красная улица 15</div>' +
                    '<div class="middleRight">10:00-18:00</div>' +
                '</div>' +
                '<div class="bottomPoint">Точка приема зубных щеток в магазине Перекресток.</div>' +
            '</div>' +
        '</div>' +
        '<div class="discriptionPoint">' +
            '<div class="discOne">' +
                '<div class="upDiscr" onclick="openAnotherInfo(2)">свернуть</div>' +
                '<span>Можно сдать:</span>' +
                '<ol class="listPadding">' +
                    '<li>зубные щетки</li>' +
                '</ol>' +
                '<br>' +
                '<span>Описание отсутствует</span>' +
            '</div>' +
            '<div class="discTwo">' +
                '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
                '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
            '</div>' +
            '<div class="discThree"><span>Обновить информацию об объекте</span>&#160;&#160;<div class="classZ">!</div></div>' +
        '</div>' +
    '</div>' +
    '<div class="boxOfPoint">' +
        '<div class="upBlockOfPoint" onclick="openAnotherInfo(3), initialize(\'select\', 56.18626205236132, 36.97470427701376)">' +
            '<div class="leftPoint">' +
                '<img src="img/Point.svg" alt="icon" width="65%" height="65%">' +
            '</div>' +
            '<div class="rightPoint">' +
                '<div class="upPoint">Экологический Сервис</div>' +
                '<div class="middlePoint">' +
                    '<div class="middleLeft">г. Солнечногорск, Почтовая улица, 9</div>' +
                    '<div class="middleRight">10:00-18:00</div>' +
                '</div>' +
                '<div class="bottomPoint">Контейнер для сбора опасных отходов от компании "Первый Экологический Сервис".</div>' +
            '</div>' +
        '</div>' +
        '<div class="discriptionPoint">' +
            '<div class="discOne">' +
                '<div class="upDiscr" onclick="openAnotherInfo(3)">свернуть</div>' +
                '<span>Можно сдать:</span>' +
                '<ol class="listPadding">' +
                    '<li>опасные отходы</li>' +
                    '<li>лампочки</li>' +
                '</ol>' +
                '<br>' +
                '<span>Описание отсутствует</span>' +
            '</div>' +
            '<div class="discTwo">' +
                '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
                '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
            '</div>' +
            '<div class="discThree"><span>Обновить информацию об объекте</span>&#160;&#160;<div class="classZ">!</div></div>' +
        '</div>' +
    '</div>' +
    '<div class="boxOfPoint">' +
        '<div class="upBlockOfPoint" onclick="openAnotherInfo(4), initialize(\'select\', 56.1889034569558, 36.976463806127306)">' +
            '<div class="leftPoint">' +
                '<img src="img/Point.svg" alt="icon" width="65%" height="65%">' +
            '</div>' +
            '<div class="rightPoint">' +
                '<div class="upPoint">ВкусВилл</div>' +
                '<div class="middlePoint">' +
                    '<div class="middleLeft">г. Солнечногорск, ул. Дзержинского, д. 15А</div>' +
                    '<div class="middleRight">10:00-18:00</div>' +
                '</div>' +
                '<div class="bottomPoint">Точка приема батареек в магазине ВкусВилл.</div>' +
            '</div>' +
        '</div>' +
        '<div class="discriptionPoint">' +
            '<div class="discOne">' +
                '<div class="upDiscr" onclick="openAnotherInfo(4)">свернуть</div>' +
                '<span>Можно сдать:</span>' +
                '<ol class="listPadding">' +
                    '<li>батарейки</li>' +
                '</ol>' +
                '<br>' +
                '<span>Описание отсутствует</span>' +
            '</div>' +
            '<div class="discTwo">' +
                '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
                '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
            '</div>' +
            '<div class="discThree"><span>Обновить информацию об объекте</span>&#160;&#160;<div class="classZ">!</div></div>' +
        '</div>' +
    '</div>' +
    '<div class="boxOfPoint">' +
        '<div class="upBlockOfPoint" onclick="openAnotherInfo(5), initialize(\'select\', 56.18735393467215, 36.98250414082844)">' +
            '<div class="leftPoint">' +
                '<img src="img/Point.svg" alt="icon" width="65%" height="65%">' +
            '</div>' +
            '<div class="rightPoint">' +
                '<div class="upPoint">Экологический Сервис</div>' +
                '<div class="middlePoint">' +
                    '<div class="middleLeft">г. Солнечногорск, Красная улица, 120</div>' +
                    '<div class="middleRight">10:00-18:00</div>' +
                '</div>' +
                '<div class="bottomPoint">Контейнер для сбора опасных отходов от компании "Первый Экологический Сервис".</div>' +
            '</div>' +
        '</div>' +
        '<div class="discriptionPoint">' +
            '<div class="discOne">' +
                '<div class="upDiscr" onclick="openAnotherInfo(5)">свернуть</div>' +
                '<span>Можно сдать:</span>' +
                '<ol class="listPadding">' +
                    '<li>опасные отходы</li>' +
                    '<li>лампочки</li>' +
                '</ol>' +
                '<br>' +
                '<span>Описание отсутствует</span>' +
            '</div>' +
            '<div class="discTwo">' +
                '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
                '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
            '</div>' +
            '<div class="discThree"><span>Обновить информацию об объекте</span>&#160;&#160;<div class="classZ">!</div></div>' +
        '</div>' +
    '</div>' +
    '<div class="boxOfPoint">' +
        '<div class="upBlockOfPoint" onclick="openAnotherInfo(6), initialize(\'select\', 56.175434273986866, 36.99896217534477)">' +
            '<div class="leftPoint">' +
                '<img src="img/Point.svg" alt="icon" width="65%" height="65%">' +
            '</div>' +
            '<div class="rightPoint">' +
                '<div class="upPoint">ВкусВилл</div>' +
                '<div class="middlePoint">' +
                    '<div class="middleLeft">г. Солнечногорск, Красная ул., д. 22А</div>' +
                    '<div class="middleRight">10:00-18:00</div>' +
                '</div>' +
                '<div class="bottomPoint">Точка приема батареек в магазине ВкусВилл.</div>' +
            '</div>' +
        '</div>' +
        '<div class="discriptionPoint">' +
            '<div class="discOne">' +
                '<div class="upDiscr" onclick="openAnotherInfo(6)">свернуть</div>' +
                '<span>Можно сдать:</span>' +
                '<ol class="listPadding">' +
                    '<li>батарейки</li>' +
                '</ol>' +
                '<br>' +
                '<span>Описание отсутствует</span>' +
            '</div>' +
            '<div class="discTwo">' +
                '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
                '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
            '</div>' +
            '<div class="discThree"><span>Обновить информацию об объекте</span>&#160;&#160;<div class="classZ">!</div></div>' +
        '</div>' +
    '</div>';
    
    document.querySelector('#contentMenu').innerHTML = dataInfo_1;
}
startPoint();

function addCardLeftMenu(){
    dataInfo_1 += '<div class="boxOfPoint">' +
        '<div class="upBlockOfPoint" onclick="openAnotherInfo(7), initialize(\'select\', 56.175434273986866, 36.99896217534477)">' +
            '<div class="leftPoint">' +
                '<img src="img/Point.svg" alt="icon" width="65%" height="65%">' +
            '</div>' +
            '<div class="rightPoint">' +
                '<div class="upPoint">' + document.querySelector('#namePlace').value + '</div>' +
                '<div class="middlePoint">' +
                    '<div class="middleLeft">' + document.querySelector('#adress').value + '</div>' +
                    '<div class="middleRight">' + document.querySelector('#timeWork_1').value + '-' + document.querySelector('#timeWork_2').value + '</div>' +
                '</div>' +
                '<div class="bottomPoint">' + document.querySelector('#discription').value + '</div>' +
            '</div>' +
        '</div>' +
        '<div class="discriptionPoint">' +
            '<div class="discOne">' +
                '<div class="upDiscr" onclick="openAnotherInfo(7)">свернуть</div>' +
                '<span>Можно сдать:</span>' +
                '<ol class="listPadding">' +
                    '<li>батарейки</li>' +
                '</ol>' +
                '<br>' +
                '<span>Описание отсутствует</span>' +
            '</div>' +
            '<div class="discTwo">' +
                '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
                '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
            '</div>' +
            '<div class="discThree"><span>Обновить информацию об объекте</span>&#160;&#160;<div class="classZ">!</div></div>' +
        '</div>' +
    '</div>';
    
    document.querySelector('#contentMenu').innerHTML += dataInfo_1;
}

function menuOpen1(){
    let buttonData = '<div class="blockForMenu2">' +
            '<span><b>ТОЧКИ ОБМЕНА ВЕЩАМИ</b></span>' +
        '</div>' +
        '<div class="blockForMenu2">' +
            '<div onclick="butUpUse(this)"><b>Книги</b></div>' +
            '<div onclick="butUpUse(this)"><b>Одежда</b></div>' +
            '<div onclick="butUpUse(this)"><b>Продукты</b></div>' +
            '<div onclick="butUpUse(this)"><b>Хобби</b></div>' +
        '</div>';
        
        let data = '';
    /*    
    let data = '<div class="boxOfPoint">' +
        '<div class="upBlockOfPoint" onclick="openAnotherInfo(0)">' +
            '<div class="leftPoint">' +
                '<img src="img/Point.svg" alt="icon" width="65%" height="65%">' +
            '</div>' +
            '<div class="rightPoint">' +
                '<div class="upPoint">Название точки</div>' +
                '<div class="middlePoint">' +
                    '<div class="middleLeft">Ул. Солнечногорская 23/4</div>' +
                    '<div class="middleRight">10:00-20:00</div>' +
                '</div>' +
                '<div class="bottomPoint">Описание точки. Время работы и другая полезная информация. Описание точки. Время работы и другая полезная информация.</div>' +
            '</div>' +
        '</div>' +
        '<div class="discriptionPoint">' +
            '<div class="discOne">' +
                '<div class="upDiscr" onclick="openAnotherInfo(0)">свернуть</div>' +
                '<span>Можно сдать:</span>' +
                '<ol class="listPadding">' +
                    '<li>бытовые батарейки</li>' +
                    '<li>лампочки</li>' +
                    '<li>аккумуляторы не более 8 см по максимальному размеру</li>' +
                '</ol>' +
                '<br>' +
                '<span>Здесь пишется какое-то краткое описание точки, в которой расположен пункт приема всякого добра</span>' +
            '</div>' +
            '<div class="discTwo">' +
                '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
                '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
            '</div>' +
            '<div class="discThree"><span>Обновить информацию об объекте</span>&#160;&#160;<div class="classZ">!</div></div>' +
        '</div>' +
    '</div>';
    */
    
    document.querySelector('#buttonMenu').innerHTML = buttonData;
    document.querySelector('#buttonMenu').style.backgroundColor = 'hsla(11, 94%, 65%, 1)';
    document.querySelector('#contentMenu').innerHTML = data;
}

function menuOpen2(){
    let buttonData = '<div class="blockForMenu3">' +
            '<span><b>ЭКОМАРШРУТЫ</b></span>' +
        '</div>' +
        '<div class="blockForMenu3">' +
            '<div onclick="butUpUse(this)"><b>Транспорт</b></div>' +
            '<div onclick="butUpUse(this)"><b>Экомаршруты</b></div>' +
            '<div onclick="butUpUse(this)"><b>...</b></div>' +
        '</div>';
        
        let data = '';
    /*    
    let data = '<div class="boxOfPoint">' +
        '<div class="upBlockOfPoint" onclick="openAnotherInfo(0)">' +
            '<div class="leftPoint">' +
                '<img src="img/Point.svg" alt="icon" width="65%" height="65%">' +
            '</div>' +
            '<div class="rightPoint">' +
                '<div class="upPoint">Название точки</div>' +
                '<div class="middlePoint">' +
                    '<div class="middleLeft">Ул. Солнечногорская 23/4</div>' +
                    '<div class="middleRight">10:00-20:00</div>' +
                '</div>' +
                '<div class="bottomPoint">Описание точки. Время работы и другая полезная информация. Описание точки. Время работы и другая полезная информация.</div>' +
            '</div>' +
        '</div>' +
        '<div class="discriptionPoint">' +
            '<div class="discOne">' +
                '<div class="upDiscr" onclick="openAnotherInfo(0)">свернуть</div>' +
                '<span>Можно сдать:</span>' +
                '<ol class="listPadding">' +
                    '<li>бытовые батарейки</li>' +
                    '<li>лампочки</li>' +
                    '<li>аккумуляторы не более 8 см по максимальному размеру</li>' +
                '</ol>' +
                '<br>' +
                '<span>Здесь пишется какое-то краткое описание точки, в которой расположен пункт приема всякого добра</span>' +
            '</div>' +
            '<div class="discTwo">' +
                '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
                '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
            '</div>' +
            '<div class="discThree"><span>Обновить информацию об объекте</span>&#160;&#160;<div class="classZ">!</div></div>' +
        '</div>' +
    '</div>';
    */
    
    document.querySelector('#buttonMenu').innerHTML = buttonData;
    document.querySelector('#buttonMenu').style.backgroundColor = 'hsla(144, 57%, 57%, 1)';
    document.querySelector('#contentMenu').innerHTML = data;
}

function menuOpen3(){
    let buttonData = '<div class="blockForMenu4">' +
            '<span><b>МЕРОПРИЯТИЯ</b></span>' +
        '</div>' +
        '<div class="blockForMenu4">' +
            '<div onclick="butUpUse(this)"><b>Субботники</b></div>' +
            '<div onclick="butUpUse(this)"><b>Точки сбора экологистов</b></div>' +
            '<div onclick="butUpUse(this)"><b>...</b></div>' +
        '</div>';
        
        let data = '';
    /*    
    let data = '<div class="boxOfPoint">' +
        '<div class="upBlockOfPoint" onclick="openAnotherInfo(0)">' +
            '<div class="leftPoint">' +
                '<img src="img/Point.svg" alt="icon" width="65%" height="65%">' +
            '</div>' +
            '<div class="rightPoint">' +
                '<div class="upPoint">Название точки</div>' +
                '<div class="middlePoint">' +
                    '<div class="middleLeft">Ул. Солнечногорская 23/4</div>' +
                    '<div class="middleRight">10:00-20:00</div>' +
                '</div>' +
                '<div class="bottomPoint">Описание точки. Время работы и другая полезная информация. Описание точки. Время работы и другая полезная информация.</div>' +
            '</div>' +
        '</div>' +
        '<div class="discriptionPoint">' +
            '<div class="discOne">' +
                '<div class="upDiscr" onclick="openAnotherInfo(0)">свернуть</div>' +
                '<span>Можно сдать:</span>' +
                '<ol class="listPadding">' +
                    '<li>бытовые батарейки</li>' +
                    '<li>лампочки</li>' +
                    '<li>аккумуляторы не более 8 см по максимальному размеру</li>' +
                '</ol>' +
                '<br>' +
                '<span>Здесь пишется какое-то краткое описание точки, в которой расположен пункт приема всякого добра</span>' +
            '</div>' +
            '<div class="discTwo">' +
                '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
                '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
            '</div>' +
            '<div class="discThree"><span>Обновить информацию об объекте</span>&#160;&#160;<div class="classZ">!</div></div>' +
        '</div>' +
    '</div>';
    */
    
    document.querySelector('#buttonMenu').innerHTML = buttonData;
    document.querySelector('#buttonMenu').style.backgroundColor = 'hsla(285, 100%, 74%, 1)';
    document.querySelector('#contentMenu').innerHTML = data;
}

function menuOpen4(){
    let buttonData = '<div class="blockForMenu5">' +
            '<span><b>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ</b></span>' +
        '</div>' +
        '<div class="blockForMenu5">' +
            '<div onclick="butUpUse(this)"><b>Статьи</b></div>' +
            '<div onclick="butUpUse(this)"><b>Материалы</b></div>' +
        '</div>';
        
        let data = '';
    /*    
    let data = '<div class="boxOfPoint">' +
        '<div class="upBlockOfPoint" onclick="openAnotherInfo(0)">' +
            '<div class="leftPoint">' +
                '<img src="img/Point.svg" alt="icon" width="65%" height="65%">' +
            '</div>' +
            '<div class="rightPoint">' +
                '<div class="upPoint">Название точки</div>' +
                '<div class="middlePoint">' +
                    '<div class="middleLeft">Ул. Солнечногорская 23/4</div>' +
                    '<div class="middleRight">10:00-20:00</div>' +
                '</div>' +
                '<div class="bottomPoint">Описание точки. Время работы и другая полезная информация. Описание точки. Время работы и другая полезная информация.</div>' +
            '</div>' +
        '</div>' +
        '<div class="discriptionPoint">' +
            '<div class="discOne">' +
                '<div class="upDiscr" onclick="openAnotherInfo(0)">свернуть</div>' +
                '<span>Можно сдать:</span>' +
                '<ol class="listPadding">' +
                    '<li>бытовые батарейки</li>' +
                    '<li>лампочки</li>' +
                    '<li>аккумуляторы не более 8 см по максимальному размеру</li>' +
                '</ol>' +
                '<br>' +
                '<span>Здесь пишется какое-то краткое описание точки, в которой расположен пункт приема всякого добра</span>' +
            '</div>' +
            '<div class="discTwo">' +
                '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
                '<img onclick="bigPhoto(this)" src="https://cdn.pixabay.com/photo/2017/03/19/11/31/trash-2156305_1280.png" alt="photoOne">' +
            '</div>' +
            '<div class="discThree"><span>Обновить информацию об объекте</span>&#160;&#160;<div class="classZ">!</div></div>' +
        '</div>' +
    '</div>';
    */
    
    document.querySelector('#buttonMenu').innerHTML = buttonData;
    document.querySelector('#buttonMenu').style.backgroundColor = 'hsla(252, 59%, 59%, 1)';
    document.querySelector('#contentMenu').innerHTML = data;
}