import reactImg from '../../assets/logo.png';
import './Header.css';

const reactDescriptions = ['Bro', 'suvash', 'gamerz'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>Welcome to gamerz world!</h1>
      <p>
        {description} let's start gaming guyz!
      </p>
    </header>
  );
}