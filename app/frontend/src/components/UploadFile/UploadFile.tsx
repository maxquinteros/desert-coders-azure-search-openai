import React from "react";
import styles from "./UploadFile.module.css";

export const UploadFile = () => {
    return (
        <>
            <h1 className={styles.frontTop}>Upload your own book</h1>
            <div className={styles.tbContainer}>
                <div className={styles.tbImgView}>
                    <img id="tb-image" />
                </div>
                <label className={styles.tbFileUpload}>Upload a PDF</label>
                <input type="file" id="tbFileUpload" accept="image/*" />
            </div>
        </>
    );
};

export default UploadFile;
