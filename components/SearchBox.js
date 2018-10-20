const SearchBox = ({query}) => (
  <span>
    <form className="search" method="get" action='/search'>
      <input type="text" name="q" defaultValue={query} />
      <input type="submit" value="Search" />
    </form>
    <style jsx>{`
    .search{
        text-align:right;
    }
    `}</style>
  </span>
)

export default SearchBox