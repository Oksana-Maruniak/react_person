import './Person.scss';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>
    {person.age > 0 && (
      <p className="Person__age">
        {`I am ${person.age}`}
      </p>
    )}

    <p className="Person__partner">
      {!person.isMarried && ('I am not married')}
      {(person.isMarried && person.sex === 'f') && (`${person.partnerName} is my husband`)}
      {(person.isMarried && person.sex === 'm') && (`${person.partnerName} is my wife`)}
    </p>
  </section>
);
