import React from "react";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const page = () => {
  return (
    <>
      <section className="heading">
        <h1>shopping cart</h1>
        <p>
          <Link href="/">home</Link>{" "}
          <FontAwesomeIcon icon={faAngleDoubleRight} /> cart
        </p>
      </section>
    </>
  );
};

export default page;
