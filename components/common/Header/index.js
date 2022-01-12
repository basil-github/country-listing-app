import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRegion } from "../../../features/countries/countriesSlice";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const [menustate, setToggle] = useState(false);
  const [currentRegion, setCurrentRegion] = useState(null);
  const dispatch = useDispatch();
  const stateSlots = useSelector((state) => state.countries);
  const allRegions = [...new Set(stateSlots?.list?.map((item) => item.region))];
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 400px)",
  });
  useEffect(() => {
    dispatch(setRegion(currentRegion));
  }, [currentRegion]);
  useEffect(() => {
    if (isDesktopOrLaptop) setToggle(true);
  }, [isDesktopOrLaptop]);
  return (
    <>
      {router.asPath == "/" && (
        <header className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href={""}>
              <a className="navbar-brand">Countries</a>
            </Link>
            <div className="pos-f-t" onClick={() => setToggle(!menustate)}>
              <div className="mobile_menu">
                <button className="navbar-toggler">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
            {menustate && (
              <div className="allRegionToggle">
                <aside>
                  {allRegions[0] && (
                    <button
                      className={currentRegion == null ? "active" : "null"}
                      onClick={() => setCurrentRegion(null)}
                    >
                      All
                    </button>
                  )}
                  {allRegions?.map((region, i) => (
                    <button
                      key={i}
                      className={currentRegion == region ? "active" : "null"}
                      onClick={() => setCurrentRegion(region)}
                    >
                      {region}
                    </button>
                  ))}
                </aside>
              </div>
            )}
          </nav>
        </header>
      )}
    </>
  );
}

export default Header;
