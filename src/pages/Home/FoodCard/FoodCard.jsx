
// import { menuApi } from "../../../../public/menu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import CardItems from "../../Shared/CardItems/CardItems";


const FoodCard = () => {
  const [menu] = useMenu();
  const cardItem = menu?.filter(item => item.category === 'famous');


  return (
    <section>
      <SectionTitle heading={'CHEF RECOMMENDS'} subHeading={'Should Try'}></SectionTitle>
      <div className="m-10 grid md:grid-cols-3 gap-10">
      {
          cardItem?.map((item) => {
            return <CardItems key={item._id} item={item}></CardItems>
          })
        }
      </div>
    </section>
  );
};

export default FoodCard;