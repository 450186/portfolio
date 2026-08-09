import styles from "./Badge.module.css"

type BadgeProps = {
    message: string,
}
export default function Badge(
    {
        message,
    }: BadgeProps
) {
    return ( 
        <div className={styles.badge}>
            <span 
                className="text"
            >
                {message}
            </span>
        </div>
    )
}