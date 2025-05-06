/* 
Case #1: The Hidden Message
Scenario: A crucial message was hidden in a webpage by Agent X before they disappeared. The message is stored in an invisible element.

Task:
- Select an element with ID 'hidden-message' using getElementById
- Make it visible by changing its style properties
- Read and decode the message (reverse the text) using string manipulation
- Display the decoded message in another element with ID 'decoded-message'
<p id="hidden-message" style="display: none;">!egassem terces a si sihT</p>
<p>Decoded Message: <span id="decoded-message"></span></p>
<button onclick="revealMessage()">Reveal Message</button>
 */
function revealMessage() {
    const hidden = document.getElementById('hidden-message');
  
    hidden.style.display = 'block'; 
  
    const originalText = hidden.textContent;
  
    const decodedText = originalText.split('').reverse().join('');
  
    document.getElementById('decoded-message').textContent = decodedText;
  }
  