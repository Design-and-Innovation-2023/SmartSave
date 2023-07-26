import getConfig from 'next/config'
// eslint-disable-next-line jsx-a11y/alt-text, prettier/prettier, @next/next/no-img-element

const Image = ({ src, alt, ...rest }) => {
  const { publicRuntimeConfig } = getConfig()
  return <img src={`${publicRuntimeConfig.basePath || ''}${src}`} alt={alt} {...rest} />
}

export default Image
