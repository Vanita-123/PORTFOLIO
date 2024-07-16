import data from "../DataAbout/Data";
function Skills() {
  return (
    <div>
      <div className="mt-12 px-4 ">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 ">
          <h1 className="text-3xl font-bold mb-4">My Skills</h1>
          <div className="min-h-screen flex items-center justify-center ">
            <div className="grid lg:grid-cols-3 grid-rows-3 gap-4 md:grid-cols-2 ">
              {data.map((text, id) => {
                return (
                  <div key={id}>
                    <div className="  bg-zinc-700 h-50 md:h-70 w-40  lg:h-30 w-65 p-1 rounded-md  hover:bg-yellow-800 cursor-pointer hover:-translate-y-1.5 ">
                      <h1 className=" text-yellow-200 text-2xl font-semibold m-2">
                        {text.skill}
                      </h1>
                      <img
                        className="p-4"
                        src={text.img}
                        alt="skill"
                        width="100px"
                        height="100"
                      />
                    </div>
                  </div>
                );
              })}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
