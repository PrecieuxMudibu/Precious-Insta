import './publicationCard.css';
import instagram from '../../images/instagramText.png';
import itachi from '../../images/itachi_cries.jpg';
import { BsBookmark, BsEmojiSmile } from 'react-icons/bs';
import { FiSend, FiMessageCircle } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';

export default function PublicationCard({name, source, profile_picture}) {
  return (
    <div className="publication">
      <div className="publication__publisher">
        <div>
          <img src={profile_picture} alt="" />
          <p className="text-bold">{name}</p>
        </div>
        <div>
          <FiMoreHorizontal className="publication__icon" />
        </div>
      </div>
      <img src={source} alt="" />
      <div className="publication__footer">
        <div className="icons">
          <div>
            <FaRegHeart className="publication__footer-icon" />
            <FiMessageCircle className="publication__footer-icon" />
            <FiSend className="publication__footer-icon" />
          </div>
          <div>
            <BsBookmark className="publication__footer-icon" />
          </div>
        </div>
        <div>
          <p className="publication__number-of-like text-bold">
            1,192,950 J’aime
          </p>
          <p className="publication__text">
            realmadrid 🤩 Our #FIFAWorldCup semi-finalists!
          </p>
          <p className="publication__show-comment">
            Afficher les 2 commentaires
          </p>
          <p className="publication__date">
            IL Y A 1 JOUR <span> Voir la traduction</span>
          </p>
        </div>
        <label className="publication_input-group">
          <BsEmojiSmile className="publication__footer-icon" />
          <input type="text" placeholder="Ajouter un commentaire..." />
          <button className="button disable">Publier</button>
        </label>
      </div>
    </div>
  );
}
