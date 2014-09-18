var hockeyapp = require('nl.rebelic.hockeyapp');
hockeyapp.start('<yourappid>');

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
