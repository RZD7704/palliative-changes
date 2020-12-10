AOS.init();

$('.hidden-block__btn').on('click', function () {
    $('.hidden-block__wrapper').toggleClass('-expanded');
});

function checkYearSelects() {
    let selects = document.querySelectorAll('.year-select');

    selects.forEach(item => {
        if (item.children.length > 2) {
            // console.log('more');
            item.style.cssText = `
                display: block;
            `;
        }
    });

    // console.log($('.year-select').closest('section').children().length);
    // // var id = $(this).closest('section').attr('id');

    // if($('.year-select').children().length > 2) {
    //     console.log('more 2');
    // }
}

checkYearSelects();

$('.year-select').change(function () {
    var id = $(this).closest('section').attr('id');
    var thatTab = $('#' + id + ' .' + $(this).val());
    var act = $('#' + id).find('.tabs.act');
    $(act).hide();
    $(act).removeClass('act');
    $(thatTab).fadeIn();
    $(thatTab).addClass('act');
});

var swiperAll = new Swiper('.swiper-specification-all', {
    slidesPerView: 1,
    spaceBetween: 30,
    // centeredSlides: true,
    pagination: {
        el: '.swiper-specification__pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 20
        },

    }
});
var swiperChild = new Swiper('.swiper-specification-child', {
    slidesPerView: 1,
    spaceBetween: 30,
    // centeredSlides: true,
    pagination: {
        el: '.swiper-specification__pagination-child',
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 20
        },

    }
});
var swiperOld = new Swiper('.swiper-specification-old', {
    slidesPerView: 1,
    spaceBetween: 30,
    // centeredSlides: true,
    pagination: {
        el: '.swiper-specification__pagination-old',
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 20
        },

    }
});

var swiper2 = new Swiper('.statistic-infrastructure-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    // centeredSlides: true,
    pagination: {
        el: '.statistic-infrastructure-swiper__pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 20
        },

    }
});

var swiperBar = new Swiper('.swiper-chart-all', {
    navigation: {
        nextEl: '.swiper-chart__btn_next-all',
        prevEl: '.swiper-chart__btn_prev-all',
    },
});

function addBarChart(selector, dataArr, labelsArr) {
    var ctx = document.querySelector(selector).getContext('2d');
    var barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labelsArr,
            datasets: [{
                label: '%',
                data: dataArr,
                backgroundColor: [
                    'rgba(249,167,167, 0.8)',
                    'rgba(70,113,198, 0.8)',
                    'rgba(249,167,167, 0.8)',
                    'rgba(70,113,198, 0.8)',
                    'rgba(249,167,167, 0.8)',
                    'rgba(70,113,198, 0.8)',
                    'rgba(249,167,167, 0.8)',
                    'rgba(70,113,198, 0.8)',
                    'rgba(249,167,167, 0.8)',
                    'rgba(70,113,198, 0.8)',
                    'rgba(249,167,167, 0.8)',
                    'rgba(70,113,198, 0.8)',
                    'rgba(249,167,167, 0.8)',
                    'rgba(70,113,198, 0.8)',
                    'rgba(249,167,167, 0.8)',
                    'rgba(70,113,198, 0.8)',
                    'rgba(249,167,167, 0.8)',
                    'rgba(70,113,198, 0.8)',
                    'rgba(249,167,167, 0.8)',
                    'rgba(70,113,198, 0.8)',
                    'rgba(249,167,167, 0.8)',
                    'rgba(70,113,198, 0.8)',
                    'rgba(249,167,167, 0.8)',
                    'rgba(70,113,198, 0.8)'
                ],
                borderColor: [
                    'rgba(249,167,167, 0.8)',
                    'rgba(70,113,198, 0.8)',
                    'rgba(249,167,167, 0.8)',
                    'rgba(70,113,198, 0.8)',
                    'rgba(249,167,167, 0.8)',
                    'rgba(70,113,198, 0.8)',
                    'rgba(249,167,167, 0.8)',
                    'rgba(70,113,198, 0.8)',
                    'rgba(249,167,167, 0.8)',
                    'rgba(70,113,198, 0.8)',
                    'rgba(249,167,167, 0.8)',
                    'rgba(70,113,198, 0.8)',
                    'rgba(249,167,167, 0.8)',
                    'rgba(70,113,198, 0.8)',
                    'rgba(249,167,167, 0.8)',
                    'rgba(70,113,198, 0.8)',
                    'rgba(249,167,167, 0.8)',
                    'rgba(70,113,198, 0.8)',
                    'rgba(249,167,167, 0.8)',
                    'rgba(70,113,198, 0.8)',
                    'rgba(249,167,167, 0.8)',
                    'rgba(70,113,198, 0.8)',
                    'rgba(249,167,167, 0.8)',
                    'rgba(70,113,198, 0.8)'
                ]
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    display: false
                }],
                yAxes: [{
                    display: false
                }]
            }
        }
    });
}

