(function ($) {
  $.extend($.fn, {
    filesInDirectory: function (o) {
      if (!o) o = {};
      if (o.root === undefined) o.root = '/';
      if (o.script === undefined) o.script = 'FilesInDirectory.asp';
      if (o.post === undefined) o.post = false;

      if (o.post) {
        $.post('/connections/' + o.script, { dir: o.root }, function (data) {
          $.each(data, function (id, name) {
            $('<div>').html(name).appendTo(o.output);
          });
        }, "json");
      } else {
        $.getJSON('/connections/' + o.script, function (data) {
          $.each(data, function (id, name) {
            $('<div>').html(name).appendTo(o.output);
          });
        });
      }
    }
  });
})(jQuery);