import "./App.css";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="container">
      <h1>Aryan Jain</h1>
      <h2>Frontend Developer</h2>
      <div className="cards">
        <Card
          title="About me"
          frontText="A passionate react developer from India"
          backText="I specialize in building fast, responsive UI's using React and Firebase. I focus on performance, reusuability and clean code"
        />
        <Card
          title="Experience"
          frontText="Cognizant-Alumni System"
          backText="Built a full featured Alumni portal using React, Redux, and Github with smooth navigation and mobile responsiveness"
        />
        <Card
          title="Projects"
          frontText="Chat App, Vid-Tube, Text-Utils"
          backText="Chat-App: Firebase auth + chat | Vid-Tube: Youtube API | Text-Utils: Text analysis tools"
          link="https://github.com/aryan9910"
        />
        <Card title="Contact" frontText="Reach out to me" backText="Email: aryanj9910@gmail.com | Phone: 9600620485" link="mailto:aryanj9910@gmail.com" linkText="Mail Me"/>
      </div>
    </div>
  );
};

export default App;
