import React from "react";

import styles from "./Field.css"

export interface FieldProps {
    content: string;
    disabled?: boolean;
    onClick?: () => void;
}

const Field = ({ content = "", disabled = false, onClick }: FieldProps) => {

    return (
        <div onClick={disabled ? () => { } : onClick}
            className={disabled ? `${styles.field} ${styles.disabled}` : `${styles.field}`}>
            {content}
        </div>
    )
}

export default Field;