App = {
  web3Provider: null,
  contract: null,

  init: function() {

    App.initGUI();
    App.initWeb3();
    App.markAllAdopted();
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

  handleAdopt: function(event) {
    event.preventDefault();

    var petId = parseInt($(event.target).data('id'));

    App.contract.adopt(petId, function(err, result) {
      $('.panel-pet').eq(petId).find('button').text('Adopted').attr('disabled', true);
    })
  },

  initWeb3: function() {
    // using browser's provider (Metamask)
    this.web3Provider = new Web3(web3.currentProvider);

    // Set our contract's ABI and address
    var abi = [{"constant":true,"inputs":[],"name":"getAdopters","outputs":[{"name":"","type":"address[16]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"adopters","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"petId","type":"uint256"}],"name":"adopt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
    var contractAddress = '0x31a70980e9219872880b9acd916432f4da75225f';
    this.contract = this.web3Provider.eth.contract(abi).at(contractAddress);
  },


  markAllAdopted: function(adopters) {
    this.contract.getAdopters(function(err, adopters){
      
      for (i = 0; i < adopters.length; i++) {
        if (adopters[i] !== '0x0000000000000000000000000000000000000000') {
          $('.panel-pet').eq(i).find('button').text('Adopted').attr('disabled', true);
        }
      }
    });
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
