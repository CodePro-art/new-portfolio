import Link from 'components/Link';
import './index.css';

const Footer = () => (
  <footer className="footer">
    <span className="footer__date">{`© 2021-${new Date().getFullYear()} `}</span>
    <Link secondary className="footer__link" href="/humans.txt" target="_self">
      Netanel Mazuz
    </Link>
  </footer>
);

export default Footer;
