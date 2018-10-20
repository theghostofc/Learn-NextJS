import Layout from '../components/MyLayout.js'
import SearchBox from '../components/SearchBox.js'
import Link from 'next/link'
import {withRouter} from 'next/router'
import Pager from '../components/Pager'

const pageSize = 24;
const giphy = require('giphy-api')({'https':true});
const Index = withRouter((props) => (
  <Layout>
    <h1>{props.title}</h1>
    <SearchBox query={props.query} />
    <hr />
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
    <hr />
    <Pager page={props.page} />
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
))

Index.getInitialProps = async function(props) {
  console.log(props.query);
  var n = Number(props.query.n);
  var baseUrl = props.query.baseUrl;
  var query = props.query.q;
  if(n==null || n=="" || isNaN(n)){
    n=0;
  }
  else {
    if (n<0 || query == '') {
      const err = new Error();
      err.code = 'ENOENT';
      throw err;
    }
  }
  console.log("s Page number");
  console.log(n);

  var offset = n * pageSize;
  var data = await giphy.search({q:query, limit:pageSize, offset:offset}).then(function (res) {
    return res.data;
  });
  // console.log(data);
  return {
    images: data,
    page: {
      previous:((n-1)<0)?0:n-1,
      current:n,
      next:(data.length<pageSize)?n:n+1,
      baseUrl: baseUrl + '/' + query
    },
    title: 'Results for - ' + query,
    query: query
  }
}

export default Index
