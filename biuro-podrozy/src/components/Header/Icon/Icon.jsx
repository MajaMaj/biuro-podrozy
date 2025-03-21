import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Icon.module.css";

function Icon() {
  return (
    <div className={styles.iconBox}>
      <a
        href="https://www.instagram.com/_8maja8_/?hl=pl"
        target="_blank"
        className={styles.icon}
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/rysownik2"
        target="_blank"
        className={styles.icon}
      >
        <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
      </a>
    </div>
  );
}

export default Icon;
