// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ src, alt, ...rest }) => (
    <img src={src} alt={alt} {...rest} />
  );

export default Image
