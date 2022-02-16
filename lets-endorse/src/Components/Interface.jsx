import React, { useState } from "react";

function Interface() {
  var name = "$name";
  var businessIdea = "$business_idea";
  var city = "$city";
  const [business_stage, setBusinessStage] = useState("");
  const [age_of_establishment, setAgeOfEstablishment] = useState("");
  const [primary_product_service_offered, setPrimaryProduct] = useState("");
  const [offered_to, setOfferedTo] = useState("$offered_to");
  const [secondary_product_service_offered, setSecondaryProduct] = useState("");
  const [processed_products, setProcessedProducts] = useState("");
  const [relevant_experience, setRelatedExperience] = useState("");
  const [skill_training, setSkillTraining] = useState("");
  const [usp, setUsp] = useState("");
  const [establishment_type, setEstablishmentType] = useState("");
  const [business_area, setBusinessArea] = useState("");
  const [business_locality, setBusinessLocality] = useState("");
  const [infra_ownership, setInfraOwnership] = useState("");
  const [establishment_area, setEstablishmentArea] = useState("");
  const [reason_for_location, setReasonForLocation] = useState("");
  const [market_research, setMarketResearch] = useState("");
  const [primary_market, setPrimaryMarket] = useState("");
  const [customers, setCustomers] = useState("");
  const [seasonability, setSeasonability] = useState("");
  const [competiton, setCompetiton] = useState("");
  const [suppliers, setSuppliers] = useState("");
  const [marketing_avenues] = useState("");
  const [scaleup_potential, setScaleupPotential] = useState("");
  function getValue(e) {
    if (e.target.value != "select options") {
      setBusinessStage(e.target.value);
    }
  }
  function establishmentValue(e) {
    setAgeOfEstablishment(e.target.value);
  }
  function offeredTo(e) {
    if (e.target.value != "select options") {
      setOfferedTo(e.target.value);
    }
  }
  return (
    <div style={{ display: "flex" }}>
      <div style={{ border: "1px solid black", width: "50%" }}>
        <form>
          <div>
            <label>Stage of business</label>
            <select
              id="business_stage"
              name="business_stage"
              onChange={(value) => getValue(value)}
            >
              <option value="select options">Select Options</option>
              <option value="Start-up">Start-up</option>
              <option value="Scale-up">Scale-up</option>
            </select>
          </div>
          <div>
            <label>Age of establishment (years)</label>
            <label>(Enter 0 if it is yet to start-up)</label>
            <input
              type="number"
              min="0"
              max="100"
              value={age_of_establishment}
              onChange={(e) => establishmentValue(e)}
            />
          </div>
          <div>
            <label>Primary Products/Services offerred</label>
            <textarea onChange={(e) => setPrimaryProduct(e.target.value)}></textarea>
          </div>
          <div>
            <label>Offered to</label>
            <select
              id="offerred_to"
              name="offerred_to"
              onChange={(value) => offeredTo(value)}
            >
              <option value="select options">Select Options</option>
              <option value="End customers">End customers</option>
              <option value="Wholesalers">Wholesalers</option>
              <option value="Distributors">Distributors</option>
              <option value="Retailers">Retailers</option>
            </select>
          </div>
          <div>
            <label>Secondary Products/Services offerred</label>
            <textarea></textarea>
          </div>
          <div>
            <label>
              Processed products(Products you produce from the raw materials)
            </label>
            <textarea></textarea>
          </div>
          <div>
            <label>Years of relevant experience in this field.</label>
            <input type="number" />
          </div>
          <div>
            <label>Skill training</label>
            <select id="skill_training" name="skill_training">
              <option value="No formal skill training">
                No formal skill training
              </option>
              <option value="Has formal skill training and certificate.">
                Has formal skill training and certificate.
              </option>
            </select>
          </div>
          <div>
            <label>Unique Selling Proposition</label>
            <select id="usp" name="usp">
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div>
            <label>Establishment type</label>
            <select id="establishment_type" name="establishment_type">
              <option value="Factory">Factory</option>
              <option value="Mill">Mill</option>
              <option value="Stall">Stall</option>
              <option value="Workshop">Workshop</option>
              <option value="Boutique">Boutique</option>
              <option value="Vehicle">Vehicle</option>
              <option value="Centre">Centre</option>
              <option value="Store">Store</option>
              <option value="Farm">Farm</option>
              <option value="Plant">Plant</option>
              <option value="Processing Unit">Processing Unit</option>
              <option value="Shop">Shop</option>
              <option value="Vending cart">Vending cart</option>
              <option value="Manufacturing unit">Manufacturing unit</option>
            </select>
          </div>
          <div>
            <label>Name of the area</label>
            <textarea></textarea>
          </div>
          <div>
            <label>Locality of business</label>
            <select id="business_area" name="business_area">
              <option value="Urban">Urban</option>
              <option value="Rural">Rural</option>
              <option value="Semi-urban">Semi-urban</option>
              <option value="Slum">Slum</option>
            </select>
          </div>
          <div>
            <label>Ownership of infrastructure</label>
            <select id="business_locality" name="business_locality">
              <option value="Rented">Rented</option>
              <option value="Leased">Leased</option>
              <option value="Self-owned">Self-owned</option>
            </select>
          </div>
          <div>
            <label>
              Establishment area (in square feet)(Enter 0 if the establishment
              area is irrevelant)
            </label>
            <input type="number" />
          </div>
          <div>
            <label>Reason for selecting this location</label>
            <input />
          </div>
          <div>
            <label>Market research</label>
            <select id="market_research" name="market_research">
              <option value="Not conducted">Not conducted</option>
              <option value="Market research has been conducted.">
                Market research has been conducted.
              </option>
            </select>
          </div>
          <div>
            <label>Primary market</label>
            <select id="primary_market" name="primary_market">
              <option value="Local">Local</option>
              <option value="Regional">Regional</option>
              <option value="National">National</option>
              <option value="International">International</option>
            </select>
          </div>
          <div>
            <label>Customers</label>
            <textarea></textarea>
          </div>
          <div>
            <label>Seasons of high sales</label>
            <select id="seasonality">
              <option value="Consistent sales across all seasons">
                Consistent sales across all seasons
              </option>
              <option value="Higher sales in festive seasons.">
                Higher sales in festive seasons.
              </option>
              <option value="High sales in cropping/cultivation season">
                High sales in cropping/cultivation season
              </option>
              <option value="High sales in peak seasons, etc.">
                High sales in peak seasons, etc.
              </option>
            </select>
          </div>
          <div>
            <label>Competition</label>
            <select id="competiton" name="competiton">
              <option value="No similar goods/service provider in this locality.">
                No similar goods/service provider in this locality.
              </option>
              <option value="Only a few similar goods/services providers in this locality">
                Only a few similar goods/services providers in this locality
              </option>
              <option value="Many similar goods/service providers in this locality">
                Many similar goods/service providers in this locality
              </option>
            </select>
          </div>
          <div>
            <label>List of Suppliers</label>
            <textarea></textarea>
          </div>
          <div>
            <label>Marketing avenues</label>
            <input />
          </div>
          <div>
            <label>Avenues of scaling up in future</label>
            <input />
          </div>
        </form>
      </div>
      <div style={{ border: "1px solid black" }}>
        {business_stage != "" ? (
          <div>
            <p>
              {name} is looking to {business_stage} their business of{" "}
              {businessIdea}
            </p>
          </div>
        ) : null}
        {age_of_establishment != 0 ? (
          <div>
            <p>
              This enterprise has been operational since {age_of_establishment}{" "}
              years and has been serving its customers since then.
            </p>
          </div>
        ) : null}
        {primary_product_service_offered != "" ?<div><p>This establishment offers product/services like - {primary_product_service_offered} to {offered_to}</p></div> : null}
      </div>
    </div>
  );
}

export default Interface;
