import styles from "./SignIn.module.css";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import Google from "../google/Google";

const SignIn = ({ setIsAuthorLogin, setIsAudienceLogin }) => {
  const history = useHistory();

  const audienceClicked = () => {
    setIsAuthorLogin(false);
    setIsAudienceLogin(true);
  };

  const authorClicked = () => {
    setIsAuthorLogin(true);
    setIsAudienceLogin(false);
  };

  return (
    <section className={styles.container}>
      <div className={styles.joinbox}>
        <Link to="/signin/detail">
          <button className={styles.btn} onClick={audienceClicked}>
            관람객 로그인
          </button>
        </Link>
        <Link to="/signin/detail">
          <button
            className={`${styles.btn} ${styles.second}`}
            onClick={authorClicked}
          >
            작가 로그인
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SignIn;