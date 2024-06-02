import React, { useState } from 'react';
import Header from '../Header/Header';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import './Education.css';
import Fotter from '../Fotter/Fotter'
const Education = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [inter, setInter] = useState(false);
  const [tenth, setTenth] = useState(false);
  const [isCertificatesOpen, setIsCertificatesOpen] = useState(false);
  const [secobnarycertificate, setSecondarycertificate] = useState(false);
  const [intermediatecertificate, setIntermediatecertificate] = useState(false);
  const [btechcertificate, setBetchcertificate] = useState(false);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };
  const toggleInter = () => {
    setInter(!inter);
  };
  const toggleTenth = () => {
    setTenth(!tenth);
  };
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

  const toggleFullscreen = () => {
    setIsImageFullscreen(!isImageFullscreen);
  };

  return (
    <div className="education-container">
      <Header />
      <div className="education-container1">
      <div className="certificates-header" onClick={toggleDetails}>
        <h2 className="education-heading">Bachelor of Technology</h2>
        {isOpen ? <FaAngleUp className="icon" /> : <FaAngleDown className="icon" />}
      </div>
      {isOpen && (
        <div className="education-details">
          <h2 className="education-degree">Computer Science and Engineering</h2>
          <p className="education-school">Gandhi Institute of Technology and Management</p>
          <p className="education-year"> Graduation: July 2019 - July 2023</p>
          <p className="cgpa">CGPA: 7.8</p>
        </div>
      )}
            <div className="certificates-header" onClick={toggleInter}>
        <h1 className="education-heading">Intermediate</h1>
        {inter ? <FaAngleUp className="icon" /> : <FaAngleDown className="icon" />}
      </div>
      {inter && (
        <div className="education-details">
          <h2 className="education-degree">MPC</h2>
          <p className="education-school">Naryana Junior College</p>
          <p className="education-year"> Graduation: July 2017 - July 2019</p>
          <p className="cgpa">CGPA: 8.5</p>
        </div>
      )}
                  <div className="certificates-header" onClick={toggleTenth}>
        <h1 className="education-heading">Secondary</h1>
        {tenth ? <FaAngleUp className="icon" /> : <FaAngleDown className="icon" />}
      </div>
      {tenth && (
        <div className="education-details">
          <h2 className="education-degree">Genral</h2>
          <p className="education-school">Naryana English Medium High School</p>
          <p className="education-year"> Graduation: July 2016 - July 2017</p>
          <p className="cgpa">CGPA: 7.7</p>
        </div>
      )}
      <div className="certificates-header" onClick={toggleCertificates}>
        <h1 className="education-heading"> Education Certificates</h1>
        {isCertificatesOpen ? <FaAngleUp className="icon" /> : <FaAngleDown className="icon" />}
      </div>
      {isCertificatesOpen && (
        <div className='certificate'>
        <div>
                <div className="certificates-header" onClick={toggleSecondarycertificate}>
        <h1 className="certificate-heading"> Secondary Education Certificate</h1>
        {secobnarycertificate ? <FaAngleUp className="icon" /> : <FaAngleDown className="icon" />}
      </div>
      {secobnarycertificate && (
        <div>
          <div className={isImageFullscreen ? "fullscreen-image-container" : "normal-image-container"} onClick={toggleFullscreen}>
            <img src="./10th.jpg" alt="10th Class Marksheet" className={isImageFullscreen ? "fullscreen-image" : "normal-image"} />
          </div>
        </div>
      )}
                      <div className="certificates-header" onClick={toggleIntermediatecertificate}>
        <h1 className="certificate-heading"> Intermediate Education Certificate</h1>
        {intermediatecertificate ? <FaAngleUp className="icon" /> : <FaAngleDown className="icon" />}
      </div>
      {intermediatecertificate && (
        <div>
          <div className={isImageFullscreen ? "fullscreen-image-container" : "normal-image-container"} onClick={toggleFullscreen}>
            <img src="./inter.jpg" alt="10th Class Marksheet" className={isImageFullscreen ? "fullscreen-image" : "normal-image"} />
          </div>
        </div>
      )}
                            <div className="certificates-header" onClick={toggleBtechcertificate}>
        <h1 className="certificate-heading"> Degree Education Certificate</h1>
        {btechcertificate ? <FaAngleUp className="icon" /> : <FaAngleDown className="icon" />}
      </div>
      {btechcertificate && (
        <div>
          <div className={isImageFullscreen ? "fullscreen-image-container" : "normal-image-container"} onClick={toggleFullscreen}>
            <img src="./btech.jpg" alt="10th Class Marksheet" className={isImageFullscreen ? "fullscreen-image" : "normal-image"} />
          </div>
        </div>
      )}
            </div>
        </div>
      )}
      </div>
      <Fotter/>
    </div>
  );
}
export default Education;
