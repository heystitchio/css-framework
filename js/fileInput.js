/* ========================================================================
 * Bootstrap: fileInput.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  var inputs = document.querySelectorAll('.input-file');
  $.map(inputs, function (input) {
    var label = input.nextElementSibling;
    var labelVal = label.innerHTML;

    input.addEventListener('change', function (e) {
      var fileName = '';

      if (this.files && this.files.length > 1) {
        fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
      } else {
        fileName = e.target.value.split('\\').pop();
      }

      if (fileName) {
        label.innerHTML = fileName;
        $(label).addClass('file-primary');
      } else {
        label.innerHTML = labelVal;
        $(label).removeClass('file-primary');
      }
    });
  });

}(jQuery);
