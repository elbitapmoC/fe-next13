const Footer = () => {
  return (
    <footer className="footer">
      <style jsx="true">
        {`
          .footer {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 2rem;
          }
        `}
      </style>
      <a
        href="https://github.com/elbitapmoc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          {/* Essentially, Image does the heavy lifting of optimizing images for us.*/}
          <p>&copy; elbitapmoC | 2022</p>
        </span>
      </a>
    </footer>
  );
};

export default Footer;
