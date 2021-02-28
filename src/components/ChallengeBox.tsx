import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const contextData = useContext(ChallengesContext);

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {

        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {

        resetCountdown();
        resetChallenge();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount}</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSuceededButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>

                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo e receberá novos desafios</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                    Complete os desafios e avance de level.
                </p>
                </div>
            )}
        </div>
    )

}