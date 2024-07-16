function About() {
  return (
    <div className=" md:h-[75vh] flex flex-col md:flex-row  items-center justify-center px-4  bg-zinc-700">
      <div className="w-full lg:w-3/6 md:mb-0 mb-12 items-center flex flex-col lg:items-start justify-center  ">
        <h1 className="text-4xl lg:text-6xl font semibold text-center lg:text-left text-yellow-200">
          About Us
        </h1>
        <div className=" bg-zinc-700">
          <p className="my-2 font-semibold">
            I am Vanita . I am a Software developer. I believe in Hard Work and
            dedication toword my work as the key to success. i am contantly
            learning . My Goal set Hard Work and problem Solving
          </p>
          <h1 className="text-green-500 text-2xl font-semibold">Education </h1>

          <ul>
            <li>
              <span className="text-yellow-300">B.tech (2020-2023)</span> Ch.
              Ranbir singh state institue of engineering and Technology
            </li>
            <li>
              <span className="text-yellow-300">Diploma (2017-2020)</span> Govt.
              Polytechnic Collage
            </li>
            <li>
              <span className="text-yellow-300">12th (2017)</span> The Heights
              Sr.Sec. School
            </li>
            <li>
              <span className="text-yellow-300">10th (2015)</span> Gyan Jyoti
              High School
            </li>
          </ul>
          <h1 className="text-green-500  text-2xl font-semibold">Experience</h1>
          <ul>
            <li>
              <span className="text-yellow-300">TATA CONSTANCY SERVICE</span>
              Yep candidate
            </li>
            <li>
              <span className="text-yellow-300">CREED ENGINERS PVT. LTD. </span>
              Software Developer
            </li>
          </ul>
        </div>
        <div className="w-full h-auto lg:h-[100%] flex items-center justify-center lg:3/6 ">
          <img src="./public/Images/vanita.png" alt="img" />
        </div>
      </div>
    </div>
  );
}

export default About;
