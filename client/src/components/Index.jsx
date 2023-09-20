import home from '../images/HOME.png';
import './Body.css';

const Main = () => {
    return (
      <>
      <main>
            <p>Custom Gifts At Your Service</p>
        </main>
        <div className="home-icon">
           <img src={home} alt='home' />
            </div>
      </>
    )
}

export default Main;