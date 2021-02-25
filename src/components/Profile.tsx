import styles from '../styles/components/Profile.module.css';


export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://wl-incrivel.cf.tsp.li/resize/728x/jpg/276/91c/c3392b57c598e1a15ea1763f3b.jpg"
                alt="Doi Marcelo" />
            <div>
                <strong>Doi Marcelo</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}