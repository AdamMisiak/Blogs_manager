import "../../styles/Footer.css";

const Footer = () => {
  return(
    <div className='footer'>
      <footer  className="py-4 bg-primary text-white text-center">
        Copyright &copy;
        <span className="year"> {new Date().getFullYear()}</span> Blogs Manager
      </footer>
    </div>
  );
}

export default Footer;
