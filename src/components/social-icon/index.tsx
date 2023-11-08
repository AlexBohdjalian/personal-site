import { SocialIcon } from 'react-social-icons';
import './index.css';

interface PTypes {
  name: string
  url: string
}

const CustomSocialIcon = (props: PTypes) => {
  return (
    <div className={props.name + " custom-social-icon-container"}>
      {/* TODO: add hover text */}
      <SocialIcon
        url={props.url}
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  );
};

export default CustomSocialIcon;
