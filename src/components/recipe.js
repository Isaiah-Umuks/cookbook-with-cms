import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function RenderIngredients({ ingriedientsdata }) {
  let unorderedlist;
  let paragraph;
  let tabledata;

  return (
    <>
      <ul
        className='list-group list-group-numbered list-group-flush'
        style={{ textAlign: 'left' }}
      >
        {unorderedlist}
      </ul>
      {paragraph}
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Quantity</th>
            <th scope='col'>Name</th>
          </tr>
        </thead>
        <tbody>{tabledata}</tbody>
      </table>
    </>
  );
}
function RenderInstructions({ instructionsdata }) {
  let unorderedlist;
  let paragraph;

  return (
    <>
      <ul
        className='list-group list-group-numbered list-group-flush'
        style={{ textAlign: 'left' }}
      >
        {unorderedlist}
      </ul>
      {paragraph}
    </>
  );
}
const article = (data) => {
  const result = data[0].fields;
  return (
    <div className='container '>
      <div className='umarecipe ' style={{ textAlign: 'center' }}>
        <div className='container'>
          <h4 className='display-4 font-weight-light text-danger '>
            <span className='text-warning'>{result.name}</span>
          </h4>
          <div className='row d-flex flex-row justify-content-center mb-4'>
            <div className='col-md-4'>
              <p>
                Cooks in <strong> 2 Hours, 00 Minutes</strong>
              </p>
            </div>
            <div className='col-md-'>
              <p>
                Difficulty <strong>{result.difficulty}</strong>
              </p>
            </div>
            <div className='col-md-4'>
              <p>
                Servings <strong> 8 portions</strong>
              </p>
            </div>
          </div>
          <div className='box text-center '>
            <img
              alt='imgdetails'
              src={result.image.fields.file.url}
              title='Chicken Biryani '
            />
          </div>
          <div className='p-4 my-4 bg-light'>
            <br />
            <p className='first_letter'>{result.description}</p>
          </div>
          <br />
          <div className='row justify-content-center m-0 p-0 '>
            <h4 className='display-4 text-muted text-center py-5'>
              <u>Ingredients</u>
            </h4>
            <RenderIngredients ingriedientsdata={result.ingredients} />
          </div>
          <div className='container m-5'>
            <h4 className='display-4 text-muted text-center py-5'>
              <u>Preparation</u>
            </h4>
            <RenderInstructions instructionsdata={result.instructions} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Recipe = ({ data }) => {
  return <div>{data.length > 0 && article(data)}</div>;
};

export default Recipe;
