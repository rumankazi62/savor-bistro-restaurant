import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {

  const [menu] = useMenu();
  const desserts = menu?.filter(item => item.category === 'dessert');
  const soup = menu?.filter(item => item.category === 'soup');
  const pizza = menu?.filter(item => item.category === 'pizza');
  const salad = menu?.filter(item => item.category === 'salad');
  const offered = menu?.filter(item => item.category === 'offered');


  return (
    <div>
      <Helmet>
        <title>Savor Bistro | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={'Our Menu'}></Cover>
      {/* Menu Items */}
      <SectionTitle heading="TODAY'S OFFER" subHeading="Don't miss"></SectionTitle>
      {/* Offered Items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert Items */}
      <MenuCategory items={desserts} title={"dessert"} image={dessertImg}></MenuCategory>
      {/* Soup Items */}
      <MenuCategory items={soup} title={"soup"} image={soupImg}></MenuCategory>
      {/* Pizza Items */}
      <MenuCategory items={pizza} title={"pizza"} image={pizzaImg}></MenuCategory>
      {/* Salad Items */}
      <MenuCategory items={salad} title={"salad"} image={saladImg}></MenuCategory>
    </div>
  );
};

export default Menu;