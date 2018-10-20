import Head from 'next/head'
import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}
const Header = ({title='NextJS Giphy - Search'}) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
  </div>
)

export default Header
