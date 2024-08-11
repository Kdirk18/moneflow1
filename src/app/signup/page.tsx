'use client'

import type { NextPage } from 'next';
import styles from './index.module.css';


const SignUp: NextPage = () => {
    return (
        <div className={styles.signUp}>
            <div className={styles.createAnAccountParent}>
                <div className={styles.createAnAccount}>Create an account</div>
                <div className={styles.emailAddressParent}>
                    <div className={styles.emailAddress}>Email address</div>
                    <div className={styles.abcgmailcomWrapper}>
                        <div className={styles.abcgmailcom}>abc@gmail.com</div>
                    </div>
                </div>
                <div className={styles.passwordParent}>
                    <div className={styles.emailAddress}>Password</div>
                    <div className={styles.enterYourPasswordParent}>
                        <div className={styles.abcgmailcom}>Enter your password</div>
                        <img className={styles.icons} alt="" src="Icons.svg" />
                    </div>
                </div>
                <div className={styles.filledButtons}>
                    <div className={styles.filled}>Continue</div>
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
                <div className={styles.groupParent}>
                    <div className={styles.alreadyHaveAnAccountParent}>
                        <div className={styles.alreadyHaveAn}>Already have an account?</div>
                        <div className={styles.signInWrapper}>
                            <div className={styles.signIn}>Sign in</div>
                        </div>
                    </div>
                    <div className={styles.signUpWith}>Sign up with email</div>
                </div>
                <div className={styles.checkBoxParent}>
                    <img className={styles.checkBoxIcon} alt="" src="Check box.svg" />
                    <div className={styles.iAgreeToTermsContainer}>
                        <span>I agree to
                            <span className={styles.termsOfServices}>Terms of Services</span>{` & `}
                            <span className={styles.termsOfServices}>Privacy Policy</span>
                        </span>
                    </div>
                </div>
                <div className={styles.checkBoxGroup}>
                    <div className={styles.checkBox} />
                    <div className={styles.subscribeToReceive}>Subscribe to receive company news and product updates from Hashwei. You may unsubscribe at any time.</div>
                </div>
            </div>
            <div className={styles.logoHereWrapper}>
                <div className={styles.logoHere}>Logo here</div>
            </div>
        </div>);
};

export default SignUp;
