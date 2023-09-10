import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import shopCoverImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {  useState } from "react";
import OrderTab from "../OrderTab/OrderTab";
// import { useParams } from 'react-router-dom';
import useMenu from "../../../hooks/useMenu";
import { useParams } from "react-router-dom";


const Order = () => {
  const categories = ["dessert", "soup", "pizza", "salad"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu(); 
  
  
  

  const desserts = menu?.filter(item => item.category === 'dessert');
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
        <Tab>dessert</Tab>
        <Tab>soup</Tab>
        <Tab>pizza</Tab>
        <Tab>salad</Tab>
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