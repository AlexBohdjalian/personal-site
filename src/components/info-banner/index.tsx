import './index.css';

const InfoBanner = () => {
  function getYear() {
    return new Date().getFullYear();
  }

  return (
    <div className='bottom-info-banner'>
      <b>
        © {getYear()} Alex Bohdjalian All rights reserved.
      </b>
    </div>
  );
};

export default InfoBanner;
