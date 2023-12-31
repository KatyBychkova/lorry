import Image from 'next/image';

import { geo, content } from '@/config/index.js';
import capabilitiesBgImage from '@/assets/images/capabilities-bg.png';

import styles from './Capabilities.module.css';

const { cities } = geo;
const { capabilities } = content;
const {
    title, text, callToAction,
} = capabilities;
const modalType = 'modalForm';

function Capabilities({ openModal, setModal }) {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.wrapper}>
                    <div className={styles.info}>
                        <div className={styles.info_wrapper}>
                            <div className={styles.text}>
                                <p className={styles.text_top}>{text.top}</p>
                                <ul className={styles.cities}>
                                    {cities.map((city) => (
                                        <p
                                            key={city}
                                            className={styles.cities_item}
                                        >
                                            {city}
                                        </p>
                                    ))}
                                </ul>
                                <p className={styles.text_bottom}>
                                    {text.bottom}
                                </p>
                            </div>
                        </div>

                        <div className={styles.callToAction}>
                            <button
                                className={styles.callToAction_btn}
                                onClick={() => {
                                    openModal(true);
                                    setModal(modalType);
                                }}
                            >
                                {callToAction.linkText}
                            </button>
                            {callToAction.text}
                        </div>
                    </div>

                    <div className={styles.imageInner}>
                        <div className={styles.imageWrapper}>
                            <Image
                                alt="карта России"
                                className={styles.image}
                                height={430}
                                src={capabilitiesBgImage}
                                width={760}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Capabilities;
