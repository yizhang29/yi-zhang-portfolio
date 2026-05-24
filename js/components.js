(function () {
  var nav = [
    '<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">',
    '  <div class="container">',
    '    <a class="navbar-brand js-scroll-trigger" href="index.html"><img width="45" height="45" src="img/profile.svg" alt="Yi Zhang"></a>',
    '    <button class="navbar-toggler navbar-toggler-right" style="border:none" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" onclick="changeIcon()">',
    '      <div class="container-icon">',
    '        <div class="bar1"></div>',
    '        <div class="bar2"></div>',
    '        <div class="bar3"></div>',
    '      </div>',
    '    </button>',
    '    <div class="collapse navbar-collapse" id="navbarResponsive">',
    '      <ul class="navbar-nav ml-auto">',
    '        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="index.html" onclick="changeIcon()">Work</a></li>',
    '        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="game.html" onclick="changeIcon()">Game</a></li>',
    '        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="blog.html" onclick="changeIcon()">Blog</a></li>',
    '        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="about.html" onclick="changeIcon()">About</a></li>',
    '        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="photo.html" onclick="changeIcon()">Photo</a></li>',
    '      </ul>',
    '    </div>',
    '  </div>',
    '</nav>',
    '<div id="top-shadow"></div>'
  ].join('\n');

  var footer = [
    '<footer class="text-center">',
    '  <div class="footer-below">',
    '    <div class="container">',
    '      <div class="col-md-12">',
    '        <ul class="list-inline">',
    '          <li class="list-inline-item">',
    '            <a class="btn-social btn-outline" href="https://www.instagram.com/yiiiiiizzzzz/" target="_blank" aria-label="Yi Zhang on Instagram">',
    '              <i class="fa-brands fa-square-instagram" aria-hidden="true"></i>',
    '            </a>',
    '          </li>',
    '          <li class="list-inline-item">',
    '            <a class="btn-social btn-outline" href="https://www.linkedin.com/in/yizhang126/" target="_blank" aria-label="Yi Zhang on LinkedIn">',
    '              <i class="fa-brands fa-square-linkedin" aria-hidden="true"></i>',
    '            </a>',
    '          </li>',
    '          <li class="list-inline-item">',
    '            <a class="btn-social btn-outline" href="https://vimeo.com/yizhang" target="_blank" aria-label="Yi Zhang on Vimeo">',
    '              <i class="fa-brands fa-square-vimeo" aria-hidden="true"></i>',
    '            </a>',
    '          </li>',
    '        </ul>',
    '      </div>',
    '      <div class="row">',
    '        <div class="col-md-12">',
    '          Copyright &copy; 2026 Yi Z. Made with <i class="fa fa-heart" style="font-size:16px;color:#0abab5"></i> in California',
    '        </div>',
    '      </div>',
    '    </div>',
    '  </div>',
    '</footer>'
  ].join('\n');

  var scrollTop = [
    '<div class="scroll-top" id="scroll-top">',
    '  <a class="btn btn-primary js-scroll-trigger" href="#page-top">',
    '    <i class="fa fa-chevron-up"></i>',
    '  </a>',
    '</div>'
  ].join('\n');

  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('beforeend', footer + '\n' + scrollTop);
})();
