import { CompanyType } from '../../types/types';
import Card from '../UI/Card';

const CompanyEdit = (props: CompanyType) => {
  return (
    <Card>
      <form>
        <div>
          <label htmlFor='name'></label>
          <input
            type='text'
            required
            id='name'
            placeholder={props.name !== null ? props.name : undefined}
          />
        </div>
        <div>
          <label htmlFor='country'></label>
          <input
            type='text'
            id='country'
            placeholder={props.country !== null ? props.country : undefined}
          />
        </div>
        <div>
          <label htmlFor='founding_date'></label>
          <input
            type='text'
            id='founding_date'
            placeholder={
              props.founding_date !== null ? props.founding_date : undefined
            }
          />
        </div>
        <div>
          <label htmlFor='description'></label>
          <textarea
            id='description'
            placeholder={
              props.description !== null ? props.description : undefined
            }
            rows={5}
          />
        </div>
      </form>
    </Card>
  );
};
export default CompanyEdit;
