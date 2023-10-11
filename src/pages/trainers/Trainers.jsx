import Header from "../../components/Header";
import HeaderImage from "../../images/p4.jpeg";
import { trainers } from "../../data";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./trainers.css";
import Trainer from "../../components/Trainer";
const Trainers = () => {
   return (
      <>
         <Header
            title='Our Trainers'
            image={HeaderImage}
         >
            Incidunt quasi numquam. Eveniet optio inventore, unde ab debitis
            temporibus dolorum quaerat sint.
         </Header>
         <section className='trainers'>
            <div className='container trainers__container'>
               {trainers.map(({ id, image, name, job, socials }) => (
                  <Trainer
                     key={id}
                     image={image}
                     name={name}
                     job={job}
                     socials={[
                        { icon: <BsInstagram />, link: socials[0] },
                        { icon: <AiOutlineTwitter />, link: socials[1] },
                        { icon: <FaFacebookF />, link: socials[2] },
                        { icon: <FaLinkedinIn />, link: socials[3] },
                     ]}
                  />
               ))}
            </div>
         </section>
      </>
   );
};

export default Trainers;
