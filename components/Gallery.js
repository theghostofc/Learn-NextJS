const Gallery = ({images}) => (
    <div className='gallery'>
      {images.map(image => (
        <div className='item' key={`${image.id}`}>
          <figure>
            <img src={`https://media.giphy.com/media/${image.id}/giphy.gif`} title={`${image.title}`} />
            <figcaption>{`${image.title}. Source: Giphy`}</figcaption>
          </figure>
        </div>
      ))}
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
  )
  export default Gallery