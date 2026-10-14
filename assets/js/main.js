// Rozbalovací menu na mobilu
document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('headerRight');

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            nav.classList.toggle('open');
        });
    }

    // Video - nacte se az po kliknuti, aby se web zbytecne nezpomaloval
    document.querySelectorAll('.video-embed').forEach(function (el) {
        el.addEventListener('click', function () {
            var videoId = el.getAttribute('data-youtube-id');
            if (!videoId) return;

            var iframe = document.createElement('iframe');
            iframe.src = 'https://www.youtube-nocookie.com/embed/' + videoId + '?autoplay=1&rel=0';
            iframe.title = 'Video - Chalupa Zdravá Voda';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            iframe.setAttribute('frameborder', '0');

            el.innerHTML = '';
            el.style.backgroundImage = 'none';
            el.style.cursor = 'default';
            el.classList.add('is-playing');
            el.appendChild(iframe);
        });
    });

    // Mapa - nacte se az po kliknuti (zadne cookies/skripty predem)
    document.querySelectorAll('.map-facade').forEach(function (el) {
        el.addEventListener('click', function () {
            var mapSrc = el.getAttribute('data-map-src');
            if (!mapSrc) return;

            var iframe = document.createElement('iframe');
            iframe.src = mapSrc;
            iframe.title = 'Mapa - Chalupa Zdravá Voda';
            iframe.loading = 'lazy';
            iframe.referrerPolicy = 'no-referrer-when-downgrade';
            iframe.allowFullscreen = true;
            iframe.setAttribute('frameborder', '0');

            el.innerHTML = '';
            el.style.backgroundImage = 'none';
            el.style.cursor = 'default';
            el.classList.add('is-loaded');
            el.appendChild(iframe);
        });
    });
});
