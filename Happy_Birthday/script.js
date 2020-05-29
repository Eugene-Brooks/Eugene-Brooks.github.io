var allow = true;
var load = true;
var audio = true;


//$('body').css('height', $(document).innerHeight());

const poemElement = $('.main_left__poem');

// ## Create a function to play our sounds
function playSound(sound) {
    if (audio) {
        sound.loop = true;
        sound.play(); // Play sound
    }
}

fall = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/poem_fall_soundscape.mp3");
lighthouse = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/poem_lighthouse_soundscape.mp3');
hope = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/poem_hope_soundscape.mp3');
moon = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/poem_moon_soundscape.mp3');
sing = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/poem_sing_soundscape.mp3');
space = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/poem_space_soundscape.mp3');

soundscape = new Audio();

soundscape.volume = 0.4;



const poems = [
     {
        title: 'Ты мой свет Астрономикона...',
        poem: "Ты для меня маяк надежды, <br/>Который путь укажет в ночь.<br/>Как путеводная звезда,<br/>Направишь мой корабль в дом.<br/>Ты сделала меня серьезней,<br/>Заставила меня стремиться в высь.<br/>Заставила поверить в звезды,<br/>И научила вновь любить.<br/>Ты стала близкой мне душой,<br/>И часто непреступна как скала.<br/>Мы в этом море маленькие птицы,<br/>Но встретились попутные ветра.<br/>Нельзя за ранее предугадать судьбу,<br/>Ты стала чем то большим для меня.<br/>Ты стала гаванью спокойной в этом море,<br/>В которую вернусь из-за тебя.",

        animation: 'lighthouse',
        link: 'https://hellopoetry.com/laura-williams/',
        color: '#31434a',
        audio: lighthouse
    },
    {
        title: 'Ты мой бесконечный космос...',
        poem: "В груди твоей я слышу гул вселенной,<br/>В глазах твоих узрим реликта луч.<br/>Пульсара вспышкой яркой, ненадменной,<br/>Твоя улыбка, словно солнце из-за туч.<br/>Рукой своей меня ты прижимаешь,<br/>Как гравитацией плеяды звёзд.<br/>Ядро галактики, ты так же полыхаешь,<br/>И видишь мириады грёз.<br/>Скажи, в какой галактике застряли<br/>И обозримы ли нам стали<br/>Планет вулканы, горы дюн?<br/>И может быть, вселенная сожмется.<br/>Ну а пока - гори и отражай,<br/>Тот свет, что мир наш освещает,<br/>Моя звезда, мой космос, ты - мой рай,<br/>Пусть наше чувства впредь не затухает.",

        animation: 'space',
        link: 'https://en.wikipedia.org/wiki/Robert_Frost',
        color: '#31434a',
        audio: space
    },
    {
        title: 'Ты самая яркая и теплая...',
        poem: "У осени красивая улыбка,<br/>В ней женщины добрейшее лицо,<br/>И в ее платьях, золотом расшитых,<br/>Сверкает счастье - радостно, легко.<br/>Ложатся листья шелком на дороги,<br/>В осеннем парке бродит ребятня,<br/>Ты обойди знакомые пороги,<br/>Позолоти пустые берега.<br/>Сияй звездой волшебной среди ночи,<br/>Не торопись. пожалуйста, уйти,<br/>Ведь ты прекрасна, золотая осень,<br/>Тебе не зря написаны стихи...",

        animation: 'fall',
        link: 'https://en.wikipedia.org/wiki/Emily_Bront%C3%AB',
        color: '#138fad',
        audio: fall
    },
    
    {
        title: 'Моя белая голубка...',
        poem: "Ты моя голубка белая<br/>Так скучаю по тебе<br/>Я душою рядом с тобою<br/>Таю в нашей ворожбе<br/>Я тебе на ушко, девочка,<br/>Сладко, сладко прошепчу<br/>Ручеёк, теченье, щепочка<br/>То, чего и я – хочу",

        animation: 'hope',
        link: 'https://en.wikipedia.org/wiki/Emily_Dickinson',
        color: '#5f9bb1',
        audio: hope
    },
    {
        title: 'Засыпая каждую ночь я предстваляю тебя...',
        poem: "Для меня ты Луна,<br/>Что озаряет ночные дворы.<br/>На небе всегда она лишь одна,<br/>Но зажигает в душах костры.<br/>Знаешь почему ты Луна?<br/>Почему ярко светишь, когда темно?<br/>Я всего лишь в тебя влюблен,<br/>А Луна - это то,что я вижу в окно.<br/>Я люблю вспоминать, моменты с тобой,<br/>Как дурачились вместе будто дети с тобой.<br/>Я люблю вспоминать, твой нахмуренный взгляд,<br/>И как ты смущаешься детка.<br/>Я люблю вспоминать поцелуй на танцполе,<br/>И как мы танцевали с тобой.<br/>Наши души взлетели скорее на волю,<br/>И в объятиях твоих растворился.",

        animation: 'moon',
        link: 'https://en.wikipedia.org/wiki/Roger_McGough',
        color: '#0a2b35',
        audio: moon
    },
    {
        title: 'Ты самая великолепная девушка...',
        poem: "Ты достойна песен под окном,<br/>Будто сказки о любви из детства.<br/>Ты одна на свете, Ася,<br/>И достойна лучшего на свете.<br/>Не грусти, жизнь за окном прекрасна.<br/>Ты молода, собою хороша.<br/>Все происходит с нами не напрасно,<br/>И живы мы, пока поет душа!<br/>Ты улыбнись, улыбка так тебе к лицу,<br/>Как надо все мечты осуществить.<br/>У счастья нет особого секрета,<br/>Любить и верить — вот что значит жить!",

        animation: 'sing',
        link: 'https://en.wikipedia.org/wiki/Gwendolyn_Brooks',
        color: '#3d3448',
        audio: sing
    }
]

