import Image from "next/image";


export default function Home() {
  return (
    <>
      <div>
        <div className="page min-h-[100%] py-30   px-20 space-y-10  w-full items-center justify-center ">
          <h1 className="text-6xl  items-center justify-center font-bold text-gray-300 flex ">Get Me A Chai <span className="flex items-center justify-center ">
            <img className="h-25 absolute bottom-78 right-87 " src="./teaLogo.gif" alt="chay.png" />
          </span> </h1>
          <p className="text-white items-center justify-center px-45  text-lg  font-semibold   ">A Crowdfunding platform for creaters. Get funded by your fans and followers. Start Now!</p>
          <div className="btns flex text-lg space-x-4 items-center justify-center 
        p-4 m-3 py-2  my-6  ">
            <button className="text-white bg-green-600 rounded-xl  bg-linear-to-r from-cyan-500 to-blue-500  hover:bg-linear-65 hover:from-purple-500 hover:to-pink-500 px-2 py-2 ">Start Here</button>
            <button className="text-white bg-linear-to-r from-cyan-500 to-blue-500  hover:bg-linear-65 hover:from-purple-500 hover:to-pink-500 rounded-xl  px-2 py-2  ">Read More</button>
          </div>
        </div>

        <hr className=" bg-white  h-1.5 opacity-10     w-full  " />

        <div className="page1   w-full  px-10  text-white  items-center justify-center   ">
          <h1 className="text-2xl font-bold mt-6 mx-50   px-50   items-center justify-center ">Your fans can buy you a chai</h1>

          <div className="elements my-2 h-[50vh] flex justify-between space-x-0 px-16  text-white items-center ">
            <div className="box">
              <img className="h-26 rounded-full  " src="./man.gif" alt="fund yourself" />
              <h1 className="font-bold mt-2 ">Fund Yourself </h1>
              <p className="my-2 ">your fans are available to help you</p>
            </div>
            <div className="box">
              <img className="h-26 rounded-full  " src="./dollar.gif" alt="fund yourself" />
              <h1 className="font-bold mt-2 ">Fund Yourself </h1>
              <p className="my-2 ">your fans are available to help you</p>
            </div>
            <div className="box">
              <img className="h-26 rounded-full  " src="./group.gif" alt="fund yourself" />
              <h1 className="font-bold mt-2 ">Fans wants to help</h1>
              <p className="my-2 ">your fans are available to help you</p>
            </div>
          </div>


        </div>
        <hr className=" bg-white  h-1.5 opacity-10     w-full  " />

      </div>
      <div className="learn-page text-white space-y-10 h-[70vh] w-full px-10 items-center justify-center   ">
        <h1 className="font-bold text-2xl px-110  items-center justify-center mt-4 mb-6 my-6  ">Learn More About Us </h1>
        <p className="text-gray-200 mx-10 px-2 my-10 ">At Get Me A Chai, we are dedicated to supporting developers, creators, and influencers by connecting them with their supporters. Our platform enables individuals to fund their projects and ideas, providing a space where creativity and innovation can thrive.</p>
        <p className="text-gray-200 mx-10 px-2 my-10 ">Our mission is to empower talented individuals by facilitating financial support, allowing them to focus on what they do best – creating. Whether you're a developer coding the next big app, a content creator making engaging videos, or an influencer sharing your passion, Get Me A Chai is here to help you achieve your goals.</p>
        <p className="text-gray-200 mx-10 px-2 my-10 ">We believe in the power of community and the impact of collective support. By providing a platform for patrons to contribute, we aim to transform dreams into reality and foster a culture of creativity and innovation.</p>
      </div>

    </>
  );
}
