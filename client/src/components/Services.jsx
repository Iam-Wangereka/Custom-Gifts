import './Header.css'
import './Body.css'
import './Services.css'

const Services = () => {
    return(
        <>
                <main>
            <p>Our Services Include</p>
        </main>
        <section>
            <div className="row">
              <div className="column">
                <div className="card">
                  <div className="icon-wrapper">
                    <i> CD </i>
                  </div>
                  <h3>Concept Development</h3>
                  <p>
                    Concept development helps you evaluate your customers'
                    reactions to your product or service before your product launch.
                    It is a structured way to develop an idea, see if customers like your idea,
                    and determine what customer market is willing to buy it.
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="icon-wrapper">
                    <i>CB</i>
                  </div>
                  <h3>Car Branding</h3>
                  <p>
                    Let your vehicle stand out amidist other vehicles at affordable.
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="icon-wrapper">
                    <i>SB</i>
                  </div>
                  <h3>Shop Branding</h3>
                  <p>
                    Let your shop sell your goods and services before you do.
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="icon-wrapper">
                    <i>LS</i>
                  </div>
                  <h3>Laptop Skins</h3>
                  <p>
                    Make your office, gamming, kids and personal laptops look up to the task and prevent scratches.
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="icon-wrapper">
                    <i>PS</i>
                  </div>
                  <h3>Phone Stickers</h3>
                  <p>
                    Give your phone an outstanding appearence to make you feel like you own it. Thia also prevents scratches on the device.
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="icon-wrapper">
                    <i>AOB</i>
                  </div>
                  <h3>Other Customised Gift Items</h3>
                  <p>
                    Gives you the opportunity to make your ideas real for any gift you think of giving someone customised to customers satisfaction.
                    </p>
                </div>
              </div>
            </div>
          </section>
        </>
    )

}

export default Services;