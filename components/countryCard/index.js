import Image from "next/image";
import React from "react";

function Index({ country }) {
  return (
    <div className="col-md-6 ">
      <div className="country_card">
        <Image
          src={country.flag}
          width={"150vw"}
          height={"100vw"}
          alt="Country card"
        />
        <aside>
          <h6>{country.name}</h6>
          <p>{country.region}</p>
        </aside>
      </div>
    </div>
  );
}

export default Index;
