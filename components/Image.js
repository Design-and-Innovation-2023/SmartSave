// eslint-disable-next-line jsx-a11y/alt-text, prettier/prettier, @next/next/no-img-element

const Image = ({ src, alt, ...rest }) => (
  <img src={`${process.env.BASE_PATH || ''}${src}`} alt={alt} {...rest} />
)

export default Image
