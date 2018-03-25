App = {
  web3Provider: null,
  contract: null,

  init: function() {

    App.initGUI();
    App.initWeb3();
    App.markAllAdopted();
    App.logStatus();
  },

  initGUI: function() {

    // Load pets.
    $.getJSON('../pets.json', function(data) {
      var petsRow = $('#petsRow');
      var petTemplate = $('#petTemplate');

      for (i = 0; i < data.length; i ++) {
        petTemplate.find('.panel-title').text(data[i].name);
        petTemplate.find('img').attr('src', data[i].picture);
        petTemplate.find('.pet-breed').text(data[i].breed);
        petTemplate.find('.pet-age').text(data[i].age);
        petTemplate.find('.pet-location').text(data[i].location);
        petTemplate.find('.btn-adopt').attr('data-id', data[i].id);

        petsRow.append(petTemplate.html());
      }
    });

    $(document).on('click', '.btn-adopt', App.handleAdopt);
  },

  initWeb3: function() {
    // web3.currentProvider and Web3.js is provided by Metamask
    this.web3Provider = new Web3(web3.currentProvider);

    // Set our contract's ABI and address
    var abi = [{"constant":true,"inputs":[],"name":"getAdopters","outputs":[{"name":"","type":"address[16]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dogId","type":"uint256"}],"name":"adopt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
    var contractAddress = '0xc1aac40e9e6fd3e12d107ebf1616135b6a892823';
    this.contract = this.web3Provider.eth.contract(abi).at(contractAddress);
  },

  logStatus: function() {
    if (this.web3Provider.version.network !== "loading") {
      console.log("connected to network " + this.web3Provider.version.network);
    }
    else {
      console.log("error: not connected to network");
    }
    
    if (this.contract.transactionHash == null) {
      console.log("error: contract not deployed")
    }
  },

  markAllAdopted: function(adopters) {
    this.contract.getAdopters(function(err, adopters){
      console.log(err, adopters);
      for (i = 0; i < adopters.length; i++) {
        if (adopters[i] !== '0x0000000000000000000000000000000000000000') {
          $('.panel-pet').eq(i).find('button').text('Adopted').attr('disabled', true);
        }
      }
    });
  },

  handleAdopt: function(event) {
    event.preventDefault();

    var petId = parseInt($(event.target).data('id'));

    App.contract.adopt(petId, function(err, result) {
      if (err == null) {
        $('.panel-pet').eq(petId).find('button').text('Adopted').attr('disabled', true);
      }
      else {
        console.log(err, result)
      }
    })
  }
  
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
