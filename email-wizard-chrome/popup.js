document.addEventListener('DOMContentLoaded', function() {
  const connectBtn = document.getElementById('connectBtn');
  const refreshBtn = document.getElementById('refreshBtn');
  const emailList = document.getElementById('emailList');

  connectBtn.addEventListener('click', connectToGmail);
  refreshBtn.addEventListener('click', refreshEmails);

  function connectToGmail() {
    chrome.runtime.sendMessage({action: "getAuthToken"}, function(response) {
      if (response.token) {
        connectBtn.textContent = "Connected";
        connectBtn.disabled = true;
        refreshEmails();
      } else {
        console.error('Failed to connect to Gmail');
      }
    });
  }

  function refreshEmails() {
    emailList.innerHTML = 'Loading...';
    chrome.runtime.sendMessage({action: "getEmails"}, function(emails) {
      emailList.innerHTML = '';
      emails.forEach(email => {
        const div = document.createElement('div');
        div.textContent = email.subject;
        emailList.appendChild(div);
      });
    });
  }
});