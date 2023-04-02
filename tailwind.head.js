module.exports = function ({ addComponents }) {
    addComponents(
      {
        ".heading": {
          "@apply absolute": {},
          width: "490px",
          height: "61px",
          left: "32px",
          top: "0",
          fontFamily: "roboto",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "52px",
          lineHeight: "61px",
          color: "#222222",
          
        },
      },
      { respectPrefix: false }
    );
  };
  