import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';


const reactDescription = ["Fundamental", "Crucial", "Core"]

function getrandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescription[getrandomInt(2)];
  // four digit otp generation
//   const otp = Math.floor(1000 + Math.random() * 9000);
  return (<header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          { description } React concepts you will need for your first app you are going to build!
        </p>
      </header>);
}