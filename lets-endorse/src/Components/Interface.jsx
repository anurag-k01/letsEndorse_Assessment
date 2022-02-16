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
  const [skill_training, setSkillTraining] = useState(
    "No formal skill training"
  );
  const [usp, setUsp] = useState("");
  const [establishment_type, setEstablishmentType] = useState("");
  const [business_area, setBusinessArea] = useState("");
  const [business_locality, setBusinessLocality] =
    useState("$business_locality");
  const [infra_ownership, setInfraOwnership] = useState("$infra_ownership");
  const [establishment_area, setEstablishmentArea] = useState("");
  const [reason_for_location, setReasonForLocation] = useState("");
  const [market_research, setMarketResearch] = useState("Not conducted");
  const [primary_market, setPrimaryMarket] = useState("");
  const [customers, setCustomers] = useState("");
  const [seasonality, setSeasonality] = useState("");
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
  function selectSkill(e) {
    setSkillTraining(e.target.value);
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
            <textarea
              onChange={(e) => setPrimaryProduct(e.target.value)}
            ></textarea>
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
            <textarea
              onChange={(e) => setSecondaryProduct(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label>
              Processed products(Products you produce from the raw materials)
            </label>
            <textarea
              onChange={(e) => setProcessedProducts(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label>Years of relevant experience in this field.</label>
            <input
              type="number"
              value={relevant_experience}
              onChange={(e) => setRelatedExperience(e.target.value)}
            />
          </div>
          <div>
            <label>Skill training</label>
            <select
              id="skill_training"
              name="skill_training"
              onChange={(value) => selectSkill(value)}
            >
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
            <select
              id="establishment_type"
              name="establishment_type"
              onChange={(value) => setEstablishmentType(value.target.value)}
            >
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
            <textarea
              value={business_area}
              onChange={(e) => setBusinessArea(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label>Locality of business</label>
            <select
              id="business_area"
              name="business_area"
              onChange={(value) => setBusinessLocality(value.target.value)}
            >
              <option value="Urban">Urban</option>
              <option value="Rural">Rural</option>
              <option value="Semi-urban">Semi-urban</option>
              <option value="Slum">Slum</option>
            </select>
          </div>
          <div>
            <label>Ownership of infrastructure</label>
            <select
              id="business_locality"
              name="business_locality"
              onChange={(value) => setInfraOwnership(value.target.value)}
            >
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
            <input
              type="number"
              value={establishment_area}
              onChange={(e) => setEstablishmentArea(e.target.value)}
            />
          </div>
          <div>
            <label>Reason for selecting this location</label>
            <input />
          </div>
          <div>
            <label>Market research</label>
            <select
              id="market_research"
              name="market_research"
              onChange={(value) => setMarketResearch(value.target.value)}
            >
              <option value="Not conducted">Not conducted</option>
              <option value="Market research has been conducted.">
                Market research has been conducted.
              </option>
            </select>
          </div>
          <div>
            <label>Primary market</label>
            <select
              id="primary_market"
              name="primary_market"
              onChange={(value) => setPrimaryMarket(value.target.value)}
            >
              <option value="Local">Local</option>
              <option value="Regional">Regional</option>
              <option value="National">National</option>
              <option value="International">International</option>
            </select>
          </div>
          <div>
            <label>Customers</label>
            <textarea onChange={(e) => setCustomers(e.target.value)}></textarea>
          </div>
          <div>
            <label>Seasons of high sales</label>
            <select
              id="seasonality"
              onChange={(value) => setSeasonality(value.target.value)}
            >
         
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
            <select
              id="competiton"
              name="competiton"
              onChange={(value) => setCompetiton(value.target.value)}
            >
              
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
      <div style={{ border: "1px solid black", width: "50%" }}>
        <div>
          {business_stage != "" ? <h1>Introduction</h1> : null}
          <p>
            {business_stage != "" ? (
              <span>
                {name} is looking to {business_stage} their business of{" "}
                {businessIdea}.
              </span>
            ) : null}
            {age_of_establishment != 0 ? (
              <span>
                This enterprise has been operational since{" "}
                {age_of_establishment} years and has been serving its customers
                since then.
              </span>
            ) : null}
            {primary_product_service_offered != "" ? (
              <span>
                This establishment offers product/services like -{" "}
                {primary_product_service_offered} to {offered_to}.
              </span>
            ) : null}
            {secondary_product_service_offered != "" ? (
              <span>
                In addition, the enterprise shall also be involved in{" "}
                {secondary_product_service_offered}.
              </span>
            ) : null}

            {processed_products != "" ? (
              <span>
                Other products of the enterprise shall include-{" "}
                {processed_products}.
              </span>
            ) : null}

            {relevant_experience != 0 ? (
              <span>
                {name} has relevant experience of {relevant_experience} years in
                this field.
              </span>
            ) : null}

            {skill_training != "No formal skill training" ? (
              <span>
                The entrepreneur {skill_training} in this field of work.
              </span>
            ) : null}
          </p>
        </div>
        <div>
          {establishment_type != "" ? <h1>Location</h1> : null}
          <p>
            {establishment_type != "" ? (
              <span>
                The {establishment_type} is located in {business_locality} area
                of {city} in a {infra_ownership} property.{" "}
              </span>
            ) : null}

            {establishment_area != 0 ? (
              <span>
                {" "}
                The size of the establishment is {
                  establishment_area
                } sq.ft.{" "}
              </span>
            ) : null}
          </p>
        </div>
        <div>
          <p>
            {market_research != "Not conducted" ? (
              <span>
                {" "}
                {market_research} and the range of products and target market
                has been identified after that.
              </span>
            ) : null}
            {primary_market != "" ? (
              <span>
                The enterprise shall focus on offering its products/services to{" "}
                {primary_market}.{" "}
              </span>
            ) : null}
            {customers != "" ? (
              <span>Our customers shall include- {customers}.</span>
            ) : null}
            {seasonality != "" ? (
              <span>
                The nature of the business is such that we expect {seasonality}.
              </span>
            ) : null}
            {competiton != "" ? (
              <span>Regarding competition, there are {competiton}. </span>
            ) : null}
            {suppliers != "" ? (
              <span>
                The enterprise shall procure goods/raw materials from{" "}
                {suppliers}.{" "}
              </span>
            ) : null}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Interface;
