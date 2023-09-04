import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
  return (
    <section className="featured-item text-white pt-4 my-20">
      <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"}></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-28">
        <div><img src={featuredImg} alt="" /></div>
        <div className="md:ml-10"> 
          <p>September 1, 2023</p>
          <h3 className="uppercase text-3xl my-4">WHERE CAN I GET SOME?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;