import instagram from '../../images/instagramText.png';
import './statusHeaderCard.css';
import photos from '../../images/list_of_images';

export default function StatusHeaderCard() {
  return (
    <div className="home__status">
      <img src={instagram} alt="" />
      <p>Grace</p>
    </div>
  );
}
