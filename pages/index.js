import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const giphy = require('giphy-api')({'https':true});
const Index = (props) => (
  <Layout>
    <h1>Trending Giphys</h1>
    <ul>
      {props.images.map(image => (
        <li key={`${image.id}`}>
          <figure>
            <img src={`https://media.giphy.com/media/${image.id}/giphy.gif`} title={`${image.title}`} />
            <figcaption>{`${image.title}. Source: Giphy`}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
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
