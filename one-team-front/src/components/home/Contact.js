import React from "react";
import facebook from "../../img/facebook.png";
import twitter from "../../img/twitter.png";

const styles = {
  miniHR: {
    backgroundColor: "white",
    height: "4px",
    width: "10vw",
    margin: "auto",
    marginBottom: "20px"
  }
};

const Contact = () => (
  <div className="contact-home general_margin">
    <h2 style={{ color: "white", fontWeight: "bold" }} className="home_section">
      Contactez <span style={{ color: "#ff8900" }}>One Team</span>
    </h2>
    <div style={styles.miniHR} />

    <h2 style={{ color: "white", fontWeight: "normal" }}>
      Vous souhaitez en savoir plus..
    </h2>
    <p>Appelez-nous, nous serons ravis d’échanger avec vous sur vos projets.</p>
    {/* <h4>
      <span style={{ color: "#605b55" }}>Contact</span> : Gérard Magro
    </h4> */}
    <h2 style={{ color: "white", fontWeight: "normal" }}>Gérard Magro</h2>
    <p>06.18.44.88.20</p>
    <p>gerard.magro@one-team.fr</p>
    <div style={{ marginTop: "50px" }}>
      <img className="social-media" src={facebook} alt="facebook" />
      <img className="social-media" src={twitter} alt="facebook" />
    </div>
    <div>
      <nav>
        <ul className="nav-footer">
          <li>
            <a href="#">Mentions Légales</a>
          </li>
          <li>
            <a href="#">CGU</a>
          </li>
          <li>
            <a href="#">Confidentialité</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);
export default Contact;
