import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";


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
        <button className="btn btn-primary uppercase hover:btn-success">ORDER YOUR FAVOURITE FOOD</button>
      </div>
    </div>
  );
};

export default MenuCategory;