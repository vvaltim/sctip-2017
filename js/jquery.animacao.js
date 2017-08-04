jQuery(document).ready(function () {
    jQuery('.post').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInLeft',
        offset: 100
    });
});