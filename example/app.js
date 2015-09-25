var hockeyapp = require('nl.rebelic.hockeyapp');
hockeyapp.start('3fcc45ce6f74b483f14c56c91d243e83');

hockeyapp.setFeedbackScreenshotType('last');
// hockeyapp.setFeedbackScreenshotType('3finger');

var win = Ti.UI.createWindow({
  backgroundColor: 'white'
});

var btnSent = Ti.UI.createButton({
  top: 100,
  title: 'Send feedback'
});

btnSent.addEventListener('click', function(e) {
  
  if (Ti.Platform.name !== 'iPhone OS') {
    alert('Sorry, iOS only!');
    return;
  }
  
  hockeyapp.showFeedbackComposeView();
  
});

var btnShow = Ti.UI.createButton({
  top: 200,
  title: 'View feedback'
});

btnShow.addEventListener('click', function(e) {
  
  if (Ti.Platform.name !== 'iPhone OS') {
    alert('Sorry, iOS only!');
    return;
  }
  
  hockeyapp.showFeedbackListView();
  
});

win.add(btnSent);
win.add(btnShow);

win.open();
