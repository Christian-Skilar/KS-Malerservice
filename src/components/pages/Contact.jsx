import React, { useRef, useState } from 'react';
import { AiOutlineMobile } from 'react-icons/ai';
import { BsPinMap } from 'react-icons/bs';
import { BiBuilding } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import map from '../images/map.png'
import checkmark from '../images/checked.png';
import './Contact.scss';



const Success = () => {
  const [showElement, setShowElement] = useState(true);

  const handleClick = () => {
    setShowElement(false);
  };
  
  return (
    showElement? <div className='popup'>
      <img src={checkmark} alt="success check" />
      <h2>Takk</h2>
      <p>Din melding er sendt. Vi kommer tilbake til deg så fort som mulig</p>
      <button onClick={handleClick}>OK</button>
    </div>: null
  )
}

const Contact = () => {

  const form = useRef();
  const [result, showResult] = useState(false);
  const style = { color: "#0072BC", fontSize: "22px" }

  const { errors, touched, handleBlur, values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '', 
      telefon: '',
      email: '', 
      message: '' 
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Mangler Navn'),
      email: Yup.string().email('Mangler epost').required('Mangler epost'),
      telefon: Yup.string().required('Mangler telefon nummer'),
      message: Yup.string().min(10, 'Melding er for kort').required('Melding er for kort')
    }),
    onSubmit: (values, {resetForm}) => {
      resetForm({ values: '' })
       emailjs.sendForm(
        'service_ghqop9s', 
        'template_3hh5697', 
        form.current, 
        'TVrUQrAix6oCAvBZ_'
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sendt")
        }, 
        (error) => {
            console.log(error.text);
        }
        );
        showResult(true);

          // Hide success message after some time
          setTimeout(() => {
            showResult(false);
          }, 15000);
   },
});

  return (
    <div>
    <div id='contact' className='contact'>
      <h2>Ta Kontakt</h2>
      <h3>For en hyggelig prat om ditt neste prosjekt</h3>
      <div className='border'/>
      <form ref={form} onSubmit={handleSubmit} className="contact-form">

              <input 
                  placeholder='Navn' 
                  type="text" 
                  name="name" 
                  onBlur={handleBlur}
                  className={errors.name && touched.name ? "input-error" : ""}
                  onChange={handleChange}
                  value={values.name}
                  />
                  {errors.name && touched.name && <p className='error-message'>{errors.name}</p>}

                <input 
                  placeholder='Tlf' 
                  type="number" 
                  name="telefon" 
                  onBlur={handleBlur}
                  className={errors.telefon && touched.telefon ? "input-error" : ""}
                  onChange={handleChange}
                  value={values.telefon}
                  />
                  {errors.telefon && touched.telefon && <p className='error-message'>{errors.telefon}</p>}
            
                <input 
                  placeholder='Epost' 
                  type="email" 
                  name="email" 
                  onBlur={handleBlur}
                  className={errors.email && touched.email ? "input-error" : ""}
                  onChange={handleChange}
                  value={values.email}
                  />
                  {errors.email && touched.email && <p className='error-message'>{errors.email}</p>}

                <textarea 
                  placeholder='Melding' 
                  name="message" 
                  onBlur={handleBlur}
                  className={errors.message && touched.message ? "input-error" : ""}
                  onChange={handleChange}
                  value={values.message}
                  />
                  {errors.message && touched.message && <p className='error-message'>{errors.message}</p>}
            
          <input type="submit" value="Send" className="button" />
        </form>
        {result ? <Success/> : null}
    </div>

    <div className='footer'>
      <div className='footer-col'>
        <div className='footer-row'>
          <AiOutlineMobile style={style} />
          <p>958 37 634</p>
        </div>
        <div className='footer-row'>
          <BsPinMap style={style} />
          <p>3117 Tønsberg</p>
        </div>
        <div className='footer-row'>
          <FiMail style={style} />
          <a className='mail-link' href="mailto:kristoffer@ksmalerservice.no">kristoffer@ksmalerservice.no</a>
        </div>
        <div className='footer-row'>
          <BiBuilding style={style} />
          <p>KS Malerservice AS</p>
        </div>
      </div>
      <img src={map} alt="google maps" className='google-maps' />

    </div>

    <p className='copyright'>© {(new Date().getFullYear())} <a href="https://larsen-portfolio.netlify.app/">Larsen-Web</a></p>
    </div>
  );
};

export default Contact;
