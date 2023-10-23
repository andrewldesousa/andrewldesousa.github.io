import { Link } from "react-router-dom";


function Chat() {
  return (
    <div style={{'width': '100%', 'min-height': '100vh', 'display': 'flex', 'flex-direction': 'column', 'align-items': 'center'}}>
      <div className="alternative-header">
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg>
        </Link>
      </div>

      <div className="chat-container">
        <div className="messages-container">
          <div className="message-container">
            <div>
              <img src="llama.jpeg" width="36" height="36" alt="Avatar" className="avatar" />
            </div>
            <p>
              This is the first message.
            </p>
          </div>
          <div className="message-container bot-message">
            <img src="llama.jpeg" width="36" height="36" alt="Avatar" className="avatar" />
            <p>
              Sure, I can help you with that.
            </p>
          </div>
        </div>

        <div className="prompt-box">
          <textarea id="prompt-textarea" tabindex="0" data-id="root" rows="1" placeholder="Send a message" style={{maxHeight: "200px", height: "56px", overflowY: "hidden"}}></textarea>
          <button data-testid="send-button" style={{color: "rgb(0, 127, 245)"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgb(0, 127, 245)" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
              <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
            </svg>            
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
