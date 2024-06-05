const Car = ({ name, info, icon, id }) => {
  const car = `car car-${id}`;
  return (
    <section className={car}>
      <picture>
        <img src={icon} alt={name} className="car__img" />
      </picture>
      <div className="car__body">
        <h2 className="car__title">{name}</h2>
        <p className="car__info">{info}</p>
      </div>
      <div className="btn-holder">
        <button type="button" className="btn">
          Learn More
        </button>
      </div>
    </section>
  );
};
export default Car;
