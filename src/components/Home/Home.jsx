import instagram from '../../images/instagramText.png';
import itachi from '../../images/itachi_cries.jpg';
import './home.css';
import StatusHeaderCard from '../StatusHeaderCard/StatusHeaderCard';
import PublicationCard from '../PublicationCard/PublicationCard';
import { AiFillHome } from 'react-icons/ai';
import {
  BsSearch,
  BsPersonCircle,
  BsBookmark,
  BsEmojiSmile,
} from 'react-icons/bs';
import { BiCompass } from 'react-icons/bi';
import { FiSend, FiMessageCircle } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineAddBox } from 'react-icons/md';
import { GoThreeBars } from 'react-icons/go';
import { FiMoreHorizontal } from 'react-icons/fi';
// import {IoPersonCircleOutline} from 'react-icons/io'

export default function Home() {
  let repeat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  return (
    <div className="home">
      <div className="home__left">
        <div className="home__logo">
          <img src={instagram} alt="" />
        </div>
        <ul>
          <li className="home__link">
            <AiFillHome className="home__link-icon" />
            <span>Accueil</span>
          </li>
          <li className="home__link">
            <BsSearch className="home__link-icon" />
            <span>Recherche</span>
          </li>
          <li className="home__link">
            <BiCompass className="home__link-icon" />
            <span>Découvrir</span>
          </li>
          <li className="home__link">
            <FiSend className="home__link-icon" />
            <span>Messages</span>
          </li>
          <li className="home__link">
            <FaRegHeart className="home__link-icon" />
            <span>Notifications</span>
          </li>
          <li className="home__link">
            <MdOutlineAddBox className="home__link-icon" />
            <span>Créer</span>
          </li>
          <li className="home__link">
            <BsPersonCircle className="home__link-icon" />
            <span>Profil</span>
          </li>
          <li className="home__link">
            <GoThreeBars className="home__link-icon" />
            <span>Plus</span>
          </li>
        </ul>
      </div>
      <div className="home__right">
        <div className="home__publications">
          <div className="home__header">
            {repeat.map((element) => (
              <StatusHeaderCard />
            ))}
          </div>

          {repeat.map((element) => (
            <PublicationCard />
          ))}
        </div>
      </div>
    </div>
  );
}
