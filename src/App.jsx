import { useState } from "react";
import "./App.css";
import beforeImage from "./assets/before-image.jpg";
import afterImage from "./assets/after-image.jpg";

function App() {
  const [isAccepted, setIsAccepted] = useState(false);

  const [noPosition, setNoPosition] = useState({
    top: 70,
    left: 70,
  });

  const moveNoButton = () => {
    const buttonWidth = 110;
    const buttonHeight = 55;
    const padding = 25;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const maxLeft = screenWidth - buttonWidth - padding;
    const maxTop = screenHeight - buttonHeight - padding;

    const newLeft =
      Math.random() * (maxLeft - padding) + padding;

    const newTop =
      Math.random() * (maxTop - padding) + padding;

    setNoPosition({
      left: Math.max(padding, Math.min(newLeft, maxLeft)),
      top: Math.max(padding, Math.min(newTop, maxTop)),
    });
  };

  const handleYes = () => {
    setIsAccepted(true);
  };

  if (isAccepted) {
    return (
      <main className="after-page">
        <div className="confetti" aria-hidden="true">
          <span>❤️</span>
          <span>💚</span>
          <span>✨</span>
          <span>❤️</span>
          <span>✨</span>
          <span>💚</span>
          <span>❤️</span>
          <span>✨</span>
        </div>

        <section className="after-card">
          <div className="after-image-wrapper">
            <img
              src={afterImage}
              alt="A happy moment together"
              className="after-image"
            />
          </div>

          <div className="celebration-heart">🥹💚</div>

          <p className="after-heading">SHE SAID YES!</p>

          <h1 className="after-title">
            Qiniso,
            <br />
            you just made my whole year. ❤️
          </h1>

          <p className="personal-message">
          ❤️ I know life hasn't always been perfect, but through everything,
          I'm grateful that I get to do this life with you and Siyamthanda. We've grown,
          learned, laughed, and faced so much together, and I wouldn't trade
          our journey for anything. Thank you for being my person, my home,
          and the woman I can soon get to call my wife. I love you, and I'm excited
          for everything that's still ahead of us. Here's to choosing each
          other, again and again. ❤️
        </p>

        <p className="after-message">
          Now you're stuck with me and Siyamthanda forever. 😂❤️
        </p>

          <div className="forever-message">
            Here's to us. 🥂
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="proposal-page">
      <div className="floating-hearts" aria-hidden="true">
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
      </div>

      <section className="proposal-card">
        <div
          className="proposal-image"
          style={{ backgroundImage: `url(${beforeImage})` }}
          aria-hidden="true"
        />

        <div className="heart">💚</div>

        <p className="small-heading">For my wife</p>

        <h1>
          Qiniso,
          <br />
          will you continue
          <br />
          being my wife?
        </h1>

        <p className="message">
          I have one very important question for you...
        </p>

        <button className="yes-button" onClick={handleYes}>
          Yes ❤️
        </button>
      </section>

      <div className="no-button-area">
        <button
          className="no-button"
          style={{
            top: `${noPosition.top}px`,
            left: `${noPosition.left}px`,
          }}
          onMouseEnter={moveNoButton}
          onTouchStart={(event) => {
            event.preventDefault();
            moveNoButton();
          }}
          onClick={(event) => {
            event.preventDefault();
            moveNoButton();
          }}
        >
          No
        </button>
      </div>
    </main>
  );
}

export default App;