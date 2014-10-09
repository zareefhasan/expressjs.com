
$(function(){

  var width = window.innerWidth;
  var height = window.innerHeight;
  var doc = $(document);

  // .onload
  $('html').addClass('onload');

  // top link
  $('#top').click(function(e){
    $('html, body').animate({scrollTop : 0}, 200);
    return false;
  });

  // scrolling links
  var added;
  doc.scroll(function(e){
    if (doc.scrollTop() > 5) {
      if (added) return;
      added = true;
      $('body').addClass('scroll');
    } else {
      $('body').removeClass('scroll');
      added = false;
    }
  })


  $('code.lang-js, pre.js code').each(function(){
    $(this).addClass('language-javascript').removeClass('lang-js')
  })

  Prism.highlightAll()


  // menu bar

  var prev;
  var n = 0;

  var headings = $('h3').map(function(i, el){
    return {
      top: $(el).offset().top,
      id: el.id
    }
  });

  function closest() {
    var h;
    var top = $(window).scrollTop();
    var i = headings.length;
    while (i--) {
      h = headings[i];
      if (top >= h.top - 1) return h;
    }
  }

  $(document).scroll(function(){
    var h = closest();
    if (!h) return;

    if (prev) {
      prev.removeClass('active');
      prev.parent().parent().removeClass('active');
    }

    var a = $('a[href="#' + h.id + '"]');
    a.addClass('active');
    a.parent().parent().addClass('active');

    prev = a;
  })

  // dropdown menu

  if ('ontouchstart' in document.documentElement) {
    $('#application-menu').dropit({ action: 'click' })
    $('#getting-started-menu').dropit({ action: 'click' })
    $('#guide-menu').dropit({ action: 'click' })
    $('#advanced-topics-menu').dropit({ action: 'click' })
    $('#resources-menu').dropit({ action: 'click' })
  }
  else {
    $('#application-menu').dropit({ action: 'mouseenter' })
    $('#getting-started-menu').dropit({ action: 'mouseenter' })
    $('#guide-menu').dropit({ action: 'mouseenter' })
    $('#advanced-topics-menu').dropit({ action: 'mouseenter' })
    $('#resources-menu').dropit({ action: 'mouseenter' })
  }


})
