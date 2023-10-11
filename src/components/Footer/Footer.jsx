/* eslint-disable react/no-unknown-property */
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footerContainer}>
      <div className={style.footerInner}>
        <div className={style.footerImg}>
          <img src={"./src/assets/pikachu.png"} alt="pokeball" />
        </div>
        <div className={style.footerInfo}>
          <div className={style.item}>
            <div className={style.itemTitle}>Content</div>
            <div className={style.itemLinks}>
              <ul>
                <li>
                  <a
                    href="https://www.soyhenry.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Henry
                  </a>
                </li>
                <li>
                  <a
                    href="https://pokeapi.co/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pokeapi
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.item}>
            <div>
              <p className={style.itemTitle}>PokeApi</p>
            </div>
            <div className={style.itemText}>
              <ul>
                <li>Final Individual Project</li>
                <li>FT42a Cohort Group 7</li>
              </ul>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.itemTitle}>Contact</div>
            <div className={style.contactInfo}>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/lucasgabrieltamburlini/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    in/lucastamburlini
                  </a>
                </li>
                <li>lucastamburlini@gmail.com</li>
                <li>+54 9 3442 644674</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={style.craftedBy}>
          <p>Handcrafted by Lucas Tamburlini - 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
