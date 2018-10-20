import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Pager = ({page}) => (
  <div className='pager'>
    <Link href={`/${page.baseUrl}/${page.previous}`}>
      <a style={linkStyle}>&lt; Prev</a>
    </Link>
    <span className='current'>{`${page.current + 1}`}&nbsp;</span>
    <Link href={`/${page.baseUrl}/${page.next}`}>
      <a style={linkStyle}>Next &gt;</a>
    </Link>
    <style jsx>{`
      .pager{
          text-align:center;
      }
      .current{
          text-align:center;
      }
    `}</style>
  </div>
)
export default Pager
