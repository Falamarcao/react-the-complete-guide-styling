import logo from '../../assets/logo.png';

import classes from './Header.module.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      {/* Inline Style: */}
      {/* <p style={{ color: 'blue', textAlign: 'center' }}>
        A community of artists and art-lovers.
      </p> */}
      <p className={classes.paragraph}>
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
