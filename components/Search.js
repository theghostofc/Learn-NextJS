import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Search = () => (
  <div>
    <div className="search">
        <input type="text" />
        <Link href="/">
          <button style={linkStyle}>Search</button>
        </Link>
    </div>
    <style jsx>{`
    .search{
        text-align:right;
    }
    `}</style>
  </div>
)

export default Search
