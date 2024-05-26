$(function () {
    var sound = new Audio('sound.mp3');
    sound.volume = 0.2;
    window.addEventListener('message', function (event) {
        if (event.data.action == 'open') {
            var number = Math.floor((Math.random() * 1000) + 1);
            $('.notify').append(`
                <div class="wrapper-${number}">
                    <div class="notification_main-${number}">
                        <div class="title-${number}"></div>
                        <div class="text-${number}">
                            ${event.data.description}
                        </div>
                    </div>
                </div>
            `)
            $(`.wrapper-${number}`).css({
                "margin-bottom": "10px",
                "width": "275px",
                "margin": "0px 0px 0px -140px",
                "border-radius": "8px"
            })
            $('.notification_main-'+number).addClass('main')
            $('.text-'+number).css({"font-size": "14px"})
            $(`.title-${number}`).html(`<i class="${event.data.icon}" class="icon" style="margin-right: 5px; color: ${event.data.color}"></i>` + event.data.title).css({
                "font-size": "16px",
                "font-family": "Akrobat Black, sans-sherif"
            })
            $(`.wrapper-${number}`).addClass('notification')
            sound.play();
            if (event.data.skew == true) {
                anime({
                    targets: `.wrapper-${number}`,
                    translateX: -50,
                    skewY: "2deg",
                    duration: 750,
                    "margin-bottom": "10px",
                    easing: 'spring(1, 70, 100, 10)',
                })
                setTimeout(function () {
                    anime({
                        targets: `.wrapper-${number}`,
                        translateX: 500,
                        skewY: "2deg",
                        duration: 750,
                        "margin-bottom": "10px",
                        easing: 'spring(1, 80, 100, 0)'
                    })
                    setTimeout(function () {
                        $(`.wrapper-${number}`).remove()
                    }, 750)
                }, event.data.time)
            } else {
                anime({
                    targets: `.wrapper-${number}`,
                    translateX: -50,
                    duration: 750,
                    "margin-bottom": "10px",
                    easing: 'spring(1, 70, 100, 10)',
                })
                setTimeout(function () {
                    anime({
                        targets: `.wrapper-${number}`,
                        translateX: 500,
                        duration: 750,
                        "margin-bottom": "10px",
                        easing: 'spring(1, 80, 100, 0)'
                    })
                    setTimeout(function () {
                        $(`.wrapper-${number}`).remove()
                    }, 750)
                }, event.data.time)
            }
            
        }
    })
})