module.exports = function ({ addComponents }) {
    addComponents(
      {
        ".text": {
          "@apply absolute": {},
          position: "absolute",
          left: "0px",
          top: "77px",
          width: "554px",
          height: "96px",
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '22px',
          lineHeight: '32px',
          textAlign: 'center',
          color: '#7E7E7E',
          
        },
      },
      { respectPrefix: false }
    );
  };
  