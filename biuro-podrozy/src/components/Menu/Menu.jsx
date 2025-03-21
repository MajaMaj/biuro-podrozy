import styles from "./Menu.module.css";
import { useState } from "react";
import Icon from "../Header/Icon/Icon";

function Menu() {
  const [sidebar, setSidebar] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [checked, setChecked] = useState(false);
  const showSidebar = () => {
    if (sidebar === false) {
      setSidebar(true);
      setAnimation(false);
      setChecked(true);
    } else {
      setSidebar(false);
      setAnimation(true);
      setChecked(false);
    }
  };

  return (
    <div>
      <div className={styles.burgerBlock}>
        <input type="checkbox" onClick={showSidebar} checked={checked} />
        <div className={styles.burger}>
          <div></div>
        </div>
      </div>
      <div
        className={
          sidebar
            ? `${styles.menu} ${styles.deactivation}`
            : `${styles.menu} ${styles.active} ${
                animation ? `${styles.animation}` : ""
              }`
        }
      >
        <div className={styles.list}>
          <li className={styles.item}>
            <a href="#home" onClick={showSidebar}>
              Home
            </a>
          </li>
          <li className={styles.item}>
            <a href="#gallery" onClick={showSidebar}>
              Gallery
            </a>
          </li>
          <li className={styles.item}>
            <a href="#aboutUs" onClick={showSidebar}>
              About us
            </a>
          </li>
          <li className={styles.item}>
            <a href="#contact" onClick={showSidebar}>
              Contact
            </a>
          </li>
        </div>
        <Icon></Icon>
      </div>
    </div>
  );
}

export default Menu;
