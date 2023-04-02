module.exports = function ({ addComponents }) {
    addComponents(
      {
        'footer': {
            width: '418px',
            height: '419px',
            flex: 'none',
            order: '2',
            flexGrow: '0',
          }
      },
      { respectPrefix: false }
    );
  };
  