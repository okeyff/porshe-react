import React from 'react';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      countryState: 'Alabama',
      country: 'USA',
    };
    this.setCountryState = this.setCountryState.bind(this);
  }

  statesList = [
    {
      label: 'Alabama',
      value: 'alabama',
    },
    {
      label: 'Alaska',
      value: 'alaska',
    },
    {
      label: 'Hawaii',
      value: 'hawaii',
    },
  ];

  countriesList = [
    {
      label: 'USA',
      value: 'usa',
    },
    {
      label: 'Canada',
      value: 'canada',
    },
    {
      label: 'Russia',
      value: 'russia',
    },
  ];

  setCountryState(e) {
    this.setState({ countryState: e.target.value });
  }

  setCountry(e) {
    this.setState({ countryState: e.target.value });
  }

  render() {
    return (
      <main className="main contacts contacts-main">
        <section className="contacts">
          <div className="container">
            <div className="contacts__inner">
              <h1 className="contacts__title">Request Information</h1>
              <p className="contacts__form-text">
                Fields marked with <span className="contacts__form-required">*</span> must be
                completed.
              </p>

              <form className="contacts__form">
                <div className="contacts__form-left">
                  <h3 className="headline">Personal Details</h3>
                  <div className="contacts__form-field fieldcols2">
                    <label className="contacts__form-label" htmlFor="firstname">
                      First Name <span className="contacts__form-required">*</span>
                    </label>
                    <input className="contacts__form-input" type="text" id="firstname" required />
                  </div>

                  <div className="contacts__form-field fieldcols1">
                    <label className="contacts__form-label" htmlFor="middlename">
                      Middle Initial
                    </label>
                    <input className="contacts__form-input" type="text" id="middlename" />
                  </div>

                  <div className="contacts__form-field fieldcols2">
                    <label className="contacts__form-label" htmlFor="lastname">
                      Last Name <span className="contacts__form-required">*</span>
                    </label>
                    <input className="contacts__form-input" type="text" id="lastname" required />
                  </div>

                  <div className="contacts__form-field fieldcols1">
                    <label className="contacts__form-label" htmlFor="suffix">
                      Suffix
                    </label>
                    <input className="contacts__form-input" type="text" id="suffix" />
                  </div>

                  <div className="contacts__form-field fieldcols2">
                    <label className="contacts__form-label" htmlFor="street">
                      Street address <span className="contacts__form-required">*</span>
                    </label>
                    <input className="contacts__form-input" type="text" id="street" required />
                  </div>

                  <div className="contacts__form-field fieldcols1">
                    <label className="contacts__form-label" htmlFor="supplement">
                      Supplement (Unit/Apt)
                    </label>
                    <input className="contacts__form-input" type="text" id="supplement" />
                  </div>

                  <div className="contacts__form-field fieldcols2">
                    <label className="contacts__form-label" htmlFor="city">
                      City <span className="contacts__form-required">*</span>
                    </label>
                    <input className="contacts__form-input" type="text" id="city" required />
                  </div>

                  <div className="contacts__form-field fieldcols1">
                    <label className="contacts__form-label" htmlFor="state">
                      State
                    </label>
                    <select
                      className="contacts__form-select"
                      name="state"
                      id="state"
                      value={this.state.countryState}
                      onChange={this.setCountryState}>
                      {this.statesList.map((option) => (
                        <option
                          className="contacts__form-option"
                          value={option.value}
                          key={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="contacts__form-field fieldcols2">
                    <label className="contacts__form-label" htmlFor="zipcode">
                      Zip Code <span className="contacts__form-required">*</span>
                    </label>
                    <input className="contacts__form-input" type="tel" id="zipcode" required />
                  </div>

                  <div className="contacts__form-field fieldcols1">
                    <label className="contacts__form-label" htmlFor="country">
                      Country
                    </label>
                    <select className="contacts__form-select" name="country" id="country">
                      {this.countriesList.map((country) => (
                        <option className="contacts__form-option" value={country.value}>
                          {country.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="contacts__form-right">
                  <div className="headline">Additional Details</div>

                  <div className="contacts__form-field fieldcols4">
                    <label className="contacts__form-label" htmlFor="email">
                      Email <span className="contacts__form-required">*</span>
                    </label>
                    <input className="contacts__form-input" type="email" id="email" required />
                  </div>

                  <div className="contacts__form-field fieldcols4">
                    <label className="contacts__form-label" htmlFor="phone">
                      Phone number (000-000-0000)
                    </label>
                    <input className="contacts__form-input" type="tel" id="phone" />
                  </div>

                  <div className="contacts__form-field fieldcols4">
                    <input className="contacts__form-checkbox" type="checkbox" id="subscribe" />
                    <label
                      className="contacts__form-label contacts__form-label--checkbox"
                      htmlFor="subscribe">
                      Subscribe to our newsletter
                    </label>
                  </div>

                  <div className="contacts__form-field fieldcols4">
                    <button className="contacts__form-btn" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Contact;
