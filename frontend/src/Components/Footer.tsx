import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-outer">
        <h1 className="footer-title">Get In Touch</h1>
        <h2 className="footer-subtitle">Please feel free to contact me via:</h2>
      </div>

      <div className="contacts">
        <a
          href="https://www.linkedin.com/in/aaron-rajan/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin icon" />
        </a>
        <a href="mailto:aaronmraj@gmail.com">
          <i className="far fa-envelope email icon" />
        </a>
        <a
          href="https://www.instagram.com/rajan.aaron/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram icon" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100012469964081"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-square icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
