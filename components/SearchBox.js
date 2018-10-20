import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const SearchBox = ({query}) => (
  <div>
    <form className="search" method="get" action='/search'>
      <input type="text" name="q" defaultValue={query} />
      <input type="submit" value="Search" />
    </form>
    <style jsx>{`
    .search{
        text-align:right;
    }
    `}</style>
  </div>
)

export default SearchBox