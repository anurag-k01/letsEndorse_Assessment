import React from "react";

function Interface() {
  return (
    <div>
      <form>
        <div>
          <label>Stage of business</label>
          <select id="business_stage" name="business_stage">
            <option value="Start-up">Start-up</option>
            <option value="Scale-up">Scale-up</option>
          </select>
        </div>
        <div>
          <label>Age of establishment (years)</label>
          <label>(Enter 0 if it is yet to start-up)</label>
          <input type="number" min="0" max="100" />
        </div>
        <div>
          <label>Primary Products/Services offerred</label>
          <textarea></textarea>
        </div>
        <div>
          <label>Offered to</label>
          <select id="offerred_to" name="offerred_to">
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
                  <option value="No similar goods/service provider in this locality.">No similar goods/service provider in this locality.</option>
                  <option value="Only a few similar goods/services providers in this locality">Only a few similar goods/services providers in this locality</option>
                  <option value="Many similar goods/service providers in this locality">Many similar goods/service providers in this locality</option>
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
  );
}

export default Interface;
