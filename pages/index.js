import Layout from '../components/MyLayout.js'
import Search from '../components/Search.js'
import Link from 'next/link'

const giphy = require('giphy-api')({'https':true});
const Index = (props) => (
  <Layout>
    <h1>Trending Giphys</h1>
    <Search />
    <div className='gallery'>
      {props.images.map(image => (
        <div className='item' key={`${image.id}`}>
          <figure>
            <img src={`https://media.giphy.com/media/${image.id}/giphy.gif`} title={`${image.title}`} />
            <figcaption>{`${image.title}. Source: Giphy`}</figcaption>
          </figure>
        </div>
      ))}
    </div>
    <style jsx>{`
    .gallery{
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-auto-rows: 250px 150px;
    }
    .item figure img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    `}</style>
  </Layout>
)

Index.getInitialProps = async function() {
  var data = await giphy.trending().then(function (res) {
    return res.data;
  });
  return {
    images: data
  }
}

export default Index