if(window.location.href.split('slide=').pop().length != 1) {
    var index = 0;
} else {
    var index = window.location.href.split('slide=').pop();
}


console.log(index)
if(load) {
    $('.loader').fadeIn(1000);

    $(window).bind("load", function() {

        setTimeout(function() {
            $('.loader').fadeOut(1000);
        },1000)
        setTimeout(function(){
            updatePoem(index)
        },1000)
        setTimeout(function() {

            $('.main').fadeIn(1000);
        },2000)
    })  
} else {
    $('.main').show();
}


function animateText(text) {
    text.find('h1, p, i, .buttons').addClass('out_left');
}

function staticText(text) {
    text.find('h1, p, i, .buttons').removeClass('out_left');
}

for(i = 0; i < poems.length; i++) {
    $('.main_center__pips').append('<div class="pip"></div>')

}
$( ".pip:nth-of-type(" + parseInt(poems.length - index) + ")" ).addClass('active')
function updatePoem(index) {

    if($(window).width() < 620) {
        $('html,body').animate({ scrollTop: 0 }, 'fast');
    }
    allow = false;
    animateText(poemElement);
    updateStage(index);
    console.log('test');
    $('.pip').removeClass('active');
    console.log(index)
    $( ".pip:nth-of-type(" + parseInt(poems.length - index) + ")" ).addClass('active')



    setTimeout(function(){
        poemElement.find('h1').html(poems[index].title);
        poemElement.find('p').html(poems[index].poem);
        poemElement.find('i').html(`- ${poems[index].poet}`);
        poemElement.find('.buttons_poet').parent().attr('href', poems[index].link);
        console.log(soundscape)

    }, 800);
    setTimeout(function(){
        staticText(poemElement);
        allow = true;
        $(soundscape).animate({volume: 0}, 600);
    },800)

    setTimeout(function(){
        $(soundscape).attr('src', $(poems[index].audio).attr('src'))
        playSound(soundscape)
        $(soundscape).animate({volume: 0.4}, 600);
    },1400)

}

$('.reset').click(function(){
    resetStage(index)
})
function updateStage(index) {
    $('.main_center__stage').addClass('reverse');

    setTimeout(function(){
        $('.main_center__stage').removeClass($('.main_center__stage').attr('class').split(' ').pop())
        $('.main_center__stage').removeClass($('.main_center__stage').attr('class').split(' ').pop())
        $('.main_center__stage').addClass(poems[index].animation);
        $('.main_center__stage').css('background',poems[index].color);  
    }, 1200)

}

function resetStage(index) {
    $('.main_center__stage').addClass('reverse');

    setTimeout(function(){
        $('.main_center__stage').removeClass($('.main_center__stage').attr('class').split(' ').pop())
        $('.main_center__stage').removeClass($('.main_center__stage').attr('class').split(' ').pop())
        $('.main_center__stage').css('background',poems[index].color);  
    }, 800)

    setTimeout(function(){
        $('.main_center__stage').addClass(poems[index].animation);
    },850)

}
$('.next').click(function(){
    if($(window).width() < 620) {
    soundscape.play();
    soundscape.pause()
    }
    if(allow && index < poems.length - 1) {
        index++;
        updatePoem(index);  
    } else {
        index = 0
        updatePoem(index)
    }

});

function getRandom(){

    let rand =  + Math.floor(Math.random() * poems.length);

    if(allow && rand != index) {
        index = rand;
        updatePoem(index);
    } else {
        getRandom()
    }
}



$('.random').click(function(){
    if($(window).width() < 620) {
    soundscape.play();
    soundscape.pause()
    }
    getRandom()
})

$('.back').click(function(){
    if($(window).width() < 620) {
    soundscape.play();
    soundscape.pause()
    }
    if(allow && index > 0) {
        index--;
        updatePoem(index);
    } else {
        index = poems.length - 1
        updatePoem(index)
    }
});

$('body').on('click', '.pip', function(){
    updatePoem(parseInt(poems.length - $(this).index() - 1));
    index = parseInt(poems.length - $(this).index() - 1)
})

/* ====================================================================

  Share on Twitter

=======================================================================  */

