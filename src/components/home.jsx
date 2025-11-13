import React, { useState } from "react";

const Home = () => {
  const content = {
    en: {
      title: "Uttama Rajakiya",
      motto: "Kannadiga Forever",
      heroDesc:
        "A movement built by the people, for the people — uniting Kannadigas for a better future.",
      joinVolunteer: "Join as Volunteer",
      joinMember: "Join as Member",
      goalsTitle: "Our Vision & Goals",
      goals: [
        "Empowering youth and promoting employment across Karnataka.",
        "Preserving Kannada culture, art, and language.",
        "Transparent governance and equal opportunities for all.",
      ],
      voiceTitle: "Voice of Kannada People",
      voiceDesc:
        "We amplify the real voices of Kannadigas — their struggles, dreams, and hopes for a brighter Karnataka.",
      contact: "Contact Us",
      footer: "© 2025 Uttama Rajakiya. All rights reserved.",
    },
    kn: {
      title: "ಉತ್ತಮ ರಾಜಕೀಯ",
      motto: "ಕನ್ನಡಿಗ ಫರೆವರ್",
      heroDesc:
        "ಜನರಿಂದ ನಿರ್ಮಿತವಾದ ಚಳವಳಿ, ಜನರಿಗಾಗಿಯೇ — ಒಗ್ಗಟ್ಟಿನ ಕರ್ನಾಟಕಕ್ಕಾಗಿ.",
      joinVolunteer: "ಸ್ವಯಂಸೇವಕರಾಗಿ ಸೇರಿ",
      joinMember: "ಸದಸ್ಯರಾಗಿ ಸೇರಿ",
      goalsTitle: "ನಮ್ಮ ದೃಷ್ಟಿ ಮತ್ತು ಗುರಿಗಳು",
      goals: [
        "ಯುವಕರಿಗೆ ಅಧಿಕಾರ ನೀಡುವುದು ಮತ್ತು ಉದ್ಯೋಗವನ್ನು ಉತ್ತೇಜಿಸುವುದು.",
        "ಕನ್ನಡ ಸಂಸ್ಕೃತಿ, ಕಲೆ ಮತ್ತು ಭಾಷೆಯನ್ನು ಉಳಿಸಿಕೊಳ್ಳುವುದು.",
        "ಪಾರದರ್ಶಕ ಆಡಳಿತ ಮತ್ತು ಎಲ್ಲರಿಗೂ ಸಮಾನ ಅವಕಾಶಗಳು.",
      ],
      voiceTitle: "ಕನ್ನಡ ಜನರ ಧ್ವನಿ",
      voiceDesc:
        "ನಾವು ಕನ್ನಡಿಗರ ನಿಜವಾದ ಧ್ವನಿಗಳನ್ನು — ಅವರ ಹೋರಾಟಗಳು, ಕನಸುಗಳು ಮತ್ತು ಉತ್ತಮ ಕರ್ನಾಟಕದ ಆಶಾವಾದಗಳನ್ನು ಪ್ರತಿಧ್ವನಿಸುತ್ತೇವೆ.",
      contact: "ಸಂಪರ್ಕಿಸಿ",
      footer: "© 2025 ಉತ್ತಮ ರಾಜಕೀಯ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    },
  };

  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "kn" : "en"));
  };

  const data = content[lang];

  return (
    <div className="home-container">
      <header className="navbar">
        <h1>{data.title}</h1>
        <button id="langBtn" onClick={toggleLang}>
          {lang === "en" ? "ಕನ್ನಡ" : "English"}
        </button>
      </header>

      <section className="hero">
      </section>

      <section className="goals">
        <h3>{data.goalsTitle}</h3>
        <div className="goal-cards">
          {data.goals.map((goal, i) => (
            <div key={i} className="goal-card">
              {goal}
            </div>
          ))}
        </div>
           <div className="section-1">
        <h2>{data.motto}</h2>
        <p>{data.heroDesc}</p>
        <div className="btn-group">
          <button className="volunteer">{data.joinVolunteer}</button>
          <button className="member-btn">{data.joinMember}</button>
        </div>
        </div>
      </section>

      <section className="voice">
        <h3>{data.voiceTitle}</h3>
        <p>{data.voiceDesc}</p>
      </section>

      <footer>
        <p>{data.contact}</p>
        <p>Email: contact@uttamarajakiya.in | Phone: +91 99xxxxxxx</p>
        <p>{data.footer}</p>
      </footer>
    </div>
  );
};

export default Home;
