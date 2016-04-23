$(document).ready( function() {
  var track_pageview = function(document_path) {
    if(window.ga) {
      window.ga('send', 'pageview', document_path);
    }
  }
  var wait_and_open = function(href, target) {
    setTimeout(function() {
      window.open(href,(!target?"_self":target));
    },250);
  }

  $('a.internal-link').on('click', function(ev) {
    ev.preventDefault();
    var href = $(this).attr("href");
    var target = $(this).attr("target");
    var document_path = "/internal-link"+$(this)[0].pathname;
    track_pageview(document_path);
    wait_and_open(href, target);
  });
  $('a:not(.internal-link)').on('click', function(ev) {
    ev.preventDefault();
    var href = $(this).attr("href");
    var target = $(this).attr("target");
    var document_path = "/external-link/"+$(this)[0].hostname+$(this)[0].pathname;
    track_pageview(document_path);
    wait_and_open(href, target);
  });
});
