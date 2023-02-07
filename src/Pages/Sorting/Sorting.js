import React from "react";
import './sorting.css';
function Sorting() {
  return (
    <div className="d-flex justify-content-between">
      <p className="text-muted">Sowing 1-12 of 52 results</p>
      <select value="sorting" className="me-4">
        <option name="sorting" id="">
          Default Sorting2
        </option>
        <option name="sorting" id="">
          Default Sorting3
        </option>
        <option name="sorting" id="">
          Default Sorting4
        </option>
        <option name="sorting" id="">
          Default Sorting5
        </option>
        <option name="sorting" id="">
          Default Sorting
        </option>
        <option name="sorting" id="">
          Default Sorting6
        </option>
      </select>
    </div>
  );
}

export default Sorting;
