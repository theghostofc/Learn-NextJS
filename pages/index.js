import SearchBox from '../components/SearchBox.js'
import {withRouter} from 'next/router'
import Pager from '../components/Pager'
import Header from '../components/Header.js'
import Gallery from '../components/Gallery.js'

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
    <Gallery images={props.images} />
    <hr />
    <Pager page={props.page} />
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
