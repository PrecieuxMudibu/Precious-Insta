import smartphone from '../../images/smartphone.png';
import instagram from '../../images/instagramText.png';
import appStore from '../../images/appStore.png';
import googlePlay from '../../images/googlePlay.png';
import './login.css';

export default function Login() {
  return (
    <div className="login">
      <div className="login__left">
        <img src={smartphone} alt="" className="login__smartphone" />
      </div>

      <div className="login__right">
        <div className="login__right-top">
          <img src={instagram} alt="" className="login__instagram" />
          <form className="login__form">
            <input
              type="email"
              placeholder="Num. téléphone, nom d'utilisateur ou e-mail"
              className="login__input"
            />
            <input
              type="password"
              placeholder="Mot de passe"
              className="login__input"
            />
            <input type="submit" value="Se connecter" className="login__button" />
          </form>
          <div className="login__or-section">
            <span></span>
            <p>OU</p>
            <span></span>
          </div>
            <a href="#" className='login__facebook-connection'> Se connecter avec Facebook</a>
            {/* <a href="#" className='login__facebook-connection'> <AiFillFacebook />Se connecter avec Facebook</a> */}
            <a href="#" className="login__password-forgotten">Mot de passe oublié ?</a>
        </div>
          <p className='login__right-middle'>
            Vous n'avez pas de compte ? <a href="#" className='login__instagram-register'>Inscrivez-vous</a>
          </p>
        <div className='login__right-bottom'>
          <p>Téléchargez l'application.</p>
          <div className='login__images'>
            <img src={appStore} alt="" className='login__image-app-store' />
            <img src={googlePlay} alt="" className='login__image-google-play' />
          </div>
        </div>
      </div>
    </div>
  );
}
