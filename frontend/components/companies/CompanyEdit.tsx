import { FormEvent, useRef } from 'react';
import { CompanyType } from '../../types/types';
import Card from '../UI/Card';

type CompanyEditFormProps = {
  data: CompanyType;
  // eslint-disable-next-line
  onEditCompany(enteredData: any): any;
};

const CompanyEdit = (props: CompanyEditFormProps) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const countryInputRef = useRef<HTMLInputElement>(null);
  const foundingDateInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredName = nameInputRef.current?.value;
    const enteredCountry = countryInputRef.current?.value;
    const enteredFoundingDate = foundingDateInputRef.current?.value;
    const enteredDescription = descriptionInputRef.current?.value;
    const data = {
      name: enteredName,
      country: enteredCountry,
      foundingDate: enteredFoundingDate,
      description: enteredDescription,
    };
    props.onEditCompany(data);
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='name'></label>
          <input
            type='text'
            required
            id='name'
            placeholder={props.data.name !== null ? props.data.name : undefined}
            ref={nameInputRef}
          />
        </div>
        <div>
          <label htmlFor='country'></label>
          <input
            type='text'
            id='country'
            placeholder={
              props.data.country !== null ? props.data.country : undefined
            }
            ref={countryInputRef}
          />
        </div>
        <div>
          <label htmlFor='founding_date'></label>
          <input
            type='text'
            id='founding_date'
            placeholder={
              props.data.founding_date !== null
                ? props.data.founding_date
                : undefined
            }
            ref={foundingDateInputRef}
          />
        </div>
        <div>
          <label htmlFor='description'></label>
          <textarea
            id='description'
            placeholder={
              props.data.description !== null
                ? props.data.description
                : undefined
            }
            rows={5}
            ref={descriptionInputRef}
          />
        </div>
      </form>
    </Card>
  );
};
export default CompanyEdit;
