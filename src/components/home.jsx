import React from 'react'

const Home = () => {
  const langBtn = document.getElementById("langBtn");

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

let currentLang = "en";

function renderLanguage(lang) {
  const data = content[lang];
  document.getElementById("title").textContent = data.title;
  document.getElementById("motto").textContent = data.motto;
  document.getElementById("heroDesc").textContent = data.heroDesc;
  document.getElementById("volunteerBtn").textContent = data.joinVolunteer;
  document.getElementById("memberBtn").textContent = data.joinMember;
  document.getElementById("goalsTitle").textContent = data.goalsTitle;
  document.getElementById("voiceTitle").textContent = data.voiceTitle;
  document.getElementById("voiceDesc").textContent = data.voiceDesc;
  document.getElementById("contact").textContent = data.contact;
  document.getElementById("footerText").textContent = data.footer;

  const goalCards = document.getElementById("goalCards");
  goalCards.innerHTML = "";
  data.goals.forEach((goal) => {
    const div = document.createElement("div");
    div.textContent = goal;
    goalCards.appendChild(div);
  });
}

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "kn" : "en";
  renderLanguage(currentLang);
  langBtn.textContent = currentLang === "en" ? "ಕನ್ನಡ" : "English";
});

// Initial render
renderLanguage("en");
  return (
    <div>
 <header class="navbar">
    <h1 id="title">Uttama Rajakiya</h1>
    <button id="langBtn">ಕನ್ನಡ</button>
  </header>


  <section class="hero">
    <h2 id="motto">Kannadiga Forever</h2>
    <p id="heroDesc">
      A movement built by the people, for the people — uniting Kannadigas for a better future.
    </p>
    <div class="btn-group">
      <button id="volunteerBtn">Join as Volunteer</button>
      <button id="memberBtn">Join as Member</button>
    </div>
  </section>
  <section class="goals">
    <h3 id="goalsTitle">Our Vision & Goals</h3>
    <div class="goal-cards" id="goalCards"></div>
  </section>


  <section class="voice">
    <h3 id="voiceTitle">Voice of Kannada People</h3>
    <p id="voiceDesc">
      We amplify the real voices of Kannadigas — their struggles, dreams, and hopes for a brighter Karnataka.
    </p>
  </section>

  <footer>
    <p id="contact">Contact Us</p>
    <p>Email: contact@uttamarajakiya.in | Phone: +91 98765 43210</p>
    <p id="footerText">© 2025 Uttama Rajakiya. All rights reserved.</p>
  </footer> 
  </div> )
};

export default Home