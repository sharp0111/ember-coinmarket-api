import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [{
          id: 1,
          name: 'Bitcoin',
          symbol: 'BTC',
          circulating_supply: 17396512,
          max_supply: 21000000,
          USD: 3726.69977679
        }, {
          id: 2,
          name: 'Litecoin',
          symbol: 'LTC',
          circulating_supply: 59329988,
          max_supply: 84000000,
          USD: 29.5531007375
        }, {
          id: 3,
          name: 'Ripple',
          symbol: 'XRP',
          circulating_supply: 40327341704,
          max_supply: 100000000000,
          USD: 0.3489115771
        }];
    }
});
