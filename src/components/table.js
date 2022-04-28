$('table').DataTable({
  'searching': false,
  'lengthChange': false,
  'info': false,
  'autoWidth': false,
  'responsive': { breakpoints: [
    { name: 'desktop', width: Infinity },
    { name: 'tablet',  width: 1024 },
    { name: 'phone',   width: 768 }
  ]},
  'columns': [
    {'className': 'all'},
    {'className': 'min-tablet'},
    {'className': 'min-tablet'},
    {'className': 'min-tablet'},
    {'className': 'min-tablet'},
    {'className': 'min-tablet'},
    {'className': 'min-tablet'},
    {'className': 'min-tablet'},
  ],
  'dom': '<lf<t>ip>',
  'fixedHeader': true,
  'pageLength': -1


});

$(function() {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $('body').addClass('sticky-shrinknav-wrapper');
    } else{
      $('body').removeClass('sticky-shrinknav-wrapper');
    }
  });
});
