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

ajax({ url: 'https://data.bathhacked.org/resource/6e9r-8trr.json', [type=JSON] }, function(data){
  var headline = data[1];
  simply.title(headline);
});
