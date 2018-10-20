import Head from 'next/head'
import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}
const Header = () => (
  <div>
    <Head>
      <title>NextJS Giphy</title>
    </Head>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
  </div>
)

export default Header
