import Head from 'next/head'
import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}
const Header = ({next, title='NextJS Giphy - Trending'}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta httpEquiv="refresh" content={`5;url=/trending/${next}`} />
    </Head>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
  </div>
)

export default Header
