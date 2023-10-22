import { Link } from "react-router-dom";


function Chat() {
  return (
    <div style={{'width': '100%', 'min-height': '100vh', 'display': 'flex', 'flex-direction': 'column', 'align-items': 'center'}}>
      <div className="alternative-header">
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg>
        </Link>
      </div>

      <div className="chat-container">
        <div className="messages-container">
          <div className="message">
            message 1
          </div>
          <div className="message bot-message">
            message 1
          </div>
        </div>
        <div className="prompt-box">
          <textarea id="prompt-textarea" tabindex="0" data-id="root" rows="1" placeholder="Send a message" style={{maxHeight: "200px", height: "56px", overflowY: "hidden"}}></textarea>
          <button data-testid="send-button" style={{backgroundColor: "rgb(0, 127, 245)"}}><span class="" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="icon-sm m-1 md:m-0"><path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor"></path></svg></span></button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
