function About() {
  return (
    <div className="bg-[#191818] font-Pt">
      <div className="container w-full p-3 text-white md:text-center bg-grey-100">
        <div className="mb-12 text-4xl md:text-6xl font-900">About CTF</div>
        <div className="flex flex-col gap-5 mb-10 text-3xl md:text-5xl md:justify-center font-600">
          CTF Description
          <p className="text-2xl md:w-3/4 md:mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="mb-10 text-3xl text-center md:text-5xl">Time Line</div>

        <ul className="timeline">
          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <span class="hexa"></span>
                <span class="flag">Day 1</span>
                <span class="time-wrapper">
                  <span class="time">3rd October</span>
                </span>
              </div>
              <div class="desc">
                <div className="flex flex-col items-center">
                  <div className="mb-4">
                    Machine 1<br /> Difficulty : Easy
                  </div>
                  <div className="mb-2">
                    {" "}
                    Machine 2<br /> Difficulty : Easy
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="direction-l">
              <div class="flag-wrapper">
                <span class="hexa"></span>
                <span class="flag">Day 2</span>
                <span class="time-wrapper">
                  <span class="time">4th October</span>
                </span>
              </div>
              <div class="desc">
                <div className="flex flex-col items-center">
                  <div className="mb-4">
                    Machine 3<br /> Difficulty : Medium
                  </div>
                  <div className="mb-2">
                    {" "}
                    Machine 4<br /> Difficulty : Medium
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <span class="hexa"></span>
                <span class="flag">Day 3</span>
                <span class="time-wrapper">
                  <span class="time">5th October</span>
                </span>
              </div>
              <div class="desc">
                <div className="flex flex-col items-center">
                  <div className="mb-2">
                    Machine 5 <br /> Difficulty : Hard
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <a href="/ctf2023/verify" target="_blank">
          <button className="p-3 border rounded-xl">Link to Machine 5</button>
        </a>
      </div>
    </div>
  );
}

export default About;
