let accessToken = '';

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    chrome.tabs.create({ url: "welcome.html" });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getEmails") {
    fetchEmails().then(sendResponse);
    return true;  // Indicates we will send a response asynchronously
  } else if (request.action === "summarizeEmail") {
    summarizeEmail(request.emailId).then(sendResponse);
    return true;
  }
});

function getAccessToken() {
  return new Promise((resolve, reject) => {
    chrome.identity.getAuthToken({ interactive: true }, function(token) {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        accessToken = token;
        resolve(token);
      }
    });
  });
}

async function fetchEmails() {
  try {
    const token = await getAccessToken();
    const response = await fetch(
      `https://www.googleapis.com/gmail/v1/users/me/messages?maxResults=10`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    return Promise.all(data.messages.map(message => fetchEmailDetails(message.id)));
  } catch (error) {
    console.error('Error fetching emails:', error);
    return [];
  }
}

async function fetchEmailDetails(messageId) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/gmail/v1/users/me/messages/${messageId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    return {
      id: data.id,
      subject: data.payload.headers.find(header => header.name === "Subject").value,
      snippet: data.snippet
    };
  } catch (error) {
    console.error('Error fetching email details:', error);
    return null;
  }
}

async function summarizeEmail(emailId) {
  // This is a placeholder for the actual summarization logic
  // In a real implementation, you would fetch the full email content
  // and use an AI service or algorithm to generate a summary
  const emailDetails = await fetchEmailDetails(emailId);
  return {
    summary: `Summary of email "${emailDetails.subject}": ${emailDetails.snippet}...`
  };
}