function twShare(url, title, winWidth, winHeight) {
    const winTop = 100;
    const winLeft = 100;
    window.open(`https://twitter.com/intent/tweet?text=${title}`, 'sharer', `top=${winTop},left=${winLeft},toolbar=0,status=0,width=${winWidth},height=${winHeight}`);
}

pen_id = $('._pen_id').text();

$('body').on('click', '.tw', () => {
    twShare(`https://codepen.io/jcoulterdesign/full/115d3d5b7cbde34a217ac8db758e34a8`, `Check out this animated version of "${poems[index].title}" by ${poems[index].poet} on PoetryWithCSS by @jamiecoulter89. https://codepen.io/jcoulterdesign/full/115d3d5b7cbde34a217ac8db758e34a8/?slide=${index} %23poetryWithCSS`, 520, 350);
    return false;
});


'use strict';

///console.clear();

class Grain {
    constructor (el) {
        /**
     * Options
     * Increase the pattern size if visible pattern
     */
        this.patternSize = 150;
        this.patternScaleX = 1;
        this.patternScaleY = 1;
        this.patternRefreshInterval = 3; // 8
        this.patternAlpha = 28; // int between 0 and 255,

        /**
     * Create canvas
     */
        this.canvas = el;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(this.patternScaleX, this.patternScaleY);

        /**
     * Create a canvas that will be used to generate grain and used as a
     * pattern on the main canvas.
     */
        this.patternCanvas = document.createElement('canvas');
        this.patternCanvas.width = this.patternSize;
        this.patternCanvas.height = this.patternSize;
        this.patternCtx = this.patternCanvas.getContext('2d');
        this.patternData = this.patternCtx.createImageData(this.patternSize, this.patternSize);
        this.patternPixelDataLength = this.patternSize * this.patternSize * 4; // rgba = 4

        /**
     * Prebind prototype function, so later its easier to user
     */
        this.resize = this.resize.bind(this);
        this.loop = this.loop.bind(this);

        this.frame = 0;

        window.addEventListener('resize', this.resize);
        this.resize();

        window.requestAnimationFrame(this.loop);
    }

    resize () {
        this.canvas.width = window.innerWidth * devicePixelRatio;
        this.canvas.height = window.innerHeight * devicePixelRatio;
    }

    update () {
        const {patternPixelDataLength, patternData, patternAlpha, patternCtx} = this;

        // put a random shade of gray into every pixel of the pattern
        for (let i = 0; i < patternPixelDataLength; i += 4) {
            // const value = (Math.random() * 255) | 0;
            const value = Math.random() * 255;

            patternData.data[i] = value;
            patternData.data[i + 1] = value;
            patternData.data[i + 2] = value;
            patternData.data[i + 3] = patternAlpha;
        }

        patternCtx.putImageData(patternData, 0, 0);
    }

    draw () {
        const {ctx, patternCanvas, canvas, viewHeight} = this;
        const {width, height} = canvas;

        // clear canvas
        ctx.clearRect(0, 0, width, height);

        // fill the canvas using the pattern
        ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
        ctx.fillRect(0, 0, width, height);
    }

    loop () {
        // only update grain every n frames
        const shouldDraw = ++this.frame % this.patternRefreshInterval === 0;
        if (shouldDraw) {
            this.update();
            this.draw();
        }

        window.requestAnimationFrame(this.loop);
    }
}


/**
 * Initiate Grain
 */
const el = document.querySelector('.grain');
const grain = new Grain(el);

// Code clean

function rain(canvas) {

    console.log(canvas)
    canvas.width = 2000 ;
    canvas.height = 2000;

    if(canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var w = canvas.width;
        var h = canvas.height;
        ctx.strokeStyle = 'rgba(174,194,224,0.5)';
        ctx.lineWidth = 1;
        ctx.lineCap = 'round';


        var init = [];
        var maxParts = 1000;
        for(var a = 0; a < maxParts; a++) {
            init.push({
                x: Math.random() * w,
                y: Math.random() * h,
                l: Math.random() * 1,
                xs: -4 + Math.random() * 4 + 2,
                ys: Math.random() * 10 + 10
            })
        }

        var particles = [];
        for(var b = 0; b < maxParts; b++) {
            particles[b] = init[b];
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);
            for(var c = 0; c < particles.length; c++) {
                var p = particles[c];
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                ctx.stroke();
            }
            move();
        }

        function move() {
            for(var b = 0; b < particles.length; b++) {
                var p = particles[b];
                p.x += p.xs;
                p.y += p.ys;
                if(p.x > w || p.y > h) {
                    p.x = Math.random() * w;
                    p.y = -20;
                }
            }
        }

        setInterval(draw, 30);

    }    
}



$('.main_right__audio').click(function(){

    if(audio) {
        audio = false;
        $(soundscape).animate({volume: 0}, 600);
        $('img.on').hide()
        $('img.off').show()
    } else {
        audio = true;
        $(soundscape).animate({volume: 0.4}, 600);
        $('img.on').show()
        $('img.off').hide()
    }

})

rain($('#rain')[0]);
rain($('#rain_sing')[0]);