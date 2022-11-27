export const COINGECKO_API_ROUTES = {
  root: 'https://api.coingecko.com',
  coins: {
    list: '/api/v3/coins/list',
    details: (id: string) => '/api/v3/coins/' + id,
    markets:
      '/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
  },
};
export const RICKMORTY_API_ROUTES = {
  root: 'https://rickandmortyapi.com/api',
  characters: '/character/?page=19',
};
