import SearchBox from '../components/SearchBox.js'
import {withRouter} from 'next/router'
import Pager from '../components/Pager'
import Header from '../components/Header.js'

const pageSize = 12;
const giphy = require('giphy-api')({'https':true});
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}
const Index = withRouter((props) => (
  <div style={layoutStyle}>
    <Header next={props.next} title={props.title} />
    <h1>{props.title}</h1>
    <SearchBox />
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
  </div>
))

Index.getInitialProps = async function(props) {
  var n = Number(props.query.n);
  var baseUrl = props.query.baseUrl;
  if(n==null || n=="" || isNaN(n) || n === undefined){
    n=0;
  }
  else {
    if (n<0) {
      const err = new Error();
      err.code = 'ENOENT';
      throw err;
    }
  }

  var offset = n * pageSize;
  var data = await giphy.trending({limit:pageSize, offset:offset}).then(function (res) {
    return res.data;
  });

  return {
    images: data,
    page: {
      previous:((n-1)<0)?0:n-1,
      current:n,
      next:(data.length<pageSize)?n:n+1,
      baseUrl: baseUrl
    },
    title: 'Trending Giphys',
    next: (data.length<pageSize)?0:n+1
  }
}

export default Index