function addDoughnutChart(selector, dataArr, labelsArr, color, labelParen) {
    var ctx = document.querySelector(selector);
    var Сhart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labelsArr,
            datasets: [{
                backgroundColor: color,
                label: '# of Votes',
                data: dataArr,
                borderColor: color,
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false,
            },
            legendCallback: function (chart) {             
                // Return the HTML string here.
                console.log(chart.data.datasets);
                var text = [];
                text.push('<ul class="' + chart.id + '-legend">');
                for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
                    text.push('<li class="statistic-types__note"><div class="statistic-types__point" id="legend-' + i + '-item" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></div><span class="statistic-types__subtitle">');
                    if (chart.data.labels[i]) {
                        text.push(chart.data.labels[i]);
                    }
                    text.push('</span></li>');
                }
                text.push('</ul>');
                return text.join("");
            },
            plugins: {
                datalabels: {
                    color: '#111',
                    textAlign: 'center',
                    font: {
                        lineHeight: 1.6
                    },
                    formatter: function(value, ctx) {
                      return '';
                    }
                }
            },
            tooltips: {
                callbacks: {
                  label: function(tooltipItem, data) {
                    return '';
                  },
                  afterLabel: function(tooltipItem, data) {
                    var dataset = data['datasets'][0];
                    var percent = data['datasets'][0]['data'][tooltipItem['index']];
                    lightPoint(selector, tooltipItem['index']);
                    return percent + '%';
                  }
                },
                displayColors: false
            }   
        }
    });

    $(labelParen).html(Сhart.generateLegend());
}

function lightPoint(selector, index) {
    var pointElems = $(selector).closest('.chart-wgt').find('.statistic-types__note'),
        elemHover = $(pointElems[index]);
    $(selector).mouseout(function(e){
        $('.statistic-types__note.active').removeClass('active');
    });
    if($('li').is('.statistic-types__note.active')) {
        $('.statistic-types__note.active').removeClass('active');
    } $(elemHover).addClass('active');

}

addBarChart('#slideChart1All', [6, 3, 6, 9, 3, 1, 2, 17, 5, 0, 8, 0, 7, 4, 2, 13, 2, 0, 2, 3, 1, 0, 1, 22], ['Ревматоїдний артрит - 240', 'Ревматоїдний артрит', 'Цукровий діабет - 259', 'Цукровий діабет', 'Туберкульоз - 107', 'Туберкульоз', 'ВІЛ/СНІД - 32', 'ВІЛ/СНІД', 'Хронічне обструктивне захворювання легень - 5', 'Хронічне обструктивне захворювання легень', 'Перинатальні стани -328', 'Перинатальні стани', 'Вродженні вади розвитку - 272', 'Вродженні вади розвитку', 'Розумова відсталість (важка і глибока) - 48', 'Розумова відсталість (важка і глибока)', 'Хронічні гепатити - 33', 'Хронічні гепатити', 'Запальні хвороби ЦНС - 30', 'Запальні хвороби ЦНС', 'Фенілкетонурія - 11', 'Фенілкетонурія', 'Муковісцидоз - 9', 'Муковісцидоз']);
// addBarChart('#slideChart2All', [2, 327, 1, 160, 28, 94, 17, 47, 15, 33], ['Фіброз та цироз печінки - 22', 'Фіброз та цироз печінки', 'Захворювання нирок - 5', 'Захворювання нирок', 'Новоутворення - 784', 'Новоутворення', 'Серцево – судинні   захворювання - 585', 'Серцево – судинні   захворювання', 'Деменції - 559', 'Деменції']);

// addBarChart('#slideChartChild', [27, 0, 23, 4, 22, 2, 7, 36, 6, 4, 4, 8, 4, 13, 3, 0, 3, 3, 2, 0, 1, 0, 1, 22], ['Перинатальні стани - 328', 'Перинатальні стани', 'Вродженні вади розвитку - 272', 'Вродженні вади розвитку', 'Новоутворення - 263', 'Новоутворення', 'Дитячий церебральний параліч - 85', 'Дитячий церебральний параліч', 'Серцево – судинні захворювання - 70', 'Серцево – судинні захворювання', 'Цукровий діабет - 49', 'Цукровий діабет', 'Розумова відсталість (важка і глибока) - 48', 'Розумова відсталість (важка і глибока)', 'Хронічні гепатити - 33', 'Хронічні гепатити', 'Запальні хвороби ЦНС - 30', 'Запальні хвороби ЦНС', 'Фенілкетонурія - 11', 'Фенілкетонурія', 'ВІЛ/СНІД - 9', 'ВІЛ/СНІД', 'Муковісцидоз - 9', 'Муковісцидоз']);

