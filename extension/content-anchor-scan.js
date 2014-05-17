(function($) {
  
  var port = chrome.runtime.connect({name: "nav-rel-info-broadcast"});

  $(document).ready(function() {
    $('a[href]').on('click', function() {
      var a = $(this), 
        href = a.attr('href'),
        rel = a.attr('rel') || 'default',
        rev = a.attr('rev') || 'default';
      if (href.substr(0,1) !== "/") {
         href = window.location.pathname + href;
      }
      var url = window.location.origin + href;
      port.postMessage({ 
        type: 'nav-rel-info',
        url: url,
        rel: rel
      }, '*' /* targetOrigin: any */ );
    });
  });

})(jQuery);
