import instagram from '../../images/instagramText.png';


export default function SuggestedContact({name, source}) {
  return (
    <li className="suggested-contacts">
      <img src={source} />
      <div>
        <p className="suggested-contacts__name">{name}</p>
        <p className="grey">Suivi(e) par sabrinabaelongandi</p>
      </div>
      <button className="button">Suivre</button>
    </li>
  );
}
