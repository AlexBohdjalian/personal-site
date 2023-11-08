import './index.css';

interface PTypes {
  text: string
  url: string
}

const HeaderSection = (props: PTypes) => {
  return (
    <a
      className={props.text + " header-section"}
      href={props.url}
    >
      {props.text}
    </a>
  );
};

export default HeaderSection;
