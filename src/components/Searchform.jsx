import React from 'react';


const Searchform = () => {
  return (
        <section>
            <form className="form-field">
                <p>Search for the best services</p>
                <div className="form-div">
                <label>Location</label>
                <div className="input-div">
                    <input type="text" placeholder="Where are you based?"/>
                </div>
                </div>
                <div className="form-div">
                <label>Event Date</label>
                <div className="input-div">
                    <input type="Date" placeholder="mm/dd/yyyy"/>
                </div>
                </div>
                <div className="form-div">
                <label>Event type</label>
                <div className="input-div">
                    <input type="text" placeholder="What type of service do you want?"/>
                </div>
                </div>
                <div className="form-div">
                <label>Guests</label>
                <div className="input-div">
                    <input type="text" placeholder="6Adults, 5teens, 2kids"/>
                </div>
                </div>
                <button className="search_btn">Search</button>
            </form>
      </section>
  )
}

export default Searchform