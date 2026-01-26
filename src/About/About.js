import React, { useState, useRef, useEffect } from "react";
import Header from "../Header/Header";
import Fotter from "../Fotter/Fotter";
import "./About.css";
import Calendar from '../About/Calendar'

// 🌍 All translations (you can add more if needed)
const translations = {
  en: {
    name: "Name",
    fullName: "MAHENDRA REDDY GANAPAM",
    role: "Role",
    roleDesc: "RPA DEVELOPER (Robotic Process Automation)",
    summaryTitle: "Summary",
    summaryText:
      "RPA Developer – Power Automate & UiPath. Experienced in automating business workflows using Power Automate and UiPath. Skilled in optimizing processes, reducing manual effort, and integrating APIs.",
    languages: "Languages",
    telugu: "Telugu",
    english: "English",
    hobbies: "Hobbies",
    games: "Online Games (Clash of Clans)",
    movies: "Movies",
    strength: "Strength",
    na: "N/A",
    weakness: "Weakness",
  },
  hi: {
    name: "नाम",
    fullName: "महेंद्र रेड्डी गणपम",
    role: "भूमिका",
    roleDesc: "आरपीए डेवलपर (रोबोटिक प्रोसेस ऑटोमेशन)",
    summaryTitle: "सारांश",
    summaryText:
      "आरपीए डेवलपर – Power Automate और UiPath में अनुभवी। व्यापार प्रक्रियाओं को स्वचालित करने में निपुण।",
    languages: "भाषाएँ",
    telugu: "तेलुगु",
    english: "अंग्रेज़ी",
    hobbies: "शौक़",
    games: "ऑनलाइन गेम्स (क्लैश ऑफ क्लैन्स)",
    movies: "फ़िल्में",
    strength: "मज़बूती",
    na: "लागू नहीं",
    weakness: "कमज़ोरी",
  },
  te: {
    name: "పేరు",
    fullName: "మహేంద్ర రెడ్డి గణపం",
    role: "పాత్ర",
    roleDesc: "ఆర్‌పిఎ డెవలపర్ (రోబోటిక్ ప్రాసెస్ ఆటోమేషన్)",
    summaryTitle: "సారాంశం",
    summaryText:
      "Power Automate మరియు UiPath లో అనుభవం కలిగిన ఆర్‌పిఎ డెవలపర్. వ్యాపార ప్రక్రియలను ఆటోమేట్ చేయడంలో నైపుణ్యం కలిగి ఉన్నాను.",
    languages: "భాషలు",
    telugu: "తెలుగు",
    english: "ఇంగ్లీష్",
    hobbies: "అభిరుచులు",
    games: "ఆన్‌లైన్ గేమ్స్ (క్లాష్ ఆఫ్ క్లాన్స్)",
    movies: "సినిమాలు",
    strength: "బలం",
    na: "వర్తించదు",
    weakness: "బలహీనత",
  },
  ta: {
    name: "பெயர்",
    fullName: "மகேந்திரா ரெட்டி கணபம்",
    role: "பங்கு",
    roleDesc: "RPA டெவலப்பர் (ரோபோட்டிக் ப்ராசஸ் ஆட்டமேஷன்)",
    summaryTitle: "சுருக்கம்",
    summaryText:
      "Power Automate மற்றும் UiPath பயன்படுத்தி செயல்முறைகளை தானியக்கப்படுத்துவதில் அனுபவம் பெற்றவர்.",
    languages: "மொழிகள்",
    telugu: "தெலுங்கு",
    english: "ஆங்கிலம்",
    hobbies: "பொழுதுபோக்குகள்",
    games: "ஆன்லைன் விளையாட்டுகள் (Clash of Clans)",
    movies: "படங்கள்",
    strength: "வலிமை",
    na: "பொருந்தாது",
    weakness: "பலவீனம்",
  },
  kn: {
    name: "ಹೆಸರು",
    fullName: "ಮಹೇಂದ್ರ ರೆಡ್ಡಿ ಗಣಪಮ್",
    role: "ಪಾತ್ರ",
    roleDesc: "ಆರ್‌ಪಿಎ ಡೆವಲಪರ್ (ರೋಬೋಟಿಕ್ ಪ್ರಕ್ರಿಯೆ ಸ್ವಯಂಚಾಲನೆ)",
    summaryTitle: "ಸಾರಾಂಶ",
    summaryText:
      "Power Automate ಮತ್ತು UiPath ಬಳಸಿ ವ್ಯವಹಾರ ಪ್ರಕ್ರಿಯೆಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತಗೊಳಿಸುವಲ್ಲಿ ಅನುಭವ.",
    languages: "ಭಾಷೆಗಳು",
    telugu: "ತೆಲುಗು",
    english: "ಇಂಗ್ಲಿಷ್",
    hobbies: "ಹವ್ಯಾಸಗಳು",
    games: "ಆನ್‌ಲೈನ್ ಆಟಗಳು (Clash of Clans)",
    movies: "ಚಿತ್ರಗಳು",
    strength: "ಶಕ್ತಿ",
    na: "ಲಾಗು ಆಗುವುದಿಲ್ಲ",
    weakness: "ದುರ್ಬಲತೆ",
  },
  ml: {
    name: "പേര്",
    fullName: "മഹേന്ദ്ര റെഡി ഗണപം",
    role: "പങ്ക്",
    roleDesc: "RPA ഡെവലപ്പർ (റോബോട്ടിക് പ്രോസസ് ഓട്ടോമേഷൻ)",
    summaryTitle: "സംഗ്രഹം",
    summaryText:
      "Power Automate, UiPath എന്നിവ ഉപയോഗിച്ച് പ്രക്രിയകൾ സ്വയംമാറ്റം ചെയ്യുന്നതിൽ പരിചയം.",
    languages: "ഭാഷകൾ",
    telugu: "തെലുങ്ക്",
    english: "ഇംഗ്ലീഷ്",
    hobbies: "ഹോബികൾ",
    games: "ഓൺലൈൻ ഗെയിമുകൾ (Clash of Clans)",
    movies: "സിനിമകൾ",
    strength: "ശക്തി",
    na: "പ്രയോഗശൂന്യം",
    weakness: "ദൗർബല്യം",
  },
  mr: {
    name: "नाव",
    fullName: "महेंद्र रेड्डी गणपम",
    role: "भूमिका",
    roleDesc: "RPA डेव्हलपर (रोबोटिक प्रोसेस ऑटोमेशन)",
    summaryTitle: "सारांश",
    summaryText:
      "Power Automate आणि UiPath वापरून प्रक्रिया स्वयंचलित करण्यात अनुभव.",
    languages: "भाषा",
    telugu: "तेलुगु",
    english: "इंग्रजी",
    hobbies: "छंद",
    games: "ऑनलाइन गेम्स (Clash of Clans)",
    movies: "चित्रपट",
    strength: "बल",
    na: "लागू नाही",
    weakness: "कमजोरी",
  },
  gu: {
    name: "નામ",
    fullName: "મહેન્દ્ર રેડ્ડી ગણપમ",
    role: "ભૂમિકા",
    roleDesc: "RPA ડેવલપર (રોબોટિક પ્રોસેસ ઓટોમેશન)",
    summaryTitle: "સારાંશ",
    summaryText:
      "Power Automate અને UiPath નો ઉપયોગ કરીને પ્રક્રિયાઓને સ્વચાલિત કરવાનો અનુભવ.",
    languages: "ભાષાઓ",
    telugu: "તેલુગુ",
    english: "અંગ્રેજી",
    hobbies: "શોખ",
    games: "ઓનલાઇન ગેમ્સ (Clash of Clans)",
    movies: "ફિલ્મો",
    strength: "શક્તિ",
    na: "લાગુ નથી",
    weakness: "નબળાઈ",
  },
  de: {
    name: "Name",
    fullName: "Mahendra Reddy Ganapam",
    role: "Rolle",
    roleDesc: "RPA-Entwickler (Robotic Process Automation)",
    summaryTitle: "Zusammenfassung",
    summaryText:
      "RPA-Entwickler spezialisiert auf Power Automate & UiPath Automatisierung.",
    languages: "Sprachen",
    telugu: "Telugu",
    english: "Englisch",
    hobbies: "Hobbys",
    games: "Online-Spiele (Clash of Clans)",
    movies: "Filme",
    strength: "Stärke",
    na: "Nicht zutreffend",
    weakness: "Schwäche",
  },
  tr: {
    name: "İsim",
    fullName: "Mahendra Reddy Ganapam",
    role: "Rol",
    roleDesc: "RPA Geliştiricisi (Robotik Süreç Otomasyonu)",
    summaryTitle: "Özet",
    summaryText:
      "Power Automate ve UiPath kullanarak iş süreçlerini otomatikleştirme konusunda deneyimli.",
    languages: "Diller",
    telugu: "Telugu",
    english: "İngilizce",
    hobbies: "Hobiler",
    games: "Çevrimiçi Oyunlar (Clash of Clans)",
    movies: "Filmler",
    strength: "Güçlü Yön",
    na: "Yok",
    weakness: "Zayıf Yön",
  },
};

