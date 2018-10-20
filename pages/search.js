import SearchBox from '../components/SearchBox.js'
import {withRouter} from 'next/router'
import Pager from '../components/Pager'
import SearchHeader from '../components/SearchHeader.js'
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
    <SearchHeader title={props.title} />
    <h1>{props.title}</h1>
    <SearchBox query={props.query} />
    <hr />
    <Gallery images={props.images} />
    <hr />
    <Pager page={props.page} />
  </div>
))

Index.getInitialProps = async function(props) {
  var n = Number(props.query.n);
  var baseUrl = props.query.baseUrl;
  var query = props.query.q;
  if(n==null || n=="" || isNaN(n) || n === undefined){
    n=0;
  }
  else {
    if (n<0 || query == '') {
      const err = new Error();
      err.code = 'ENOENT';
      throw err;
    }
  }

  var offset = n * pageSize;
  var data = await giphy.search({q:query, limit:pageSize, offset:offset}).then(function (res) {
    return res.data;
  });

  return {
    images: data,
    page: {
      previous:((n-1)<0)?0:n-1,
      current:n,
      next:(data.length<pageSize)?n:n+1,
      baseUrl: baseUrl + '/' + query
    },
    title: 'Giphy results for - ' + query,
    query: query
  }
}

export default Index