// addBarChart('#slideChartOld', [31, 92, 23, 43, 22, 33, 9, 3, 8, 2, 4, 1, 1, 17, 1, 327, 1, 160, 5, 0], ['Новоутворення - 784', 'Новоутворення', 'Серцево – судинні   захворювання - 585', 'Серцево – судинні   захворювання', 'Деменції - 559', 'Деменції', 'Ревматоїдний артрит - 240', 'Ревматоїдний артрит', 'Цукровий діабет - 210', 'Цукровий діабет', 'Туберкульоз - 107', 'Туберкульоз', 'ВІЛ/СНІД - 23', 'ВІЛ/СНІД', 'Фіброз та цироз печінки - 22', 'Фіброз та цироз печінки', 'Захворювання нирок - 5', 'Захворювання нирок', 'Хронічне обструктивне захворювання легень - 5', 'Хронічне обструктивне захворювання легень']);

addDoughnutChart('#instСhartAll', [45, 38, 17], ['ЦПСМД №1', 'ЦПСМД №2', 'ЦПСМД №3'], ['rgba(164, 201, 255, 0.8)', 'rgba(55, 98, 204, 0.8)', 'rgba(249, 167, 167, 0.8)'],"#instLegendsAll");
addDoughnutChart('#levelСhartAll', [74, 26], ['Первинний', 'Вторинний'], ['rgba(164, 201, 255, 0.8)', 'rgba(55, 98, 204, 0.8)', 'rgba(249, 167, 167, 0.8)'],"#levelLegendAll");






// addDoughnutChart('#instСhartChild', [45, 38, 17], ['ЦПСМД №1', 'ЦПСМД №2', 'ЦПСМД №3'], ['rgba(164, 201, 255, 0.8)', 'rgba(55, 98, 204, 0.8)', 'rgba(249, 167, 167, 0.8)']);
// addDoughnutChart('#levelСhartChild', [74, 26], ['Первинний', 'Вторинний'], ['rgba(164, 201, 255, 0.8)', 'rgba(55, 98, 204, 0.8)', 'rgba(249, 167, 167, 0.8)']);

// addDoughnutChart('#instСhartOld', [45, 38, 17], ['ЦПСМД №1', 'ЦПСМД №2', 'ЦПСМД №3'], ['rgba(164, 201, 255, 0.8)', 'rgba(55, 98, 204, 0.8)', 'rgba(249, 167, 167, 0.8)']);
// addDoughnutChart('#levelСhartOld', [74, 26], ['Первинний', 'Вторинний'], ['rgba(164, 201, 255, 0.8)', 'rgba(55, 98, 204, 0.8)', 'rgba(249, 167, 167, 0.8)']);

// addDoughnutChart('#doneСhart2018', [51, 15, 13, 10, 10, 1], ['ЦПСМД №2', '4 МКЛ', 'ЦПСМД №1', '2 МКЛ', 'ЦПСМД №3', '3 МКЛ'], ['rgba(164, 201, 255, 0.8)', 'rgba(55, 98, 204, 0.8)', 'rgba(249, 167, 167, 0.8)', 'rgba(221, 118, 118, 0.8)', 'rgba(255, 234, 146, 0.8)', 'rgba(12, 218, 232, 0.8)']);
// addDoughnutChart('#noneСhart2018', [100], ['Не задоволено'], ['rgba(164, 201, 255, 0.8)']);

$(document).ready(function () {
    // Code
    // let sections = {
    //     header: $('#needs').offset().top,
    //     about: $('#general-info').offset().top,
    //     services: $('#possibility').offset().top,
    //     gallery: $('#benefits').offset().top,
    //     blog: $('#infrastructure').offset().top,
    //     contact: $('#total').offset().top
    // }

    // $(window).scroll(function () {
    //     let scrTop = $(document).scrollTop() + ($(window).height() / 3),
    //         pos;

    //     if (scrTop >= sections.header && scrTop < sections.about) {
    //         pos = 'needs';
    //     } else if (scrTop >= sections.about && scrTop < sections.services) {
    //         pos = 'general-info';
    //     } else if (scrTop >= sections.services && scrTop < sections.gallery) {
    //         pos = 'possibility';
    //     } else if (scrTop >= sections.gallery && scrTop < sections.blog) {
    //         pos = 'benefits';
    //     } else if (scrTop >= sections.blog && scrTop < sections.contact) {
    //         pos = 'infrastructure';
    //     } else if (scrTop >= sections.contact) {
    //         pos = 'total';
    //     }

    //     $('.js-main-menu').find('.active').removeClass('active');
    //     $('.js-main-menu').find(`a[data-menu=${pos}]`).addClass('active');
    // });

    // var header = $('.js-header'),
    //     cloneHeader = header.clone();

    // cloneHeader.addClass('header--fixed');
    // header.before(cloneHeader);


    // $(window).scroll(function () {
    //     if ($(window).scrollTop() > 150) {
    //         cloneHeader.addClass('header--is-show');
    //     } else {
    //         cloneHeader.removeClass('header--is-show');
    //     }
    // });
});