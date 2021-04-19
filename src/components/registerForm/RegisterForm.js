import React from 'react';

function RegisterForm(props) {
  const { submitHandler, nameHandler } = props;


  return (
    <form className='pl5 mw6' onSubmit={ e => submitHandler(e)}>
      <h2 className='navy f3 mt0 mb5'>Register</h2>
      <h3 className='navy f4'>Team player - Be positive - Beat yesterday</h3> 
      <p className='measure black-60 lh-copy f6'>
        Together we re-define the experience of online gaming through gamification and novel technical solutions.
      </p>
      <input className='db h2 w-100 ba pl2 br2 b--black-30 mv2' type='text' placeholder='Name' onChange={ e => nameHandler(e.target.value)} />
      <input className='db h2 w-100 ba pl2 br2 b--black-30 mv2' type='text' placeholder='Email' />
      <div className='mv3'>
        <input type='checkbox' name='terms' id='terms' defaultChecked/>
        <label className='ml1' htmlFor='terms'>
          I agree to the terms
          <span className='white f7'> and I bring nice fika when corona is over ;)</span>
        </label>
      </div>
      <button type='submit' className='ph4 pv2 bg-blue white br2 bn mt3 grow pointer'>
        I'm in, sign me up!
      </button>

    </form>
  )
}

export default RegisterForm;