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
      <div className='container d-flex flex-column align-items-start justify-content-center'></div>
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
