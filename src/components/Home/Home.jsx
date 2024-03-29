import instagram from '../../images/instagramText.png';
import './home.css';
import SuggestedContact from '../SuggestedContact/SuggestedContact';
import StatusHeaderCard from '../StatusHeaderCard/StatusHeaderCard';
import PublicationCard from '../PublicationCard/PublicationCard';
import { Link } from 'react-router-dom';
import MenuLink from '../MenuLink/MenuLink';
import { useEffect } from 'react';
import { BsInstagram } from 'react-icons/bs';

import photos from '../../images/list_of_images';
import { suggested_contacts } from '../../images/list_of_images';

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

  async function fetchData () {
    await fetch('https://images.ctfassets.net')
      .then((response) => response.json())
      .then((response) => alert(JSON.stringify(response)))
      .then((response) => console.log(response))
      .catch((error) => alert('Erreur : ' + error));
  }

  // useEffect(() => {
  //   fetchData();
  // }, [repeat]);

  return (
    <div className="home">
      <div className="home__left">
        <div className="home__logo">
          <BsInstagram className="home__link-icon instagram"/>
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

          {photos.map((photo) => (
            <PublicationCard source={photo.source} name={photo.name} profile_picture={photo.profile_picture} />
          ))}
        </div>

        <div className="current-user">
          <div className="current-user__infos">
            <img src={photos[0].profile_picture} alt="" />
            <div className="current-user__name">
              <p className="text-bold">Fun_Dev</p>
              <p className="grey">{photos[0].name}</p>
            </div>
            <button className="button">Basculer</button>
          </div>

          <div className="current-user__suggestions">
            <div className="flex">
              <p className="current-user__suggestions-title">
                Suggestions pour vous
              </p>
              <button>Voir tout</button>
            </div>

            <div>
              <ul>
                {suggested_contacts.map((suggested_contact)=>
                <SuggestedContact name={suggested_contact.name} source={suggested_contact.profile_picture} />
                )}
             
              </ul>
            </div>
          </div>

          <div className="current-user__links">
            <Link className="small-text">
              A propos<span> ● </span>
            </Link>

            <Link className="small-text">
              Aide<span> ● </span>
            </Link>

            <Link className="small-text">
              Presse<span> ● </span>
            </Link>

            <Link className="small-text">
              API<span> ● </span>
            </Link>

            <Link className="small-text">
              Emplois<span> ● </span>
            </Link>

            <Link className="small-text">
              Confidentialité<span> ● </span>
            </Link>

            <Link className="small-text">
              Conditions<span> ● </span>
            </Link>

            <Link className="small-text">
              Lieux<span> ● </span>
            </Link>

            <Link className="small-text">Langue</Link>
          </div>

          <p className="small-text">© 2023 INSTAGRAM PAR META</p>
        </div>
      </div>
    </div>
  );
}
