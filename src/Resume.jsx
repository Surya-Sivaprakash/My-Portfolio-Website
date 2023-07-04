import Icon from "./Icon";
const Resume = () => {
  return (
    <div className="mx-auto text-center">
      <div className="text-white text-[4.5rem] mx-auto text-center mt-40 opacity-25">
        Resume
      </div>
      <div className="flex justify-center mt-20">
        <img
          src="src/assets/ResumePreview.png"
          alt="Resume Preview"
          className="w-[22rem] h-[30rem] rounded-2xl"
        />
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="flex justify-around mt-10 text-xl snine:block snine:mx-auto snine:text-center">
          <div>
            <a href="src/assets/Resume.pdf" download="Resume">
              <div className="flex justify-center items-center">
                <p className="text-white mr-4">Download pdf</p>
                <Icon iconName="download" width={"2.8vw"} height={"2.8vh"} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
