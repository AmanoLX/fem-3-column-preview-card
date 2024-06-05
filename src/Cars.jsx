import Car from './Car';

const Cars = ({ cars }) => {
  return (
    <>
      {cars.map((car) => {
        return <Car key={car.id} {...car} />;
      })}
    </>
  );
};
export default Cars;
