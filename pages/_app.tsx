import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
// import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 sm:px-20 md:px-32 my-14">
      <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl">

        <Sidebar></Sidebar>
      </div>
      <div className="col-span-12 bg-white lg:col-span-9 rounded-2xl">
        <Component {...pageProps} />
      </div>


    </div>
  );
}

export default MyApp;