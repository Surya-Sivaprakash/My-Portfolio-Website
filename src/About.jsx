import Icon from "./Icon";
import {
  Bounce,
  Fade,
  Flip,
  Hinge,
  JackInTheBox,
  Roll,
  Rotate,
  Slide,
  Zoom,
} from "react-awesome-reveal";
const About = () => {
  return (
    <Zoom duration={2000}>
      <div id="About">
        <div className="mt-[28rem] ss:mt-[18rem] flex justify-center mb-[8rem] text-white text-[4.5rem] opacity-25 snine:mb-14 snine:mx-auto snine:text-center">
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
                Hi, I'm Surya, a passionate front-end developer with experience
                in creating immersive and responsive web applications. I thrive
                on turning design concepts into beautiful and user-friendly
                interfaces that engage users and enhance their browsing
                experience.
              </div>
              <div className="text-white text-center text-3xl mt-20 opacity-25 snine:mx-auto snine:text-center">
                Get In Touch
              </div>

              <div>
                <div className="flex justify-center items-center">
                  <div className="flex justify-center items-center max-w-sm mt-10 gap-[4vw] sfsf:gap-[3vw] szfs:gap-[2vw]">
                    <div>
                      <div className="flex justify-center items-center w-[3.25rem] h-[3.25rem] sfsf:w-[5.125rem] sfsf:h-[5.125rem] sff:w-[3.7rem] sff:h-[3.7rem]">
                        <a
                          href="https://github.com/Surya-Sivaprakash"
                          target="_blank"
                        >
                          <Icon
                            iconName="github"
                            width={"6vw"}
                            height={"6vh"}
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-center items-center w-[3.25rem] h-[3.25rem] sfsf:w-[5.125rem] sfsf:h-[5.125rem] sff:w-[3.7rem] sff:h-[3.7rem]">
                        <a
                          href="https://www.linkedin.com/in/suryasivaprakash/"
                          target="_blank"
                        >
                          <Icon
                            iconName="linkedin"
                            width={"6vw"}
                            height={"6vh"}
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-center items-center w-[3.25rem] h-[3.25rem] sfsf:w-[5.125rem] sfsf:h-[5.125rem] sff:w-[3.7rem] sff:h-[3.7rem]">
                        <a href={`mailto:${"suryasivaprakash01@gmail.com"}`}>
                          <Icon
                            iconName="email"
                            width={"5.8vw"}
                            height={"5.8vh"}
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-center items-center w-[3.25rem] h-[3.25rem] sfsf:w-[5.125rem] sfsf:h-[5.125rem] sff:w-[3.7rem] sff:h-[3.7rem]">
                        <a href="https://twitter.com/SuryaS_01" target="_blank">
                          <Icon
                            iconName="twitter"
                            width={"6.5vw"}
                            height={"6.5vh"}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="ml-6 mt-10 text-xl snine:block snine:mx-auto snine:text-center">
              <ul className="text-white leading-10 list-disc snine:list-none">
                <li>Freelance: Available</li>
                <li>Languages: English</li>
                <li>Discord: Surya#1643</li>
                <li>Phone: +91 8825429691</li>
                <li>Github: Surya-Sivaprakash</li>
                <li>Email: suryasivaprakash01@gmail.com</li>
              </ul>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default About;
