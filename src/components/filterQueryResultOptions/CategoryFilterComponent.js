import { Container, Form } from "react-bootstrap";

const CategoryFilterComponent = () => {
  return (
    <Container>
      <div className='p-3'>
        <h4>Bütün Kateqoriyalar</h4>
        <hr />
        <p className='text-secondary'>Premium</p>
        <p className='text-secondary'>Qazlı</p>
        <p className='text-secondary'>Qazsız</p>
        <p className='text-secondary'>Bidon</p>
        <p className='text-secondary'>Vintaj</p>

      </div>

    </Container>
  );
};

export default CategoryFilterComponent;
