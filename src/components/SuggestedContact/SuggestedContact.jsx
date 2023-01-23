import instagram from '../../images/instagramText.png';


export default function SuggestedContact() {
  return (
    <li className="suggested-contacts">
      <img src={instagram} />
      <div>
        <p className="suggested-contacts__name">g1_faveur</p>
        <p className="grey">Suivi(e) par sabrinabaelongandi</p>
      </div>
      <button className="button">Suivre</button>
    </li>
  );
}
