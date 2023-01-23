import instagram from '../../images/instagramText.png';
import './home.css';
import StatusHeaderCard from '../StatusHeaderCard/StatusHeaderCard';
import PublicationCard from '../PublicationCard/PublicationCard';
import { Link } from 'react';
import MenuLink from '../MenuLink/MenuLink';
export default function Home() {
  let repeat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const menuList = [
    'Accueil',
    'Recherche',
    'Découvrir',
    'Messages',
    'Notifications',
    'Créer',
    'Profil',
    'Plus',
  ];
  return (
    <div className="home">
      <div className="home__left">
        <div className="home__logo">
          <img src={instagram} alt="" />
        </div>
        <ul>
          {menuList.map((element) => (
            <MenuLink text={element} />
          ))}
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
