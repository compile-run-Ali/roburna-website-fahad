import React, { useState } from 'react'




function NewsletterForm() {


  return (
    <form className='newsletter-form'>
      <div className='row'>
        <div className='col-7'>
            <input name='email' type='email' placeholder='Enter your email address' required />
        </div>
        <div className='col-5'>
            <button className='--btn-1' type='submit'>JOIN THE GREEN REVOLUTION</button>
        </div>
      </div>
    </form>
  );
}

export default NewsletterForm;