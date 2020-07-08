function Component({ screen }) {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 257 521">
      <defs>
        <clipPath id="screenFormat">
          <path
            d="
              M40,15 h20 a5 5 90 0 1 5,5 a13 13 90 0 0 13,13
              h101 a13 13 90 0 0 13,-13 a5 5 90 0 1 5,-5
              h20 a25 25 90 0 1 25,25
              v441 a25 25 90 0 1 -25,25
              h-177 a25 25 90 0 1 -25,-25
              v-441 a25 25 90 0 1 25,-25
            "
          />
        </clipPath>
      </defs>

      <path
        fill="#ff4655"
        stroke="#FFFFFF"
        stroke-width="1"
        d="
          M40,3 h177 a37 37 90 0 1 37,37
          v441 a37 37 90 0 1 -37,37
          h-177 a37 37 90 0 1 -37,-37
          v-441 a37 37 90 0 1 37,-37
        "
      />

      <image
        x="15"
        y="15"
        width="227"
        style={{ clipPath: "url(#screenFormat)" }}
        href={screen}
      />

      <path
        fill="none"
        stroke="#FFFFFF"
        stroke-width="1"
        d="
          M40,15 h20 a5 5 90 0 1 5,5 a13 13 90 0 0 13,13
          h101 a13 13 90 0 0 13,-13 a5 5 90 0 1 5,-5
          h20 a25 25 90 0 1 25,25
          v441 a25 25 90 0 1 -25,25
          h-177 a25 25 90 0 1 -25,-25
          v-441 a25 25 90 0 1 25,-25
            
          M77,19 a4 4 180 0 1 0,8 a4 4 180 0 1 0,-8
          M100,19 a4 4 180 0 1 0,8 a4 4 180 0 1 0,-8
          M158,19 a4 4 180 0 1 0,8 a4 4 180 0 1 0,-8
          M176,19 a4 4 180 0 1 0,8 a4 4 180 0 1 0,-8
          M115,13 h27 a2 2 180 0 1 0,4 h-27 a2 2 180 0 1 0,-4
          M115,21 h27 a2 2 180 0 1 0,4 h-27 a2 2 180 0 1 0,-4
        "
      />

      <path
        stroke="#FFFFFF"
        stroke-width="3"
        d="
          M1.5,71 v18
          M1.5,107 v36
          M1.5,155 v36
        "
      />
    </svg>
  );
}

export default Component;
