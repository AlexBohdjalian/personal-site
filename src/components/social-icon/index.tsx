import { SocialIcon } from 'react-social-icons';
import './index.css';

interface PTypes {
  name: string
  url: string
  title?: string
}

const CustomSocialIcon = (props: PTypes) => {
  return (
    <div className={props.name + " custom-social-icon-container"}>
      {/* TODO: add hover text */}
      <SocialIcon
        url={props.url}
        target="_blank"
        rel="noopener noreferrer"
        title={props.title ?? 'Opens In New Tab'}
      />
    </div>
  );
};

export default CustomSocialIcon;
