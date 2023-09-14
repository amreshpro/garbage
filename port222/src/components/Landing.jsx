import ReactTypingEffect from "react-typing-effect";
import socialLinks  from "../constant/socialLinks";

const Landing = () => {
  return (
    <div className="container flex sm:flex-col p-2 gap-4 justify-between mt-5 ">
      <div className="text-container w-3/4 sm:w-full">
        <h1 className="text-6xl sm:text-5xl xsm:text-4xl font-lilita bg-gradient-to-b from-yellow-500 to-orange-400 bg-clip-text text-transparent ">
          Amresh Maurya
        </h1>

        <ReactTypingEffect
          text={["Tech Enthusiast", "Web-Developer", "proud Indian"]}
          speed={200}
          eraseDelay={2000}
          typingDelay={2000}
          displayTextRenderer={(text, i) => {
            return (
              <h1 className="text-3xl   sm:text-2xl xsm:text-xl  font-mono  text-transparent bg-clip-text  bg-gradient-to-b from-cyan-500 to-blue-500 ">
              
                I'm a &nbsp;
                {text.split("").map((char, i) => {
                  return (
                    <span
                      key={`${i}`}
                      className="text-3xl sm:text-2xl xsm:text-xl font-mono leading-7  text-transparent bg-clip-text  bg-gradient-to-b from-pink-500 to-orange-400"
                    >
                      {char}
                    </span>
                  );
                })}
              </h1>
            );
          }}
        />

        <p className="leading-7 p-1 text-gray-400 font-mono text-xl tracking-wider">
          I code beautifully simple things.I enjoy creating things that live on
          internet and I love what I do.
        </p>


<div className="btn flex gap-8   justify-start items-center mt-5">
    <a href={socialLinks.resume} className="bg-gradient-to-b from-orange-400 to-yellow-400 px-3 py-1 font-bold font-poppins rounded-lg flex">Resume </a>
    <a href={socialLinks.github} className="bg-gradient-to-b from-orange-400 to-yellow-400 px-3 py-1 font-bold font-poppins rounded-lg">  Github </a>

 
</div>

      </div>

<div className="img-container w-2/4 rounded-full sm:items-center">
    <img src="/photo.jpeg" alt="photo"  className="w-72 object-fill rounded-full" />
</div>

    </div>
  );
};
export default Landing;
