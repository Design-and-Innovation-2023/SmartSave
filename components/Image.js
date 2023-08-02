// eslint-disable-next-line jsx-a11y/alt-text, prettier/prettier, @next/next/no-img-element

const Image = ({ src, alt, ...rest }) => {
  let basePath = ''

  try {
    basePath = process.env.BASE_PATH || ''
  } catch {
    basePath = ''
  }

  return <img src={`${basePath}${src}`} alt={alt} {...rest} />
}

export default Image
