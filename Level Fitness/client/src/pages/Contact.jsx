import React from 'react'
import { useRef } from 'react';

const styles = {
    fcfBody: {
      margin: '0',
      fontFamily: '-apple-system, Arial, sans-serif',
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.5',
      color: '#212529',
      textAlign: 'left',
      backgroundColor: '#fff',
      padding: '30px',
      paddingBottom: '10px',
      border: '1px solid #ced4da',
      borderRadius: '0.25rem',
      maxWidth: '100%',
    },
    fcfForm: {
      display: 'block',
    },
    fcfH3: {
      marginBottom: '1rem',
    },
    fcfFormGroup: {
      marginBottom: '1rem',
    },
    fcfInputGroup: {
      position: 'relative',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'stretch',
      width: '100%',
    },
    fcfFormControl: {
      display: 'block',
      width: '100%',
      height: 'calc(1.5em + 0.75rem + 2px)',
      padding: '0.375rem 0.75rem',
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.5',
      color: '#495057',
      backgroundColor: '#fff',
      backgroundClip: 'padding-box',
      border: '1px solid #ced4da',
      outline: 'none',
      borderRadius: '0.25rem',
      transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    },
    fcfFormControlFocus: {
      border: '1px solid #313131',
    },
    fcfLabel: {
      display: 'inline-block',
      marginBottom: '0.5rem',
    },
    fcfCredit: {
      paddingTop: '10px',
      fontSize: '0.9rem',
      color: '#545b62',
    },
    fcfCreditLink: {
      color: '#545b62',
      textDecoration: 'underline',
    },
    fcfBtn: {
      display: 'inline-block',
      fontWeight: '400',
      color: '#212529',
      textAlign: 'center',
      verticalAlign: 'middle',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      border: '1px solid transparent',
      padding: '0.375rem 0.75rem',
      fontSize: '1rem',
      lineHeight: '1.5',
      borderRadius: '0.25rem',
      transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    },
    fcfBtnPrimary: {
      color: '#fff',
      backgroundColor: '#007bff',
      borderColor: '#007bff',
    },
    fcfBtnPrimaryHover: {
      color: '#fff',
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
    },
    fcfBtnPrimaryFocus: {
      color: '#fff',
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: '0 0 0 0.2rem rgba(38, 143, 255, 0.5)',
    },
    fcfBtnLg: {
      padding: '0.5rem 1rem',
      fontSize: '1.25rem',
      lineHeight: '1.5',
      borderRadius: '0.3rem',
    },
    fcfBtnBlock: {
      display: 'block',
      width: '100%',
    },
  };


const Contact = () => {
    const form = useRef();


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "42995784-74b4-498c-b6a2-66b26ad1dad7");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            alert("Form sent successdully");
          }
        form.current.reset();
      };

  return (
    <div style={styles.fcfBody}>
      <div id="fcf-form" style={styles.fcfForm}>
        <h3 style={styles.fcfH3}>Contact us</h3>
        <form id="fcf-form-id" className="fcf-form-class" onSubmit={onSubmit} ref={form} >
          <div style={styles.fcfFormGroup}>
            <label htmlFor="Name" style={styles.fcfLabel}>Your name</label>
            <div style={styles.fcfInputGroup}>
              <input type="text" id="Name" name="from_name" style={styles.fcfFormControl} required />
            </div>
          </div>
          <div style={styles.fcfFormGroup}>
            <label htmlFor="Name" style={styles.fcfLabel}>Your Subject</label>
            <div style={styles.fcfInputGroup}>
              <input type="text" id="Name" name="subject" style={styles.fcfFormControl} required />
            </div>
          </div>
          <div style={styles.fcfFormGroup}>
            <label htmlFor="Email" style={styles.fcfLabel}>Your email address</label>
            <div style={styles.fcfInputGroup}>
              <input type="email" id="Email" name="from_email" style={styles.fcfFormControl} required />
            </div>
          </div>
          <div style={styles.fcfFormGroup}>
            <label htmlFor="Message" style={styles.fcfLabel}>Your message</label>
            <div style={styles.fcfInputGroup}>
              <textarea id="Message" name="message" style={styles.fcfFormControl} rows="6" maxLength="3000" required></textarea>
            </div>
          </div>
          <div style={styles.fcfFormGroup}>
            <button type="submit" value="Send" id="fcf-button" style={{ ...styles.fcfBtn, ...styles.fcfBtnPrimary, ...styles.fcfBtnLg, ...styles.fcfBtnBlock }}>Send Message</button>
          </div>
          {/* <div style={styles.fcfCredit} id="fcf-credit">
            Simple HTML email form provided by <a href="https://www.majesticform.com" target="_blank" style={styles.fcfCreditLink}>MajesticForm</a>
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default Contact