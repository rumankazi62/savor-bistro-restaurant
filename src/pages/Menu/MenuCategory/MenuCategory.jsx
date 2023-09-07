import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from 'react-router-dom';

const MenuCategory = ({items, image, title}) => {
  return (
    <div className="mb-10">
      {title && <Cover img={image} title={title}></Cover>}
      <div className=" grid md:grid-cols-2 gap-10 mt-16">
        {
          items?.map((item) => {
            return <MenuItem key={item._id} item={item}></MenuItem>
          })
        }
      </div>
    
      <div className=" flex flex-col my-10 items-center">
      <Link to={`/order/${title}`}>
      <button className="btn btn-outline border-0 border-b-4 mt-4">ORDER YOUR FAVOURITE FOOD</button>
      </Link>
      
      </div>
    </div>
  );
};

export default MenuCategory;