//根据数据生成html
var data = [{
    index: 1,
    img: '1',
    h2: 'EUET',
    h3: 'Creative'
}, {
    index: 2,
    img: '2',
    h2: 'DEVIL',
    h3: 'Friendly'
}, {
    index: 3,
    img: '3',
    h2: 'HUSSLER',
    h3: 'Insecure'
}, {
    index: 4,
    img: '4',
    h2: 'FRIEND',
    h3: 'CRazy'
}, {
    index: 5,
    img: '5',
    h2: 'REBEL',
    h3: 'Loving'
}];

function $(selector) {
    if (selector.indexOf('#') === 0) {
        return document.getElementById(selector.slice(1));
    } else if (selector.indexOf('.') === 0) {
        return document.querySelectorAll(selector);
    }
}
var sections = $('#sections');
var navbar = $('#navbar');
console.log(sections.innerHTML);

function render() {
    var sectionTpl = sections.innerHTML;
    var navTpl = navbar.innerHTML;
    var sectionStr = '';
    var navStr = '';
    for (var i = 0; i < data.length; i++) {
        var curData = data[i];
        sectionStr += sectionTpl.trim().replace('{{h3}}', curData.h3)
            .replace('{{h2}}', curData.h2)
            .replace('{{img}}', curData.img)
            .replace('{{index}}', curData.index)
            .replace('{{direction}}', ['', 'right'][i % 2]);
        navStr += navTpl.trim().replace('{{h3}}', curData.h3)
            .replace('{{h2}}', curData.h2)
            .replace('{{img}}', curData.img)
            .replace('{{index}}', curData.index);
    }
    //为了防止底部出现空白
    //sectionStr += '<div id="section_background"></div>';
    sections.innerHTML = sectionStr;
    navbar.innerHTML = navStr;
}
render();
var sliders = sections.querySelectorAll('.section');
var navItems = navbar.querySelectorAll('.nav-item');
var slideBackground=document.getElementById('section_background');
navbar.addEventListener('click', function(e) {
    var target = e.target;
    if (target.nodeName.toLowerCase() === 'a') {
        update((+target.dataset.index) - 1);
    }
}, false);

function update(index) {
   // slideBackground.innerHTML=sections.innerHTML;
    for (var i = 0, len = sliders.length; i < len; i++) {
        sliders[i].className = sliders[i].className.replace(' active', '');
    }
    sliders[index].className = sliders[index].className + ' active';

    for (var i = 0, len = navItems.length; i < len; i++) {
        navItems[i].className = navItems[i].className.replace(' active', '');
    }
    navItems[index].className = navItems[index].className + ' active';
}

setTimeout(function(e) {
    update(0);
}, 0);
