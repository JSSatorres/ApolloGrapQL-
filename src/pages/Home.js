import React, { useEffect, useState } from "react";
import Input from "../components/input";
import Navbar from "../components/navbar";

// import { isCurrentUser } from "../firebae/firebase";

const Home = () => {
  const [keyword, setKeyword] = useState();
  /* const { user, loading } = useAuth(); */

  // console.log(user);
  // if (loading) return <h1> loading </h1>;

  function keywordSeacrh(newKeyword) {
    setKeyword(newKeyword);
  }

  return (
    <section className="bg-secondary">
      <Navbar />

      <Input keywordSeacrh={keywordSeacrh} />
      <div className="mx-5">{/*   <GiftList keyword={keyword} /> */}</div>
    </section>
  );
};

export default Home;
