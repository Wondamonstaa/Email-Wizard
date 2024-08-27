document.addEventListener('DOMContentLoaded', function() {
  const summaryLength = document.getElementById('summaryLength');
  const emailFetchLimit = document.getElementById('emailFetchLimit');
  const saveBtn = document.getElementById('saveBtn');

  // Load saved options
  chrome.storage.sync.get(['summaryLength', 'emailFetchLimit'], function(items) {
    summaryLength.value = items.summaryLength || 'medium';
    emailFetchLimit.value = items.emailFetchLimit || 10;
  });

  // Save options
  saveBtn.addEventListener('click', function() {
    chrome.storage.sync.set({
      summaryLength: summaryLength.value,
      emailFetchLimit: emailFetchLimit.value
    }, function() {
      alert('Options saved');
    });
  });
});