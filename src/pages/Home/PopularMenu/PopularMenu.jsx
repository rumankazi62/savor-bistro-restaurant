import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
// import { menuApi } from "../../../../public/menu";
import useMenu from "../../../hooks/useMenu";



const PopularMenu = () => {

  const [menu] = useMenu();

  const popularItems = menu?.filter(item => item.category === 'popular');

    // const popularItems = menuApi?.filter(item => item.category === 'popular');
  
  return (
    <section className="mb-12">
      <SectionTitle heading={'FROM OUR MENU'} subHeading={'Check it out'}></SectionTitle>
      <div className=" grid md:grid-cols-2 gap-10">
        {
          popularItems?.map((item) => {
            return <MenuItem key={item._id} item={item}></MenuItem>
          })
        }
      </div>
      <div className=" flex flex-col my-10 items-center">
        <button className="btn btn-primary uppercase hover:btn-success">View Full Page</button>
      </div>
      
    </section>
  );
};

export default PopularMenu;