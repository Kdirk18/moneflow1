'use client'

import type { NextPage } from 'next';
import { useCallback } from 'react';
import styles from './index.module.css';


const SignIn: NextPage = () => {

    const onFrameContainerClick = useCallback(() => {
        const anchor = document.querySelector("[data-scroll-to='createAnAccount']");
        if (anchor) {
            anchor.scrollIntoView({ "block": "start", "behavior": "smooth" })
        }
    }, []);

    return (
        <div className={styles.signIn}>
            <div className={styles.groupParent}>
                <div className={styles.signInParent}>
                    <div className={styles.signIn1}>Sign in</div>
                    <div className={styles.newUser}>{`New user? `}</div>
                    <div className={styles.createAnAccountWrapper} onClick={onFrameContainerClick}>
                        <div className={styles.createAnAccount} data-scroll-to="createAnAccount">Create an account</div>
                    </div>
                </div>
                <div className={styles.emailAddress}>Email address</div>
                <div className={styles.password}>Password</div>
                <div className={styles.abcgmailcomWrapper}>
                    <div className={styles.abcgmailcom}>abc@gmail.com</div>
                </div>
                <div className={styles.enterYourPasswordWrapper}>
                    <div className={styles.abcgmailcom}>Enter your password</div>
                </div>
                <div className={styles.filledButtons}>
                    <div className={styles.filled}>Countinue</div>
                </div>
                <div className={styles.or}>Or</div>
                <div className={styles.flatColorIconsgoogleParent}>
                    <img className={styles.flatColorIconsgoogle} alt="" src="flat-color-icons:google.svg" />
                    <div className={styles.filled}>Continue with Google</div>
                </div>
                <div className={styles.iconsParent}>
                    <img className={styles.flatColorIconsgoogle} alt="" src="Icons.svg" />
                    <div className={styles.filled}>Continue with Wallet</div>
                </div>
            </div>
            <div className={styles.logoHereWrapper}>
                <div className={styles.logoHere}>Logo here</div>
            </div>
        </div>);
};

export default SignIn;
