import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchEngine.css";
export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <form id="search-form" className="mb-3">
        <div className="row">
          <div class="col-sm-4">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              id="city-input"
              autocomplete="off"
            />
          </div>
          <div class="col-2">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
              id="submit-button"
            />
          </div>
        </div>
      </form>
    </div>
  );
}