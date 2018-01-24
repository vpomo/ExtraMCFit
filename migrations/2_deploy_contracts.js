const ExtraMCFCrowdsale = artifacts.require('./ExtraMCFCrowdsale.sol');

module.exports = (deployer) => {
    //http://www.onlineconversion.com/unix_time.htm

    //var startTime = 1516838400; //25 Jan 2018, 00:00:00 GMT

    var startTime = 1516665600; //23 Jan 2018, 00:00:00 GMT
    var endTime = 1517443199; //31 Jan 2018, 23:59:59 GMT
    var owner = "0xF4B99E8d0841DF74A694F591293331C32E530D9B";
    var rate = 207000;

    deployer.deploy(ExtraMCFCrowdsale, startTime, endTime, rate, owner);

};