const About = () => {
  const [lang, setLang] = useState("en");
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const t = translations[lang];
const dropdownRef = useRef(null);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setLangMenuOpen(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);


  return (
    <div>
      <Header />
      <div className="about-container">
        <div className="language-selector" ref={dropdownRef}>
  <label className="lang-label">🌐 Select Language</label>
  <div className="custom-dropdown">
    <div className="dropdown-selected" onClick={() => setLangMenuOpen(!langMenuOpen)}>
      {translations[lang].english || "English"} ▼
    </div>
    {langMenuOpen && (
      <ul className="dropdown-list">
        {Object.entries({
          en: "English", hi: "Hindi", te: "Telugu", ta: "Tamil", kn: "Kannada",
          ml: "Malayalam", mr: "Marathi", gu: "Gujarati", de: "German", tr: "Turkish",
        }).map(([code, name]) => (
          <li key={code} onClick={() => { setLang(code); setLangMenuOpen(false); }}>
            {name}
          </li>
        ))}
      </ul>
    )}
  </div>
</div>


        <div className="profile-container">
          <div className="profile-wrapper">
            <img className="profile-photo" src="/profile.png" alt="Profile" />
            <div className="profile-overlay"></div>
          </div>
        </div>

        <div className="card-container">
          <div className="card centered-card">
            <div className="card-body">
              <h1>{t.name}</h1>
              <p>{t.fullName}</p>
            </div>
          </div>

          <div className="card centered-card">
            <div className="card-body">
              <h1>{t.role}</h1>
              <p>{t.roleDesc}</p>
            </div>
          </div>

          <div className="card summary-card">
            <div className="card-body">
              <h1>{t.summaryTitle}</h1>
              <p>{t.summaryText}</p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h1>{t.languages}</h1>
              <p>{t.telugu}</p>
              <p>{t.english}</p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h1>{t.hobbies}</h1>
              <p>{t.games}</p>
              <p>{t.movies}</p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h1>{t.strength}</h1>
              <p>{t.na}</p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h1>{t.weakness}</h1>
              <p>{t.na}</p>
            </div>
          </div>
        </div>
      </div>
                <div className="calendar-section">
  <h2 className="calendar-title">📅 Calendar</h2>
  <Calendar />
</div>
      <Fotter />
    </div>
  );
};

export default About;
