module.exports = function ({ addComponents }) {
    addComponents(
      {
        'foot': {
            "@apply absolute": {},
            position: "absolute",
            width: "414px",
            height: "277px",
            left: "2px",
            top: "71px",
          }
      },
      { respectPrefix: false }
    );
  };
  