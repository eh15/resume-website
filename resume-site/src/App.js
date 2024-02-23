import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Elain He's Resume</h1>
      </header>
        <Container>
          <Row>
            <Col>
              <h2>Experience</h2>
              <p>Artificial Intelligence Research Intern at WorldCare International | Remote 01/2024</p>
                <ul>
                  <li>Collaborated with the team to successfully integrate an IDE into Salesforce, allowing seamless implementation of AI tools</li>
                  <li>Coded a Python program that leverages spaCy's natural language processing capabilities to identify and anonymize sensitive data from medical records</li>
                  <li>Tested machine learning models for summarizing medical cases, increasing consultation process efficiency by up to 40%</li>
                </ul>
              <p>Course Development Intern at Lumen Learning | Remote 06/2023 – Present</p>
                <ul>
                  <li>Organized and coded course content in OHM and front end HTML for underserved communities and minorities</li>
                  <li>Designed and implemented Python automation scripts, reducing manual workload by 30%</li>
                  <li>Enhanced user experience by diagnosing and resolving technical issues and bugs, resulting in smoother workflow</li>
                </ul>
              <p>Constitution Generator Project | eh15.github.io/constitution-generator | 03/2023 – 05/2023</p>
                <ul>
                  <li>Implemented and designed a Java program that generates new constitutions based on frequency of words appearing next to each other in preambles from 150+ nations</li>
                  <li>Developed a website using HTML, CSS, and JavaScript that showcases the output of the program</li>
                </ul>
              <p>Exam Scheduler Project | Data Structures &amp; Advanced Programming  12/2022</p>
                <ul>
                  <li>Constructed a Java program that takes a list of students and schedules final exams for the registrar while successfully avoiding time conflicts</li>
                </ul>
              <p>Intern at Simcoach Games | Pittsburgh, PA             06/2021 – 07/2021</p>
                <ul>
                  <li>Produced games within Unity encouraging the development of behavior, learning, and cognitive skills</li>
                  <li>Developed and designed games, contributing to the company's portfolio of successful projects</li>
                  <li>Successfully met tight 1-2 week development deadlines for each game, demonstrating adaptability and teamwork</li>
                </ul>
            </Col>
          </Row>
          <Row>
            <Col>
            <h2>Education</h2>
            <p>Williams College, Williamstown, MA	| Expected Graduation: 06/2026</p>
            <ul>
              <li>GPA: 3.81; Bachelor's Degree in Computer Science</li>
              <li>Relevant Coursework: Data Structures &amp; Advanced Programming, Principles of Programming Languages, Discrete Mathematics, Computer Organization, Algorithm Design and Analysis, Deep Learning, Human-AI Interaction</li>
              <li>Awards: QuestBridge College Prep Scholar (2021), National Math + Science Initiative Scholarship (2021), Girls Who Code Certificate (2021), Williams College Dean's List (Fall 2022, Spring 2023, Fall 2023)</li>
            </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Skills</h2>
              <ul>
              <li>Programming Languages: Adept at: Java, Lisp, SML, OHM. Comfortable with: C/C++, Python, SQL, HTML, CSS, JS, React. Learning: Scala, x86 Assembly, PyTorch/Tensorflow</li>
              <li>Data analysis: Experienced with R Studio and converting Excel or Google Sheets into csv, reading files, manipulating, modeling, and analyzing data</li>
              <li>Editing: Wordpress, Google Workspace (Docs, Spreadsheets, Slides, etc.), Adobe Photoshop, Medibang Paint</li>
              <li>Language: Fluent in Shanghainese, can read and speak French (5 years of foreign language), able to speak basic Mandarin/Chinese</li>
              </ul>
            </Col>
          </Row>
      </Container>
    </div>
    );
  }
  
  export default App;
  
  document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      var scrollPosition = window.scrollY;
      var elements = document.querySelectorAll('h1');
      
      elements.forEach(function(element) {
        var elementPosition = element.getBoundingClientRect().top + window.scrollY;
        var screenHeight = window.innerHeight;
        
        if (elementPosition < (scrollPosition + screenHeight)) {
          element.classList.add('active');
        }
      });
    });
  });