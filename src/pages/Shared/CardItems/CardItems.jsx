

const CardItems = ({item}) => {

  const {image, name, recipe, price} = item;

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="" className="rounded-xl" />
       </figure>
       <p className="bg-slate-900 text-white absolute right-0 mr-4 p-2">${price}</p>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{name}</h2>
      <p>{recipe}</p>
      <div className="card-actions">
        <button className="btn btn-primary uppercase">add to cart</button>
      </div>
    </div>
    </div>
    </>
  );
};

export default CardItems;