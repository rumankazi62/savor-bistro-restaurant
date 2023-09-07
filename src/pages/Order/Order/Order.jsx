import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import shopCoverImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
// import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from 'react-router-dom';
import { menuData } from "../../../../public/menuData";


const Order = () => {
  const data = menuData()
  const { category } = useParams();
  const [tabIndex, setTabIndex] = useState(0);
  const [menu, setMenu] = useState(data);
  const initialCategory = category || "all"; // Default to "all" if no category is provided

  useEffect(() => {
    // Fetch menu data based on the category parameter
    if (initialCategory === "all") {
      // Fetch all menu items
      setMenu(data);
    } else {
      // Fetch menu items based on the category
      const filteredMenu = data.filter(item => item.category === initialCategory);
      setMenu(filteredMenu);
    }
  }, [initialCategory]);
  
  

  const desserts = menu?.filter(item => item.category === 'dessert');
  console.log("desserts", menu);
  const soup = menu?.filter(item => item.category === 'soup');
  const pizza = menu?.filter(item => item.category === 'pizza');
  const salad = menu?.filter(item => item.category === 'salad');

  return (
    <div>
      <Helmet>
        <title>Savor Bistro | Shop</title>
      </Helmet>
      <Cover img={shopCoverImg} title='Our Shop'></Cover>
      <Tabs className="my-20 flex flex-col items-center" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList className="uppercase card-title">
        <Tab>salad</Tab>
        <Tab>soup</Tab>
        <Tab>pizza</Tab>
        <Tab>dessert</Tab>
      </TabList>
      <TabPanel>
        <OrderTab items={salad}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab items={soup}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab items={pizza}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab items={desserts}></OrderTab>
      </TabPanel>
    </Tabs>
    </div>
  );
};

export default Order;