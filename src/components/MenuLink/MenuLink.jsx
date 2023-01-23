import { AiFillHome } from 'react-icons/ai';
import { BsSearch, BsPersonCircle } from 'react-icons/bs';
import { BiCompass } from 'react-icons/bi';
import { FiSend } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineAddBox } from 'react-icons/md';
import { GoThreeBars } from 'react-icons/go';
import './menuLink.css';

export default function MenuLink({ text }) {
  function returnIcon(text) {
    switch (text) {
      case 'Accueil':
        return <AiFillHome className="home__link-icon" />;
      case 'Recherche':
        return <BsSearch className="home__link-icon" />;

      case 'Découvrir':
        return <BiCompass className="home__link-icon" />;

      case 'Messages':
        return <FiSend className="home__link-icon" />;

      case 'Notifications':
        return <FaRegHeart className="home__link-icon" />;

      case 'Créer':
        return <MdOutlineAddBox className="home__link-icon" />;

      case 'Profil':
        return <BsPersonCircle className="home__link-icon" />;

      case 'Plus':
        return <GoThreeBars className="home__link-icon" />;

      default:
        return 'none';
    }
  }

  return (
    <li className="home__link">
      {returnIcon(text)}
      <span>{text}</span>
    </li>
  );
}
