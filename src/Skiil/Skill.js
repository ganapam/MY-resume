import React, { useState } from 'react';
import Header from '../Header/Header';
import './Skill.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Fotter from '../Fotter/Fotter'
const Skill = () => {
  const [isCertificatesOpen, setIsCertificatesOpen] = useState(false);
  const [secobnarycertificate, setSecondarycertificate] = useState(false);
  const [intermediatecertificate, setIntermediatecertificate] = useState(false);
  const [btechcertificate, setBetchcertificate] = useState(false);
  const [python, setPython] = useState(false);
  const [azure900, setAzure900] = useState(false);
  const [azurepl900, setAzurepl900] = useState(false);
  const [azurepl500, setAzurepl500] = useState(false);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);
  const toggleCertificates = () => {
    setIsCertificatesOpen(!isCertificatesOpen);
  };
  const toggleSecondarycertificate = () => {
    setSecondarycertificate(!secobnarycertificate);
  };
  const toggleIntermediatecertificate = () => {
    setIntermediatecertificate(!intermediatecertificate);
  };
  const toggleBtechcertificate = () => {
    setBetchcertificate(!btechcertificate);
  };
  const togglePython = () => {
    setPython(!python);
  };
  const toggleAzure900 = () => {
    setAzure900(!azure900);
  };
  const toggleAzurepl900 = () => {
    setAzurepl900(!azurepl900);
  };
  const toggleAzurepl500 = () => {
    setAzurepl500(!azurepl500);
  };
  const toggleFullscreen = () => {
    setIsImageFullscreen(!isImageFullscreen);
  };
  return (
    <div>
      <Header />
      <div className="skills-container">
        <h1>Skills</h1>
        <div className="logos-container">
        <div className="logo-item">
            <img src='./html.png' alt="HTML" />
            <p>HTML</p>
          </div>
          <div className="logo-item">
            <img src='./css.png' alt="CSS" />
            <p>CSS</p>
          </div>
          <div className="logo-item">
            <img src='./js.png' alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="logo-item">
            <img src='./react.png' alt="React" />
            <p>React</p>
          </div>
          <div className="logo-item">
            <img src='./python.png' alt="Python" />
            <p>Python</p>
          </div>
          <div className="logo-item">
            <img src='./mysql.png' alt="MYSQL" />
            <p>MYSQL</p>
          </div>
          <div className="logo-item">
            <img src='./aws.png' alt="Aws" />
            <p>Aws</p>
          </div>
          <div className="logo-item">
            <img src='./azure.png' alt="Azure" />
            <p>Azure</p>
          </div>
          <div className="logo-item">
            <img src='./networking.png' alt="Networking" />
            <p>Networking</p>
          </div>
          <div className="logo-item">
            <img src='./cybersecurity.png' alt="Cybersecurity" />
            <p>Cybersecurity</p>
          </div>
          <div className="logo-item">
  <img src='./settings.png' alt="RPA" />
  <p>RPA</p>
</div>
        </div>
        <div className="certificates-header" onClick={toggleCertificates}>
        <h1 className="education-heading"> Skill Certificates</h1>
        {isCertificatesOpen ? <FaAngleUp className="icon" /> : <FaAngleDown className="icon" />}
      </div>
      {isCertificatesOpen && (
        <div>
                <div className="certificates-header" onClick={toggleSecondarycertificate}>
        <h1 className="certificate-heading"> AWS Certificate</h1>
        {secobnarycertificate ? <FaAngleUp className="icon" /> : <FaAngleDown className="icon" />}
      </div>
      {secobnarycertificate && (
        <div>
          <div className={isImageFullscreen ? "fullscreen-image-container" : "normal-image-container"} onClick={toggleFullscreen}>
            <img src="./aws1.png" alt="10th Class Marksheet" className={isImageFullscreen ? "fullscreen-image" : "normal-image"} />
          </div>
        </div>
      )}
                      <div className="certificates-header" onClick={toggleIntermediatecertificate}>
        <h1 className="certificate-heading"> Cyber Security Certificate</h1>
        {intermediatecertificate ? <FaAngleUp className="icon" /> : <FaAngleDown className="icon" />}
      </div>
      {intermediatecertificate && (
        <div>
          <div className={isImageFullscreen ? "fullscreen-image-container" : "normal-image-container"} onClick={toggleFullscreen}>
            <img src="./cybersecurity1.png" alt="10th Class Marksheet" className={isImageFullscreen ? "fullscreen-image" : "normal-image"} />
          </div>
        </div>
      )}
                            <div className="certificates-header" onClick={toggleBtechcertificate}>
        <h1 className="certificate-heading"> SQL Certificate</h1>
        {btechcertificate ? <FaAngleUp className="icon" /> : <FaAngleDown className="icon" />}
      </div>
      {btechcertificate && (
        <div>
          <div className={isImageFullscreen ? "fullscreen-image-container" : "normal-image-container"} onClick={toggleFullscreen}>
            <img src="./sql.png" alt="10th Class Marksheet" className={isImageFullscreen ? "fullscreen-image" : "normal-image"} />
          </div>
        </div>
      )}
                                  <div className="certificates-header" onClick={togglePython}>
        <h1 className="certificate-heading"> Python Certificate</h1>
        {python ? <FaAngleUp className="icon" /> : <FaAngleDown className="icon" />}
      </div>
      {python && (
        <div>
          <div className={isImageFullscreen ? "fullscreen-image-container" : "normal-image-container"} onClick={toggleFullscreen}>
            <img src="./python1.png" alt="10th Class Marksheet" className={isImageFullscreen ? "fullscreen-image" : "normal-image"} />
          </div>
        </div>
      )}
                                        <div className="certificates-header" onClick={toggleAzure900}>
        <h1 className="certificate-heading"> Azure AZ 900 Certificate</h1>
        {azure900 ? <FaAngleUp className="icon" /> : <FaAngleDown className="icon" />}
      </div>
      {azure900 && (
        <div>
          <div className={isImageFullscreen ? "fullscreen-image-container" : "normal-image-container"} onClick={toggleFullscreen}>
            <img src="./az900.png" alt="10th Class Marksheet" className={isImageFullscreen ? "fullscreen-image" : "normal-image"} />
          </div>
        </div>
      )}
                                              <div className="certificates-header" onClick={toggleAzurepl900}>
        <h1 className="certificate-heading"> Azure PL 900 Certificate</h1>
        {azurepl900 ? <FaAngleUp className="icon" /> : <FaAngleDown className="icon" />}
      </div>
      {azurepl900 && (
        <div>
          <div className={isImageFullscreen ? "fullscreen-image-container" : "normal-image-container"} onClick={toggleFullscreen}>
            <img src="./pl900.png" alt="10th Class Marksheet" className={isImageFullscreen ? "fullscreen-image" : "normal-image"} />
          </div>
        </div>
      )}
                                                    <div className="certificates-header" onClick={toggleAzurepl500}>
        <h1 className="certificate-heading"> Azure PL 500 Certificate</h1>
        {azurepl500 ? <FaAngleUp className="icon" /> : <FaAngleDown className="icon" />}
      </div>
      {azurepl500 && (
        <div>
          <div className={isImageFullscreen ? "fullscreen-image-container" : "normal-image-container"} onClick={toggleFullscreen}>
                       <div
  style={{
    position: "relative",
    width: "100%",
    height: "100vh", // auto-fits screen height
    maxHeight: "100%",
  }}
>
  <iframe
    src="./Pl500_Certificate.pdf"
    title="PL500 Certificate"
    style={{
      width: "100%",
      height: "100%",
      border: "none",
    }}
  />
</div>
          </div>
        </div>
      )}
        </div>
      )}
      </div>
      <Fotter/>
    </div>
  );
}

export default Skill;
