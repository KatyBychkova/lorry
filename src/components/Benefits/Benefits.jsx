import { content } from '@/config/index.js';

import styles from './Benefits.module.css';

const { benefits } = content;
const { title, items } = benefits;

function Benefits() {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>{title}</h1>

            <div className={styles.items}>
                {items.map((item) => (
                    <div key={item.name} className={styles.item}>
                        <div className={styles.item_wrapper}>
                            <div className={styles.item_image}>
                                <div className={styles[item.imageName]} />
                            </div>

                            <h2 className={styles.item_title}>{item.name}</h2>
                            <ul className={styles.item_list}>
                                {item.features.map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Benefits;
