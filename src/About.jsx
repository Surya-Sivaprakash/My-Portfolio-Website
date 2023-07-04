const About = () => {
  return (
    <div id="About">
      <div className="mt-[35rem] flex justify-center mb-[8rem] text-white text-[4.5rem] opacity-25 snine:mb-14 snine:mx-auto snine:text-center">
        About
      </div>
      <div className=" flex justify-center ">
        <div className="max-w-5xl w-full px-4 flex gap-9 snine:block">
          <div className="w-[90vw] h-[40vh] snine:w-[90vw] snine:h-[50vh] snine:flex snine:justify-center snine:items-center ">
            <img
              src="assets/profilePicture.png"
              alt="profile image"
              className=" snine:w-[22rem] snine:h-[25rem] rounded-3xl"
            />
          </div>
          <div>
            <div className="text-white text-xl mt-1 snine:mx-auto snine:text-center">
              Hi, I'm Surya, a passionate front-end developer with experience in
              creating immersive and responsive web applications. I thrive on
              turning design concepts into beautiful and user-friendly
              interfaces that engage users and enhance their browsing
              experience.
            </div>
            <div className="flex justify-around mt-10 text-xl snine:block snine:mx-auto snine:text-center">
              <ul className="text-white leading-10">
                <li>Age: 23</li>
                <li>Nationality: Indian</li>
                <li>Freelance: Available</li>
                <li>Languages: English</li>
              </ul>
              <ul className="text-white leading-10 ">
                <li>Github: Surya-Sivaprakash</li>
                <li>Discord: Surya#1643</li>
                <li>Email: suryasivaprakash01@gmail.com</li>
                <li>Phone: +91 8825429691</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
