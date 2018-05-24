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
Pebble.showSimpleNotificationOnPebble('Hello!',
  'Notifications from JavaScript? Welcome to the future!');
simply.text({ title: 'Counter', subtitle: count });
