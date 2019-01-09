
'use strict';

chrome.alarms.onAlarm.addListener(function() {
  chrome.browserAction.setBadgeText({text: ''});
  chrome.notifications.create({
      type:     'basic',
      iconUrl:  'stay_hydrated.png',
      title:    'Time to Enjoy',
      message:  'It\'s time to relax, renew and revive!',
      buttons: [
        {title: 'Keep it Running.'}
      ],
      priority: 0});
});

chrome.notifications.onButtonClicked.addListener(function() {
  chrome.storage.sync.get(['minutes'], function(item) {
    chrome.browserAction.setBadgeText({text: 'A'});
    chrome.alarms.create({delayInMinutes: item.minutes});
  });
});
