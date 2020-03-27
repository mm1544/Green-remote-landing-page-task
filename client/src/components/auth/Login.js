import React, { Fragment, useState } from 'react';

const Login = () => {
  // Creating state
  const [imputData, setImputData] = useState({
    email: '',
    toRememberDevice: false
  });

  // Destructuring state
  const { email, toRememberDevice } = imputData;

  // Method to change the state when input is being typed in
  const onChange = e => {
    if (e.target.name === 'toRememberDevice') {
      setImputData({ ...imputData, toRememberDevice: e.target.checked });
    } else {
      setImputData({ ...imputData, [e.target.name]: e.target.value });
    }
  };

  const handleOnClick = e => {
    e.preventDefault();
    console.log('Attempting to login');
    console.log(imputData);
  };

  return (
    <Fragment>
      <div>
        <div>
          <div className='login-container vh-min-100 vw-100 col-3 grid-center-center overflow-hidden relative'>
            <div className='col-start-2 justify-self-center'>
              <div className='login-window bg-white margin-bottom-20 padding-left-50 padding-right-50 padding-top-65 padding-bottom-65 standard-shadow border-1-off-white grid gap-20 login-window-grid-template-rows'>
                <div>
                  <img
                    className='img-height-40'
                    src='https://green.cdn.energy/branding/logo-r.svg'
                    alt='Logo of the company'
                  />
                  <div>
                    <div>
                      <h1 className='ui-h1 weight-5 margin-top-40'>
                        Example login screen
                      </h1>
                      <h2 className='ui-h5 ui-sub-title margin-top-10'>
                        Getting started with Green
                      </h2>
                    </div>
                    <div>
                      <p className='ui-label margin-bottom-10 margin-top-80'>
                        Email Address
                      </p>
                      <input
                        className='ui-input w-100'
                        type='email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <p className='ui-checkbox-label'>
                      <input
                        type='checkbox'
                        className='ui-checkbox'
                        name='toRememberDevice'
                        checked={toRememberDevice}
                        onChange={e => onChange(e)}
                      />
                      Remember this device
                    </p>
                  </div>

                  <div className='col-2 grid gap-20'>
                    <button
                      className=' ui-btn bg-white border-1-lighter-grey colour-grey ui-btn-big margin-top-70'
                      onClick={e => handleOnClick(e)}
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
