import dataproject from "../DataProject/Dataproject";
import { Link } from "react-router-dom";
function Project() {
  return (
    <div>
      <div className="mt-12 px-4 ">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 ">
          <h1 className="text-3xl font-bold mb-4">My Project</h1>
          <div className="min-h-screen flex items-center justify-center ">
            <div className="grid lg:grid-cols-3 grid-rows-3 gap-4 md:grid-cols-2 ">
              {dataproject.map((text, id) => {
                return (
                  <div key={id}>
                    <div className="  bg-zinc-700 h-60 md:h-70 w-80  lg:h-80 w-95 p-1 rounded-md  hover:bg-yellow-800 cursor-pointer hover:-translate-y-1.5 ">
                      <h1 className=" text-yellow-200 text-1xl font-semibold ">
                        {text.h1}
                      </h1>
                      <p>{text.p}</p>
                      <button className=" text-white-100 justify-center align-middle text-center mt-4 p-1 text-xs  lg:text-xl   font-semibold bg-green-700   hover:bg-zinc-800 rounded-sm ">
                        <a href="https://github.com/Vanita-123">Source Code</a>
                      </button>
                    </div>
                  </div>
                );
              })}
              <div>
                <h1 className="text-yellow-100 text-2xl m-5">More Project</h1>
                <Link
                  to="https://github.com/Vanita-123"
                  className="bg-green-700 m-6  p-2  hover:bg-zinc-800 rounded-sm text-xl"
                >
                  Click Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
