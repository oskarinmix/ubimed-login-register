import React from "react";

const AddressData = ({ data }) => {
  const {
    city,
    setCity,
    country,
    setCountry,
    address,
    setAddress,
    phone,
    setPhone,
  } = data;
  return (
    <React.Fragment>
      <div className="label-input">
        <label htmlFor="country"> País: </label>
        <input
          type="text"
          id="country"
          placeholder="Ingrese su País"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className="label-input">
        <label htmlFor="city"> Ciudad: </label>
        <input
          type="text"
          id="city"
          placeholder="Ingrese su ciudad"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="label-input">
        <label htmlFor="address">Dirección: </label>
        <input
          type="text"
          id="address"
          placeholder="Ingrese su Dirección"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="label-input">
        <label htmlFor="phone"> Teléfono: </label>
        <input
          type="text"
          id="phone"
          placeholder="Ingrese su Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
    </React.Fragment>
  );
};

export default AddressData;
