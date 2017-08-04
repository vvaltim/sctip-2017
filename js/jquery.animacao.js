jQuery(document).ready(function () {
    jQuery('.postFadeInUp').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
    });
    jQuery('.postSlideInLeft').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInLeft',
        offset: 100
    });
    jQuery('.postSlideInRight').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInRight',
        offset: 100
    });
});