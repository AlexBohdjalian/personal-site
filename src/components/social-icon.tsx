import { SocialIcon } from 'react-social-icons';


const CustomSocialIcon = (props: { url: string }) => {
  return (
    <div
      style={{
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 100,
        padding: 2,
      }}
    >
      <SocialIcon url={props.url} />
    </div>
  );
};

export default CustomSocialIcon;
