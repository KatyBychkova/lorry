'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';

import { content } from '@/config/index.js';
import { validator } from '@/utils/validator.jsx';
import callToActionFrontImage from '@/assets/images/call-to-action-front.png';
import callToActionBackImage from '@/assets/images/call-to-action-back.png';
import inputStyles from '@/styles/inputTelStyles.json';

import styles from './CallToAction.module.css';

import 'react-phone-input-2/lib/material.css';

const { callToAction } = content;
const {
    title,
    terms,
    labelTel,
    placeholderName,
    placeholderTel,
    submitBtnText,
} = callToAction;
const { inputTelStyles, inputTelStylesError } = inputStyles;

const typeTerms = 'modalTerms';
const typeModalSubmitted = 'modalSubmitted';

function CallToAction({ openModal, setModal }) {
    const [nameDirty, setNameDirty] = useState(false);
    const [telDirty, setTelDirty] = useState(false);

    const [initialData] = useState({
        name: '',
        tel: '',
    });

    const [data, setData] = useState(initialData);

    const [errors, setErrors] = useState({});

    const blurHandlerName = (e) => {
        if (e.target.name === 'name') {
            setNameDirty(true);
        }
    };

    const cleanForm = () => {
        setNameDirty(false);
        setTelDirty(false);
        setData(initialData);
    };

    const handleNameChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleTelChange = (value) => {
        setData((prev) => ({
            ...prev,
            tel: value,
        }));
    };

    const validatorConfig = {
        name: {
            isRequired: {
                message: 'Поле обязательно для заполнения',
            },
            min: {
                message: 'Имя должно содержать минимум 2 символа',
                value: 2,
            },
            isName: {
                message: 'Имя некорректно',
            },
        },
        tel: {
            isRequired: {
                message: 'Поле обязательно для заполнения',
            },
            isTel: {
                message: 'Номер введен некорректно',
            },
            min: {
                message: 'Слишком короткий номер',
                value: 9,
            },
        },
    };

    const validate = () => {
        const validatorErrors = validator(data, validatorConfig);
        setErrors(validatorErrors);
        return Object.keys(validatorErrors).length === 0;
    };

    useEffect(() => {
        validate();
    }, [data]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();

        if (!isValid) {
            setNameDirty(true);
            setTelDirty(true);
            return;
        }

        // eslint-disable-next-line no-console
        console.log(JSON.stringify(data));

        openModal(true);
        setModal(typeModalSubmitted);
        cleanForm();
    };

    return (
        <section>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.images}>
                        <div className={styles.imageBack_inner}>
                            <Image
                                alt="фура"
                                className={styles.imageBack}
                                sizes="(max-width: 1200px) 560"
                                src={callToActionBackImage}
                                fill
                            />
                        </div>

                        <Image
                            alt="мужчина с телефоном в руке"
                            className={styles.imageFront}
                            height={483}
                            src={callToActionFrontImage}
                            width={412}
                        />
                    </div>
                    <div className={styles.text}>
                        <h1 className={styles.title}>{title}</h1>
                        <div className={styles.form}>
                            <form
                                className={styles.form}
                                onSubmit={handleSubmit}
                            >
                                <div
                                    className={
                                        telDirty && errors.tel
                                            ? styles.form_error
                                            : styles.form_name
                                    }
                                >
                                    <input
                                        id="name"
                                        name="name"
                                        placeholder={placeholderName}
                                        style={
                                            errors.name && nameDirty
                                                ? {
                                                    borderColor: '#d1274a',
                                                    boxShadow: 'none',
                                                }
                                                : { borderColor: '#064488' }
                                        }
                                        type="text"
                                        value={data.name}
                                        onBlur={(e) => blurHandlerName(e)}
                                        onChange={handleNameChange}
                                    />
                                    {errors.name && nameDirty ? (
                                        <div className={styles.error_text}>
                                            {errors.name}
                                        </div>
                                    ) : null}
                                </div>
                                <div className={styles.form_tel}>
                                    <label
                                        className={styles.label_tel}
                                        htmlFor="tel"
                                    >
                                        {labelTel}
                                    </label>
                                    <PhoneInput
                                        country="ru"
                                        error={errors.tel}
                                        id="tel"
                                        inputProps={{ required: true }}
                                        inputStyle={
                                            telDirty && errors.tel
                                                ? { ...inputTelStylesError }
                                                : { ...inputTelStyles }
                                        }
                                        name="tel"
                                        placeholder={placeholderTel}
                                        specialLabel={null}
                                        value={data.tel}
                                        onBlur={() => setTelDirty(true)}
                                        onChange={handleTelChange}
                                    />
                                    {telDirty && errors.tel ? (
                                        <div className={styles.error_text}>
                                            {errors.tel}
                                        </div>
                                    ) : null}
                                </div>

                                <div className={styles.callToAction}>
                                    <div>
                                        <button
                                            className={styles.callToAction_btn}
                                            type="submit"
                                        >
                                            {submitBtnText}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className={styles.terms}>
                            {terms.text}
                            <span>
                                <button
                                    className={styles.terms_btn}
                                    onClick={() => {
                                        openModal(true);
                                        setModal(typeTerms);
                                    }}
                                >
                                    {terms.linkText}
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;
