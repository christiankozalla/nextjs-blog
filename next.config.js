module.exports = {
  async Headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame anchestors 'none'"
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          }
        ]
      }
    ];
  }
};
