import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const limit = 100;

  const count = text.length;
  const isEmpty = text.trim() === "";
  const isInvalid = count > limit;
  const remaining = limit - count;

  const handlePost = () => {
    alert("Your post is ready!");
    setText("");
  };

  return (
    <div className="page">
      <nav className="navbar">
        <div className="brand">
          <span className="brand-icon">✦</span>
          Postly
        </div>
        <span className="nav-tag">CREATE SOMETHING GREAT</span>
      </nav>

      <main className="main">
        <div className="intro">
          <span className="eyebrow">YOUR SPACE TO SHARE</span>
          <h1>
            What's on your
            <br />
            <span>mind today?</span>
          </h1>
          <p>Put your thoughts into words and share your story.</p>
        </div>

        <div className="post-card">
          <div className="card-top">
            <div className="avatar">M</div>
            <div className="user-info">
              <h3>My Post</h3>
              <p>Creating a new post · Public</p>
            </div>
            <span className="edit-icon">✎</span>
          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start writing something amazing..."
            maxLength={150}
          />

          <div className="counter-section">
            <div className="progress-track">
              <div
                className={`progress-fill ${
                  isInvalid ? "over-limit" : ""
                }`}
                style={{
                  width: `${Math.min(count / limit, 1) * 100}%`,
                }}
              />
            </div>

            <div className="counter-row">
              <span className={isInvalid ? "error" : "hint"}>
                {isInvalid
                  ? "Limit exceeded"
                  : "Make every word count"}
              </span>

              <span className="count">
                <strong className={isInvalid ? "error" : ""}>
                  {count}
                </strong>
                <span> / {limit}</span>
              </span>
            </div>
          </div>

          <div className="card-bottom">
            <span className="tip">
              ✨ {remaining >= 0
                ? `${remaining} characters remaining`
                : `${Math.abs(remaining)} characters over limit`}
            </span>

            <button
              className="post-btn"
              disabled={isEmpty || isInvalid}
              onClick={handlePost}
            >
              Post now <span>→</span>
            </button>
          </div>
        </div>

        <div className="footer-note">
          <span>✦</span> Your words. Your world.
        </div>
      </main>
    </div>
  );
}

export default App;