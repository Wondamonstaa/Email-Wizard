function addButtonToEmails() {
  const emailRows = document.querySelectorAll('tr.zA');
  emailRows.forEach(row => {
    if (!row.querySelector('.email-wizard-btn')) {
      const button = document.createElement('button');
      button.textContent = 'Summarize';
      button.className = 'email-wizard-btn';
      button.addEventListener('click', () => summarizeEmail(row));
      row.querySelector('td:last-child').appendChild(button);
    }
  });
}

function summarizeEmail(row) {
  const emailId = row.getAttribute('data-legacy-message-id');
  chrome.runtime.sendMessage({action: "summarizeEmail", emailId: emailId}, function(response) {
    alert(response.summary);
  });
}

// Run the function when the page loads
addButtonToEmails();

// Use a MutationObserver to handle dynamically loaded emails
const observer = new MutationObserver(addButtonToEmails);
observer.observe(document.body, { childList: true, subtree: true });