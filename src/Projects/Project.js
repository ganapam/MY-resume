import React ,{useState}from 'react';
import Header from '../Header/Header';
import './Project.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Fotter from '../Fotter/Fotter'
const Project = () => {
  const [isCertificatesOpen, setIsCertificatesOpen] = useState(false);
  const [secobnarycertificate, setSecondarycertificate] = useState(false);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);
  const toggleCertificates = () => {
    setIsCertificatesOpen(!isCertificatesOpen);
  };
  const toggleSecondarycertificate = () => {
    setSecondarycertificate(!secobnarycertificate);
  };
  const toggleFullscreen = () => {
    setIsImageFullscreen(!isImageFullscreen);
  };
  return (
    <div>
      <Header />
      <div className="project-container">
        <h1>Projects</h1>
        <div className="project-cards">
          {/* Card 1 */}
          <div className="project-card">
            <h2>URL Detection</h2>
            <p>Completion Date :-  September 2022 - November 2022 </p>
            <p>Associated
 with : Gitam University Bangalore- Developed a project to address
 the issue of phishing attacks by utilizing machine learning algorithms
 and a large dataset. - Implemented various action verbs such as
 training, testing, and evaluating the machine learning models to
 effectively reduce the occurrence of phishing attacks. - Successfully
 reduced the number of phishing attacks by applying the developed
 project, showcasing the impact of the implemented algorithms and
 dataset. - Demonstrated proficiency in utilizing machine learning
 techniques for the purpose of enhancing cybersecurity and
 mitigating online threats. - Achieved measurable results in reducing
 the susceptibility of individuals and organizations to phishing attacks
 through the implementation of the project.</p>
            <a href="https://github.com/ganapam/url-detection-project" target="_blank" rel="noopener noreferrer">Link to Github</a>
          </div>
          {/* Card 2 */}
          <div className="project-card">
            <h2>Automate Database Backup and Restoration on AWS</h2>
            <p>Completion Date :-  Octember 2023 - December 2022 </p>
            <p>Automatically backup and restore on AWS using a total of seven
 services: RDS, S3, Lambda, ECR, CloudWatch, Cloud9, and IAM. </p>
            <a href="https://github.com/ganapam/aws_mentormind_project" target="_blank" rel="noopener noreferrer">Link to Github</a>
          </div>
        </div>
      </div>
      <div className="certificates-header" onClick={toggleCertificates} style={{marginLeft:'5%',marginRight:'5%'}}>
        <h1 className="education-heading"> Project Certificates</h1>
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
            <img src="./awsproject.png" alt="10th Class Marksheet" className={isImageFullscreen ? "fullscreen-image" : "normal-image"} />
          </div>
        </div>
      )}
        </div>
      )}
      <Fotter/>
    </div>
  );
}

export default Project;
