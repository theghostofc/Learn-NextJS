import Head from 'next/head'
import Link from 'next/link'
import SearchBox from './SearchBox'

const linkStyle = {
  marginRight: 15
}
const Header = ({next, title='NextJS Giphy - Trending'}) => (
  <div>
  <Head>
    <title>{title}</title>
    <meta httpEquiv="refresh" content={`5;url=/trending/${next}`} />
  </Head>
  <div>
    <h1>{title}</h1>
    <span className="navLeft">
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
    </span>
    <span className="navRight">
      <SearchBox />
    </span>
  </div>
  <style jsx>{`
  .navLeft{
    width: 100px;
    text-align: left;
    float: left;
  }
  .navRight{
    width: 40%;
    text-align: right;
  }
  `}</style>
</div>
)

export default Header
