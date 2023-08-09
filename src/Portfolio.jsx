import Icon from "./Icon";
import { Slide, Zoom } from "react-awesome-reveal";
const Portfolio = () => {
  return (
    <div id="Portfolio">
      <Zoom>
        <div className="mx-auto text-center mb-10 mt-[20rem] snine:mt-[10rem]">
          <div className="text-white text-[4.5rem] mb-10 opacity-25">
            Portfolio
          </div>
          <div className="text-white mt-16 mb-[8rem] text-4xl">
            Personal Projects
          </div>
        </div>
      </Zoom>
      <Slide direction="left" duration={1500}>
        <div className="flex justify-center ">
          <div className="max-w-5xl w-full px-4 flex gap-9 snine:block">
            <div className="w-[90vw] h-[40vh] snine:w-[80vw] snine:h-[50vh] sfse:w-[60vw] snine:mx-auto snine:flex snine:justify-center snine:items-center">
              <video
                autoPlay
                loop
                muted
                width="100"
                className="w-[90vw] h-[40vh] snine:w-[90vw] snine:h-[70vh]"
              >
                <source src="assets/NoteTaker.webm" type="video/webm" />
              </video>
            </div>

            <div>
              <div className="text-white text-5xl snine:mx-auto snine:text-center snine:mt-16">
                NoteTaker
              </div>
              <div className="text-white text-xl mt-10 text-justify snine:mx-auto snine:text-center">
                Introducing Simple Note Taker: a user-friendly app for creating,
                managing, and organizing notes. Create, delete, search, and
                filter through your collection with ease. Streamline your
                note-taking experience and stay organized.
              </div>
              <div className="flex justify-around mt-10 text-xl snine:block snine:mx-auto snine:text-center">
                <div>
                  <a
                    href="https://surya-sivaprakash.github.io/Todo-application/"
                    target="_blank"
                    className=""
                  >
                    <div className="flex justify-center items-center">
                      <div className="text-white mr-4">View Project</div>
                      <Icon
                        iconName="externallink"
                        width={"2.8vw"}
                        height={"2.8vh"}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      {/* Second */}
      <Slide direction="right" duration={1500}>
        <div className="flex justify-center mt-[10rem] ">
          <div className="max-w-5xl w-full px-4 flex snine:flex-col-reverse gap-9">
            <div>
              <div className="text-white text-5xl snine:mx-auto snine:text-center snine:mt-16">
                Calculator
              </div>
              <div className="text-white text-xl mt-10 text-justify snine:mx-auto snine:text-center">
                Calculator App The Calculator App is a web-based application
                built with HTML, CSS, and JavaScript. It offers a user-friendly
                interface for performing basic arithmetic calculations. Users
                can input numbers, choose operators, and instantly obtain
                results.
              </div>
              <div className="flex justify-around mt-10 text-xl snine:block snine:mx-auto snine:text-center">
                <div>
                  <a
                    href="https://surya-sivaprakash.github.io/Calculator-App/"
                    target="_blank"
                    className=""
                  >
                    <div className="flex justify-center items-center">
                      <div className="text-white mr-4">View Project</div>
                      <Icon
                        iconName="externallink"
                        width={"2.8vw"}
                        height={"2.8vh"}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[90vw] h-[40vh] snine:w-[90vw] snine:h-[50vh] snine:flex snine:justify-center snine:items-center ">
              <video
                autoPlay
                loop
                muted
                width="100"
                className="w-[70vw] h-[50vh] snine:w-[90vw] snine:h-[50vh]"
              >
                <source src="assets/calculator.webm" type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </Slide>
      {/* Third */}
      <Slide direction="left" duration={1500}>
        <div className="flex justify-center mt-[14rem]">
          <div className="max-w-5xl w-full px-4 flex gap-9 snine:block">
            <div className="w-[90vw] h-[40vh] snine:w-[80vw] snine:h-[50vh] sfse:w-[60vw] snine:mx-auto snine:flex snine:justify-center snine:items-center">
              <video
                autoPlay
                loop
                muted
                width="100"
                className="w-[90vw] h-[40vh] snine:w-[90vw] snine:h-[70vh]"
              >
                <source src="assets/currencyConverter.webm" type="video/webm" />
              </video>
            </div>
            <div>
              <div className="text-white text-5xl snine:mx-auto snine:text-center snine:mt-16">
                Currency Converter
              </div>
              <div className="text-white text-xl mt-10 text-justify snine:mx-auto snine:text-center">
                A web-based application providing real-time currency rates for
                global currencies. Built with HTML, CSS, and JavaScript, it
                enables instant conversion between different currencies.
              </div>
              <div className="flex justify-around mt-10 text-xl snine:block snine:mx-auto snine:text-center">
                <div>
                  <a
                    href="https://surya-sivaprakash.github.io/Currency-Converter-webapp/"
                    target="_blank"
                    className=""
                  >
                    <div className="flex justify-center items-center">
                      <div className="text-white mr-4">View Project</div>
                      <Icon
                        iconName="externallink"
                        width={"2.8vw"}
                        height={"2.8vh"}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <Zoom duration={2000}>
        <div className="mx-auto text-center mt-60">
          <div className="text-white text-4xl">Professional Projects</div>
        </div>

        <div>
          <div className="flex justify-center mt-[10rem] ">
            <div className="max-w-5xl w-full px-4 flex snine:flex-col-reverse gap-9">
              <div>
                <div className="text-white text-5xl snine:mx-auto snine:text-center snine:mt-16">
                  Client: Vi-fi Capital
                </div>
                <ul className="text-white text-xl tracking-wide mt-10 snine:mx-auto snine:text-center">
                  <li className="mt-6">
                    I designed and developed Vi-fi Capital's official website
                    featuring a dedicated blog section and an intuitive admin
                    dashboard.
                  </li>
                  <li className="mt-6">
                    The website showcases company information and
                    products/services, while the admin dashboard enables easy
                    blog management, allowing administrators to create, edit,
                    and publish posts effortlessly.
                  </li>
                  <li className="mt-6">
                    Hosted on Firebase, the website ensures reliable
                    performance. This project demonstrates my expertise in web
                    development, delivering a visually appealing and
                    user-friendly website with dynamic content management
                    capabilities.
                  </li>
                </ul>
                <div className="flex justify-around mt-10 text-xl snine:block snine:mx-auto snine:text-center">
                  <div>
                    <a
                      href="https://vificapital.co.in/"
                      target="_blank"
                      className=""
                    >
                      <div className="flex justify-center items-center">
                        <div className="text-white mr-4">View Project</div>
                        <Icon
                          iconName="externallink"
                          width={"2.8vw"}
                          height={"2.8vh"}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-[150rem] mt-[6rem] h-[50vh] snine:w-[80vw] snine:h-[50vh] sfse:w-[60vw] snine:mx-auto snine:flex snine:justify-center snine:items-center">
                <video
                  autoPlay
                  loop
                  muted
                  width="100"
                  className="w-[90vw] h-[40vh] snine:w-[90vw] snine:h-[70vh]"
                >
                  <source src="assets/vifi.webm" type="video/webm" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Portfolio;
