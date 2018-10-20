import Head from 'next/head'
import Link from 'next/link'
import SearchBox from './SearchBox'

const linkStyle = {
  marginRight: 15
}
const Header = ({query, title='NextJS Giphy - Search'}) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <div>
      <h1>{title}</h1>
      <span className="navLeft">
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
      </span>
      <span className="navRight">
        <SearchBox query={query} />
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
