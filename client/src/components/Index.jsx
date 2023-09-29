import home from '../images/HOME.png';
import './Body.css';

const Main = () => {
    return (
      <>
      <main>
            <h1>Custom Gifts At Your Service</h1>
        </main>
        <div className="home-icon">
           <img src={home} alt='home' />
            </div>
      </>
    )
}

export default Main;