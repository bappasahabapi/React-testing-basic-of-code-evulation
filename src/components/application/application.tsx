export const Application = () => {
  return (
    <>
    <h1>Job application form</h1>
    <h2>Pass case bappa</h2>
    <p>All fields are madatory </p>
    <img src="http://via.placeholder.com/150" alt="a person with a laptop" />

    <div data-testid='custom-element'>
        Custom HTML element
    </div>

      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Fullname" value='bappasaha' onChange={()=>{}} />
        </div>
        <div>
          <label htmlFor="bio">Biography</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United State</option>
            <option value="GB"> Gabar</option>
            <option value="CA">Canada</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree the term and conditons
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
