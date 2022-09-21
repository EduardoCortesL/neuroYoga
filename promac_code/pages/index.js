import react, { useState } from "react";

import More from "../components/more";
import OverView from "../components/overview";
import Chat from "../components/chat";
import AboutUs from "../components/about_us";

export async function getStaticProps() {
  const res = await fetch(
    "https://mighty-anchorage-30412.herokuapp.com/api/bit-overflows"
  );
  //const res = await fetch('http://localhost:1337/api/verdeblocks/')
  const overViewData = await res.json();

  //const res2 = await fetch('http://localhost:1337/api/verdeblocks/')
  //const res2 = await fetch('https://mighty-anchorage-30412.herokuapp.com/api/bit-overflow-mores/')
  //const moreData = await res2.json()

  return { props: { overViewData } };
}

const Home = ({ overViewData, moreData }) => {
  const [visible, setVisible] = useState();

  const clickHandler = () => {
    setVisible(!visible);
  };

  return (
    <div className="relative">
      {visible && (
        <div
          className={
            "fixed right-3 bottom-4 h-auto w-80 sm:w-1/3 z-40 bg-white  items-center place-content-center animate-fadeIn"
          }
        >
          <div className="p-10">
            <Chat />
          </div>
        </div>
      )}
      {visible ? (
        <div
          onClick={clickHandler}
          className="fixed bottom-5 right-5 z-50 hover:text-white font-extrabold hover:bg-black rounded-full p-4 opacity-75 cursor-pointer hover:opacity-100 bg-yellow-300 text-black"
        >
          X
        </div>
      ) : (
        <div
          onClick={clickHandler}
          className="fixed bottom-5 right-5 z-30 text-white font-extrabold bg-black rounded-full p-4 opacity-75 cursor-pointer hover:opacity-100 hover:bg-yellow-300 hover:text-black"
        >
          Contact Us
        </div>
      )}

      <header className="relative flex items-center justify-center h-screen sm:mb-12 overflow-hidden">
        <div className="absolute sm:left-10 top-10 z-30 text-4xl font-bold">
          Promac Engineering
        </div>
        <div className="grid grid-cols-1">
          <div className="relative z-30 text-6xl text-white sm:text-45l font-extrabold text-center">
            Your one stop shop
          </div>
          <div className="relative z-30 text-6xl text-white sm:text-6l font-extrabold text-center">
            For all your engineering consulting needs.
          </div>
        </div>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/bito-b4105.appspot.com/o/37427_construction_on_bridge_on_site_in_field_aerial_By_The_Stock_Studio_Artlist_HD.mp4?alt=media&token=90d1af61-c538-4cde-a084-2275181e8dde"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <link rel="icon" href="/favicon.ico" />
      </header>

      <main className="flex flex-col items-center justify-center sm:px-20 text-center">
        <div className="relative mt-6 sm:p-16 text-xl sm:text-6xl text-left">
          <div>
            For all your engineering needs <b>Promac</b> is here
          </div>
        </div>
        <div className="w-full my-14 pb-8 sm:p-8 sm:text-lg font-bold bg-gradient-to-r from-yellow-500 to-orange-500">
          <div className="font-bold mt-2 text-xl sm:text-4xl text-white p-4">
            Our Focus Areas
          </div>
          <div className="flex place-content-center cursor-pointer sm:font-extrabold ">
            <div className="rounded-full py-2 sm:py-2 px-3 sm:px-5 m-2 bg-white">
              <div className="text-black  hover:bg-gradient-to-br hover:to-nft-sky hover:from-nft-aqua hover:text-transparent hover:bg-clip-text">
                APPs
              </div>
            </div>
            <div className="rounded-full py-2 sm:py-2 px-3 sm:px-5 m-2 bg-white">
              <div className="text-black  hover:bg-gradient-to-br hover:to-nft-sky hover:from-nft-aqua hover:text-transparent hover:bg-clip-text">
                Civil Engineering
              </div>
            </div>
          </div>
          <div className="flex place-content-center sm:font-extrabold">
            <div className="rounded-full py-2 sm:py-2 px-3 sm:px-5 m-2 bg-white">
              <div className="text-black">
                Project Managment
              </div>
            </div>
            <div className="rounded-full py-2 sm:py-2 px-3 sm:px-5 m-2 bg-white">
              <div className="text-black">
                Transportation Industry
              </div>
            </div>
            <div className="rounded-full py-2 sm:py-2 px-3 sm:px-5 m-2 bg-white">
              <div className="text-black">
                Bi-national disputes
              </div>
            </div>
            <div className="rounded-full py-2 sm:py-2 px-3 sm:px-5 m-2 bg-white">
              <div className="text-black">
                Infrastructure Projects
              </div>
            </div>
          </div>
          <div className="flex place-content-center cursor-pointer sm:font-extrabold">
            <div className="rounded-full py-2 sm:py-2 px-3 sm:px-5 m-2 bg-white">
              <div className="text-black">
                LATAM
              </div>
            </div>
            <div className="rounded-full py-2 sm:py-2 px-3 sm:px-5 m-2 bg-white">
              <div className="text-black">
                Public Private Projects
              </div>
            </div>
            <div className="rounded-full py-2 sm:py-2 px-3 sm:px-5 m-2 bg-white">
              <div className="text-black">
                APWA
              </div>
            </div>
          </div>
        </div>

        <div className="flex relative mt-6 text-4xl sm:text-8xl">
          <div className="text-black font-extrabold mt-2">Press</div>
        </div>
        <OverView data={overViewData.data} />
        <div className="flex relative mt-6 text-4xl sm:text-8xl">
          <div className="text-black font-extrabold mt-2">About Us</div>
        </div>
        <AboutUs/>

      </main>
      <br/>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <div>
          Powered by Bito
        </div>
      </footer>
    </div>
  );
};

export default Home;
