import React, { useRef, useState } from 'react';
import { AiOutlineMobile } from 'react-icons/ai';
import { BsPinMap } from 'react-icons/bs';
import { BiBuilding } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { BsCheckCircleFill } from 'react-icons/bs';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import map from '../images/map.png'
import './Contact.scss';



const Result = () => {
  return (
    <div className='success-message'>
      <p>Din melding er sendt</p>
      <BsCheckCircleFill />
    </div>
  )
}


const Contact = () => {

  const form = useRef();
  const [result, showResult] = useState(false);
  const style = { color: "#0072BC", fontSize: "22px" }

  const formik = useFormik({
    initialValues: {
      name: '', 
      telefon: '',
      email: '', 
      message: '' 
    },
    validationSchema: Yup.object({
      name: Yup.string()
	    .required('Mangler Navn'),
      email: Yup.string()
	    .required('Mangler epost'),
      telefon: Yup.string()
	    .required('Krever telefon nummer'),
      message: Yup.string()
      .required('Melding er for kort')
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
          }, 5000);
   },
});

  return (
    <div>
    <div id='contact' className='contact'>
      <h2>Ta Kontakt</h2>
      <h3>For en hyggelig prat om ditt neste prosjekt</h3>
      <div className='border'/>
      <form ref={form} onSubmit={formik.handleSubmit} className="contact-form">

              <input 
                  placeholder='Navn' 
                  type="text" 
                  name="name" 
                  className="p-text"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  />
              <div className={`error-text ${formik.touched.name && formik.errors.name ? 'show' : ''}`}>
                {formik.errors.name}
              </div>

                <input 
                  placeholder='Tlf' 
                  type="number" 
                  name="telefon" 
                  className="p-text"
                  onChange={formik.handleChange}
                  value={formik.values.telefon}
                  />
              <div className={`error-text ${formik.touched.telefon && formik.errors.telefon ? 'show' : ''}`}>
                {formik.errors.telefon}
              </div>
            
                <input 
                  placeholder='Epost' 
                  type="email" 
                  name="email" 
                  className="p-text"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  />
              <div className={`error-text ${formik.touched.email && formik.errors.email ? 'show' : ''}`}>
                {formik.errors.email}
              </div>


                <textarea 
                  placeholder='Melding' 
                  name="message" 
                  className="p-text"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  />
                <div className={`error-text ${formik.touched.message && formik.errors.message ? 'show' : ''}`}>
                  {formik.errors.message}
                </div>
            
          <input type="submit" value="Send" className="button" />
          <div>{result ? <Result/> : null}</div>
        </form>
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
