var count = parseInt(localStorage.getItem('count')) || 0;

simply.on('singleClick', function(e) {
  if (e.button === 'up') {
    simply.subtitle(++count);
    simply.vibe('short');
  } else if (e.button === 'down') {
    simply.subtitle(--count);
  }
  localStorage.setItem('count', count);
});
ajax({ url: 'http://simplyjs.io' }, function(data){
  var headline = data.match(/<h1>(.*?)<\/h1>/)[1];
  simply.title(headline);
});
simply.text({ title: 'Counter', subtitle: count });
