import instagram from '../../images/instagramText.png';
import './home.css';
import StatusHeaderCard from '../StatusHeaderCard/StatusHeaderCard';
import PublicationCard from '../PublicationCard/PublicationCard';
import { AiFillHome } from 'react-icons/ai';
import { BsSearch, BsPersonCircle } from 'react-icons/bs';
import { BiCompass } from 'react-icons/bi';
import { FiSend } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineAddBox } from 'react-icons/md';
import { GoThreeBars } from 'react-icons/go';
import { Link } from 'react';
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

        <div className="current-user">
          <div className="current-user__infos">
            <img src={instagram} alt="" />
            {/* <BsPersonCircle className="home__link-icon" /> */}
            <div className="current-user__name">
              <p>precieuxbishiya</p>
              <p>Précieux Bishiya</p>
            </div>
            <button>Basculer</button>
          </div>

          <div className="current-user__suggestions">
            <div>
              <p>Suggestions pour vous</p>
              <button>Voir tout</button>
            </div>
            
            <div>
              <ul>
                <li className="suggested-contacts">
                  <img src={instagram} />
                  <div>
                    <p className="suggested-contacts__name">g1_faveur</p>
                    <p>Suivi(e) par sabrinabaelongandi + 3 autres</p>
                  </div>
                  <button>Voir tout</button>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="current-user__links">
            <Link>A propos</Link>
            <Link>Aide</Link>
            <Link>Presse</Link>
            <Link>API</Link>
            <Link>Emplois</Link>
            <Link>Confidentialité</Link>
            <Link>Conditions</Link>
            <Link>Lieux</Link>
            <Link>Langue</Link>
          </div>

          <p>© 2023 INSTAGRAM PAR META</p> */}
        </div>
      </div>
    </div>
  );
}
