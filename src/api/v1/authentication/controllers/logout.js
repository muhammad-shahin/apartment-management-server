const logout = (req, res) => {
  const user = req.body;
  console.log('logging out', user);
  res.send({ logoutSuccess: true });
};

module.exports = logout;
