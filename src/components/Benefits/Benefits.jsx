import Image from 'next/image';

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
                        <div className={styles.itemWrapper}>
                            <div className={styles.itemImage}>
                                <Image className={styles.itemIcon} height="80" src={item.icon} width="80" />
                            </div>

                            <h2 className={styles.itemTitle}>{item.name}</h2>
                            <ul className={styles.itemList}>
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
