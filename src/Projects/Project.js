import React ,{useState}from 'react';
import Header from '../Header/Header';
import './Project.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Fotter from '../Fotter/Fotter'
const Project = () => {
  const [isCertificatesOpen, setIsCertificatesOpen] = useState(false);
  const [secobnarycertificate, setSecondarycertificate] = useState(false);
  const [pl500certificate, setpl00certificate] = useState(false);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);
  const toggleCertificates = () => {
    setIsCertificatesOpen(!isCertificatesOpen);
  };
  const toggleSecondarycertificate = () => {
    setSecondarycertificate(!secobnarycertificate);
  };
    const togglepl500certificate = () => {
    setpl00certificate(!pl500certificate);
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
                    <div className="project-card">
            <h2>ISG Production Planning</h2>
            <p>Tool :- Power Automate</p>
            <p>Client :- Mercedes-Benz Research and Development</p>
            <p>Completion Date :-  February 2025 - May 2025 </p>
            <p>Involved Tools :- WebBrowser, SAP, Excel, Outlook, Python script's,  </p>
            <p>Description :- </p>
            <p>Integrated Starter Generator(ISG)
              It’s a system used in mild hybrid vehicles to assist the engine, improve fuel efficiency, and enable features like start-stop and regenerative braking.
            </p>
            <p>
              The bot first checks the SharePoint holiday list. If the current day is not a holiday, it starts the planning process. It then checks whether the input mail has been received and identifies how much planning needs to be done for the day.</p>
              Next, it verifies the last run date of the plan and calculates the gap in days between the last run and today. Based on that gap, it determines how many input mails need to be processed.
              <p>The bot then downloads Excel files from SAP, performs calculations to determine how many parts need to be ordered for each customer, and prepares a parts planning report.</p>
              <p>After that, it sends a confirmation email to the user with buttons — Approve, Reject, and Apply Changes.</p>
              <p>If the user clicks Approve, the bot proceeds to order the parts through SAP.</p>
              <p>If the user clicks Reject, the process stops completely.</p>
              <p>If the user clicks Apply Changes, the user makes changes in the Excel file and sends it back to the bot, which then processes the updated Excel file and places the new parts order accordingly.</p>
            {/*<a href="https://github.com/ganapam/aws_mentormind_project" target="_blank" rel="noopener noreferrer">Link to Github</a>*/}
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
      
      {isCertificatesOpen && (
        <div>
                <div className="certificates-header" onClick={togglepl500certificate}>
        <h1 className="certificate-heading"> PL 500 certificate</h1>
        {pl500certificate ? <FaAngleUp className="icon" /> : <FaAngleDown className="icon" />}
      </div>
      {pl500certificate && (
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
      <Fotter/>
    </div>
  );
}

export default Project;
