import CardItems from "../../Shared/CardItems/CardItems";


const OrderTab = ({items}) => {
  return (
    <div className="m-10 grid md:grid-cols-3 gap-10">
        {
          items?.map((item) => {
            return <CardItems key={item._id} item={item}></CardItems>
          })
        }
        </div>
  );
};

export default OrderTab;