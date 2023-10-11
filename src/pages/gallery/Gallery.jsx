import "./gallery.css";

import Header from "../../components/Header";
import HeaderImage from "../../images/p7.jpeg";

const Gallery = () => {
   const images = [];
   const galleryLength = 13;
   for (let i = 1; i <= galleryLength; i++) {
      images.push(require(`../../images/p${i}.jpeg`));
   }
   return (
      <>
         <Header
            title='Our Gallery'
            image={HeaderImage}
         >
            Asperiores non temporibus id, deserunt vitae mollitia aliquid nisi
            aperiam debitis, tenetur ut ea esse, adipisci tempora!
         </Header>
         <section className='gallery'>
            <div className='container gallery__container'>
               {images.map((image, index) => (
                  <article key={index}>
                     <img
                        src={image}
                        alt={`Gallery Img ${index + 1}`}
                     />
                  </article>
               ))}
            </div>
         </section>
      </>
   );
};

export default Gallery;
