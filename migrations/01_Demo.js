var Demo= artifacts.require("../contracts/Demo.sol");

module.exports = function(deployer) {
    return deployer.deploy(Demo)
  };