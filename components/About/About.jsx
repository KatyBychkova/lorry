import styles from './About.module.css';

import Header from '@/components/header.jsx';
import config from '@/config/index.json';

function About({ openModal, setModal }) {
    const { about } = config;
    const { titleBeforAccent, titleAccent, titleAfterAccent, subtitle, description } = about;
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.container}>
                    <Header openModal={openModal} setModal={setModal} />
                    <h1 className={styles.title}>
                        {titleBeforAccent}
                        <span>
                            {' '}
                            {titleAccent}
                        </span>
                        {titleAfterAccent}
                    </h1>
                    <h3 className={styles.subtitle}>{subtitle}</h3>
                    <div className={styles.description}>
                        {description.map((disc) => (
                            <p key={disc} className={styles.description_part}>
                                {disc}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
