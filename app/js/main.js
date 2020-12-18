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

// function addCustomChartPoints(elemParent, circleParent) {
//     const pointsParent = document.querySelector(elemParent);

//     let chartParent = document.querySelector(circleParent),
//         items = chartParent.querySelectorAll('circle'),
//         valueArr=[];

//     items.forEach(item => {
//         valueArr.push(item.getAttribute('title'));

//     pointsParent.innerHTML =`
//     <div class="statistic-types__note chart-points-smart-js" data-i="2">
//         <div class="statistic-types__point statistic-types__point_theme_dark-blue"></div>
//         <div class="statistic-types__subtitle">${valueArr[1]}</div>
//     </div>
//     <div class="statistic-types__note chart-points-smart-js" data-i="1">
//         <div class="statistic-types__point statistic-types__point_theme_light-blue"></div>
//         <div class="statistic-types__subtitle">${valueArr[0]}</div>
//     </div>
//     `;

//         items.forEach(item => {
//             lightCustomChartPoint(item);
//         }); 
//     });

//     function lightCustomChartPoint(item) {
//         let circlePart = item,
//             points = document.querySelectorAll('.chart-points-smart-js');

//         item.addEventListener('mouseover', () => {
//             points.forEach(point => {
//                 if (circlePart.getAttribute('data-i') == point.getAttribute('data-i')) {
//                     point.classList.add('active');
//                 }
//             });
//         });

//         item.addEventListener('mouseout', () => {
//             points.forEach(point => {
//                 if (circlePart.getAttribute('data-i') == point.getAttribute('data-i')) {
//                     point.classList.remove('active');
//                 }
//             });
//         });
//     }
// }
// addCustomChartPoints('#customChartPoints', '.chart-smart-js');

// function customChart() {
//     $('.tooltip-circle').mouseover(function(e){
//         var value = $(this).data('title');
//         $('body').append('<div class="tooltip-smart" style="left: ' + e.pageX + 'px; top: ' + e.pageY + 'px;">' + value + '</div>');
//     });
//     $('.tooltip-circle').mouseout(function(e){
//         if($('.tooltip-smart').length){
//             $('.tooltip-smart').remove();
//         }
//     });
// }
// customChart();


function addDoughnutChart(selector, dataArr, labelsArr, color, labelParen, percentArr, txtArr, numNone) {
    var ctx = document.querySelector(selector);
    var Сhart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labelsArr,
            datasets: [{
                backgroundColor: color,
                label: '# of Votes',
                data: dataArr,
                borderColor: '#fff',
                borderWidth: 1
            }]
        },
        options: {
            cutoutPercentage: 60,
            legend: {
                display: false,
            },
            legendCallback: function (chart) {             
                // Return the HTML string here.
                // console.log(chart.data.datasets);
                var text = [];
                text.push('<ul class="' + chart.id + '-legend">');
                for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
                    text.push('<li class="statistic-types__note"><div class="statistic-types__point" id="legend-' + i + '-item" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></div><span class="statistic-types__subtitle">');
                    if (chart.data.labels[i]) {
                        text.push(chart.data.labels[i]);
                        text.push(' (' + percentArr[i] + '%' + ')');
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
                    let txtArrItem;
                    var name = data['labels'][tooltipItem['index']];
                    var dataset = data['datasets'][0];
                    var percent = data['datasets'][0]['data'][tooltipItem['index']];
                    lightPoint(selector, tooltipItem['index']);
                    if(numNone) {
                        return name;
                    } else if(txtArr) {
                        txtArrItem = tooltipItem['index'];
                        console.log(txtArrItem);
                        return percent + ' ' + txtArr[txtArrItem];
                    } else {
                        return name + ': ' + percent;
                    }
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


addDoughnutChart('#chartPleasureNeed', [1217, 2540], ['Отримали', 'Не отримали'], ['#A4EFFF', '#F9A7A7'],"#chartPleasureNeedPoints", [36, 64]);
addDoughnutChart('#chartNeedsAll', [1217, 2540], ['Діти', 'Дорослі'], ['#A4C9FF', '#2147A4'],"#legendsNeedsAll", [32, 68], ['дітей', 'дорослих']);
addDoughnutChart('#chartChildAll', [1151, 66], ['Не отримали', 'Отримали'], ['#F9A7A7', '#A4EFFF'],"#legendsChildAll", [95, 5]);
addDoughnutChart('#chartOldAll', [1273, 1267], ['Не отримали', 'Отримали'], ['#F9A7A7', '#A4EFFF'],"#legendsOldAll", [50, 50]);

addDoughnutChart('#providersСhartAll', [51, 15, 13, 10, 10, 1], ['ЦПМСД №2', '4 МКЛ', 'ЦПМСД №1', '2 МКЛ', 'ЦПМСД №3', '3 МКЛ'], ['rgba(164, 201, 255, 0.8)', 'rgba(55, 98, 204, 0.8)', 'rgba(249, 167, 167, 0.8)', 'rgba(221, 118, 118, 0.8)', 'rgba(255, 234, 146, 0.8)', 'rgba(12, 218, 232, 0.8)'],"#providersLegendsAll", [51, 15, 13, 10, 10, 1], [], true);
addDoughnutChart('#levelСhartAll', [74, 26], ['Первинний', 'Вторинний'], ['rgba(164, 201, 255, 0.8)', 'rgba(55, 98, 204, 0.8)'],"#levelLegendAll", [74, 26], [], true);



// addDoughnutChart('#providersСhartBuild', [100], ['Надано'], ['#A4EFFF'], "#providersLegendsBuild", '0', true);
// addDoughnutChart('#providersСhartBet', [42, 58], ['Надано','Не надано'], ['#A4EFFF', '#F9A7A7'],"#providersLegendBet", '', true, true);
