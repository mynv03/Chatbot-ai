import "./App.scss";

function App() {
  return (
    <>
      <div className="app">
        <header className="header">
          <img className="logo" src="./images/chat-bot.png" />
          <h2 className="title">AI Chatbot</h2>
        </header>
        <div className="chatContainer" />
      </div>
    </>
  );
}

export default App;
