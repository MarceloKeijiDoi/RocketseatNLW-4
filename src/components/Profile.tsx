import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';


import styles from '../styles/components/Profile.module.css';


export function Profile() {

    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="http://pm1.narvii.com/6617/f55a3279248e10641604f30f6c78f17ca56bffb4_00.jpg"
                alt="Doi Marcelo" />
            <div>
                <strong>Doi Marcelo</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />

                        Level {level}
                </p>
            </div>
        </div>
    )
}