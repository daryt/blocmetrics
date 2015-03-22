$(function() {
  $('a').click(function () {
    // alert('test');
    // console.log({"application": "testapp", "name": $(this).text(), "url": $(this).attr('href')});
    $.post('/events.json', {event: {"application": "testapp", "name": $(this).text(), "url": $(this).attr('href')}}, function (data) {
      console.log(data);
    }).fail(function (data) {
      console.log('failed');
      console.log(data);
    });
    // console.log($(this));
    // console.log('test');
    return false;
  });
});