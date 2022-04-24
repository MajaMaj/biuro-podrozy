import { useState } from 'react';
import { send } from 'emailjs-com';
import styles from './form.module.css';


function Form() {

    return (
        <form>
            <h2 className={styles.header}>Send us an email</h2>
            <input
                type='text'
                name='from_name'
                placeholder='Name'
                className={styles.input}
            >
            </input><br></br>
            <input
                type='text'
                name='message'
                placeholder='Your message'
                className={styles.input}
            /><br></br>
            <input
                type='text'
                name='reply_to'
                placeholder='Your email'
                className={styles.input}
            /><br></br>
            <button type='submit' className={`${styles.btn} button`}>Submit</button>
        </form>
    )
}

export default Form;