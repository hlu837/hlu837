const Header = () => {
  return (
    <>
      <div className="gradient-header flex items-start px-4 sm:px-6 py-2 relative">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ml-auto mr-4 sm:mr-8">Welcome to</h1>
      </div>
      <div className="gradient-header py-4 relative">
        <div className="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 hidden md:block">
          <div className="ml-2 md:ml-4">
            <div
              className="rounded-full shadow-soft h-8 w-8 md:h-11 md:w-11 ml-12 md:ml-24"
              style={{
                background: "linear-gradient(293deg, #5ffbf1 0%, #86a8e7 50%, #d16ba5 100%)",
                boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)"
              }}
            />
            <svg
              width="120"
              height="45"
              viewBox="0 0 169 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-2 md:w-[169px] md:h-[65px]"
            >
              <g filter="url(#filter0_d_12_9)">
                <path
                  d="M19.2676 34.8066H27.915L29.7975 32.0693L31.974 30.284L33.9741 29.0344L36.2095 28.7963H39.6214L41.092 29.3914L42.6215 30.284V27.4276L43.5627 24.2737L44.3863 22.0719L44.9157 20.6437L47.1511 17.2518L49.9747 14.3359L52.0336 12.9077L53.916 12.1936L55.975 11.8366H62.6223L68.3872 12.9077L75.0345 5.64775L82.3877 1.48219L89.388 0.0540009H97.153L103.33 2.49383L106.153 3.68398L108.742 5.64775L110.918 7.79003L113.212 9.93232L116.742 14.9905L118.86 20.7033L120.154 25.1068L120.742 28.2608V35.4612H122.683H124.272L125.801 36.2943L128.213 38.4961L130.507 40.8764L131.625 39.8053L133.154 39.0317L136.566 37.901L138.272 37.663H140.155H142.684L143.567 37.901L146.331 39.0317L147.92 39.9243L149.39 41.412L151.567 43.0187L153.273 44.923L155.685 45.28L157.449 45.161L159.391 45.8156L161.744 48.8505L164.038 52.54L164.803 57.0031L4.14941 56.7055V52.3615L4.85532 48.1364L6.26714 44.5659L8.50252 41.7095L10.9144 38.9722L13.2674 37.0679L16.444 35.5207L19.2676 34.8066Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_12_9"
                  x="0.149414"
                  y="0.0540009"
                  width="168.653"
                  height="64.9491"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_12_9"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_12_9"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="flex items-end mt-4 md:mt-7">
            <div className="bg-black rounded-full flex-shrink-0 h-4 w-4 md:h-6 md:w-6" />
            <div className="ml-2 md:ml-4">
              <div
                className="rounded-full shadow-soft h-6 w-5 md:h-8 md:w-7"
                style={{
                  background: "linear-gradient(293deg, #5ffbf1 0%, #86a8e7 27%, #d16ba5 68%)",
                  boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)"
                }}
              />
              <div
                className="ml-2 md:ml-3 mt-1 w-1 h-12 md:h-16 rounded"
                style={{ background: "#000000ab" }}
              />
            </div>
            <div>
              <div className="flex justify-end">
                <div className="bg-black rounded-full flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
              </div>
              <div className="flex mt-3 md:mt-5">
                <div className="bg-black rounded-full flex-shrink-0 h-4 w-5 md:h-5 md:w-6" />
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center px-4">
          HluPoetry
        </h1>
      </div>
    </>
  );
};

export default Header;