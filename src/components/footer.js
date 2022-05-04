const Footer = () => {
  return (
    <footer
      className
      style={{
        backgroundImage: 'url(assets/gbbb.jpeg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='container'></div>
      <div className='container d-flex flex-column align-items-start justify-content-center'>
        <form action='action_page.php'>
          <div
            className='d-flex flex-column align-items-start justify-content-start mw-25'
            style={{ width: '420px' }}
          >
            <div className='container'>
              <h4 className='text-white'>
                Want to recieve oure latest Recipes?
              </h4>
              <p className='text-white'>
                Then subscribe to our Newsletter and you will be the first to
                try out our newest creations!
              </p>
            </div>
            <div className='container d-flex flex-row justify-content-start align-content-center p-0'>
              <div className='container' style={{ backgroundColor: 'white' }}>
                <input
                  className='p-1 flex-grow-1'
                  type='text'
                  placeholder='Email address'
                  name='mail'
                  required
                />
              </div>
              <div className='container'>
                <input
                  type='submit'
                  defaultValue='Subscribe'
                  className='btn btn-outline-light'
                />
              </div>
            </div>
          </div>
        </form>
        <div className='container p-2 m-2'>
          <a href>
            <img
              className='mr-3'
              src='assets/logo_facebook.png'
              width='30px'
              height='true'
              alt='testing'
            />
          </a>
          <a href>
            <img
              className='mr-3'
              src='assets/logo_instagram.png'
              width='30px'
              height='true'
              alt='testing'
            />
          </a>
          <a href>
            <img
              className='mr-3'
              src='assets/logo_twitter.png'
              width='30px'
              height='true'
              alt='testing'
            />
          </a>
          <a href>
            <img
              className='mr-3'
              src='assets/logo_youtube.png'
              width='30px'
              height='true'
              alt='testing'
            />
          </a>
        </div>
      </div>
      <div className='copyright d-flex flex-row justify-content-around mt-3 pt-2 bg-light'>
        <div className='privacy'>
          HELP &nbsp; &nbsp; &nbsp; &nbsp;TERM &amp; CONDITION &nbsp; &nbsp;
          &nbsp;PRIVACY
        </div>
        <p className='copyright-text'>
          copyright © 2022 - The International Cookbook
        </p>
      </div>
    </footer>
  );
};

export default Footer;
