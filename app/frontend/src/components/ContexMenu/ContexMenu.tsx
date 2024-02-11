import { BookPulse24Filled } from "@fluentui/react-icons";
import { Button } from "@fluentui/react-components";

import styles from "./ContexMenu.module.css";

interface Props {
    className?: string;
    onClick: () => void;
}

export const ContexMenu = ({ className, onClick }: Props) => {
    return (
        <div className={`${styles.container} ${className ?? ""}`}>
            <Button icon={<BookPulse24Filled />} onClick={onClick}>
                {"Library"}
            </Button>
        </div>
    );
};
