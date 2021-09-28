import React, { useState } from "react";

import styles from "./ReviewDelModal.module.css";
import { deleteReviews } from "../../api/adminApi";

const ReviewDelModal = ({ el, setDeleteModal }) => {
  const clickReviewDelete = () => {
<<<<<<< HEAD
    axios // art-ground.link
      .delete(`https://localhost:5000/admin/review/${el.id}`)
      .then((result) => {
        console.log(result, ":리뷰삭제 데이터 ????");
        setDeleteModal(false);
        // window.location.href = "https://localhost:3000/admin";
      })
      .catch((err) => console.log(err));
=======
    deleteReviews(setDeleteModal, el);
>>>>>>> 75a014d74450e3db5dcef63b932a112fd333f15b
  };

  const clickCancel = () => {
    setDeleteModal(false);
  };

  return (
    <section className={styles.modalContainer}>
      <div className={styles.modalWrap}>
        <span className={styles.modalContent}>리뷰 삭제하시겠습니까 ?</span>
        <p className={styles.modalSubContent}>
          확인을 누르시면<br></br>해당 리뷰가 삭제됩니다.
        </p>
        <div className={styles.ok}>
          <button className={styles.okBtn} onClick={clickReviewDelete}>
            확인
          </button>
          <button className={styles.okBtn} onClick={clickCancel}>
            취소
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewDelModal;
