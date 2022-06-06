import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  coins: [],
  singleCoin: {
    id: "",
    name: "",
    market_cap_rank: 0,
    description: { en: "" },
    image: { small: "" },
    links: { homepage: "" },
    localization: { en: "" },
    symbol: "",
    market_data: {
      ath: { usd: 0 },
      atl: { usd: 0 },
      current_price: { usd: 0 },
      high_24h: { usd: 0 },
      low_24h: { usd: 0 },
      market_cap: { usd: 0 },
      price_change_percentage_24h: 0,
      price_change_percentage_7d: 0,
      price_change_percentage_14d: 0,
      price_change_percentage_30d: 0,
      price_change_percentage_1y: 0,
      circulating_supply: 0,
    },
  },
  isSidebarOpen: false,
  isLoading: false,
  filters: { coinName: "" },
  filteredCoins: [],
  exchanges: [],
  btcCurrentPrice: 0,
  sort: { name: "", value: "" },
};

const coinsUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false ";
const singleCoinBaseUrl = "https://api.coingecko.com/api/v3/coins/";

const exchangesUrl = "https://api.coingecko.com/api/v3/exchanges?per_page=100";

export const getCoins = createAsyncThunk("/main/getCoins", () => {
  return axios(coinsUrl)
    .then((resp) => resp.data)
    .catch((err) => console.log(err));
});

export const getSingleCoin = createAsyncThunk("/main/getSingleCoin", (id) => {
  return axios(`${singleCoinBaseUrl}${id}`)
    .then((resp) => resp.data)
    .catch((err) => console.log(err));
});

export const getExchanges = createAsyncThunk("/main/getExchanges", () => {
  return axios(exchangesUrl)
    .then((resp) => resp.data)
    .catch((err) => console.log(err));
});

const mainSlice = createSlice({
  name: "main",
  initialState,
  extraReducers: {
    [getCoins.pending]: (state) => {
      state.isLoading = true;
    },
    [getCoins.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.coins = action.payload;
      state.filteredCoins = [...action.payload];
      let tempCoins = [...state.filteredCoins];

      if (state.sort.name === "rank" && state.sort.value === true) {
        tempCoins = tempCoins.sort((a, b) => {
          return a.market_cap_rank - b.market_cap_rank;
        });
      }
      if (state.sort.name === "rank" && state.sort.value === false) {
        tempCoins = tempCoins.sort((a, b) => {
          return b.market_cap_rank - a.market_cap_rank;
        });
      }
      if (state.sort.name === "name" && state.sort.value === true) {
        tempCoins = tempCoins.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (state.sort.name === "name" && state.sort.value === false) {
        tempCoins = tempCoins.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      if (state.sort.name === "price" && state.sort.value === true) {
        tempCoins = tempCoins.sort((a, b) => {
          return a.current_price - b.current_price;
        });
      }
      if (state.sort.name === "price" && state.sort.value === false) {
        tempCoins = tempCoins.sort((a, b) => {
          return b.current_price - a.current_price;
        });
      }
      if (state.sort.name === "priceChange" && state.sort.value === true) {
        tempCoins = tempCoins.sort((a, b) => {
          return a.price_change_percentage_24h - b.price_change_percentage_24h;
        });
      }
      if (state.sort.name === "priceChange" && state.sort.value === false) {
        tempCoins = tempCoins.sort((a, b) => {
          return b.price_change_percentage_24h - a.price_change_percentage_24h;
        });
      }
      if (state.sort.name === "marketCap" && state.sort.value === true) {
        tempCoins = tempCoins.sort((a, b) => {
          return a.market_cap - b.market_cap;
        });
      }
      if (state.sort.name === "marketCap" && state.sort.value === false) {
        tempCoins = tempCoins.sort((a, b) => {
          return b.market_cap - a.market_cap;
        });
      }
      if (state.sort.name === "circSupply" && state.sort.value === true) {
        tempCoins = tempCoins.sort((a, b) => {
          return a.circulating_supply - b.circulating_supply;
        });
      }
      if (state.sort.name === "circSupply" && state.sort.value === false) {
        tempCoins = tempCoins.sort((a, b) => {
          return b.circulating_supply - a.circulating_supply;
        });
      }

      state.filteredCoins = tempCoins;
    },
    [getCoins.rejected]: (state) => {
      state.isLoading = false;
    },
    [getSingleCoin.pending]: (state) => {
      state.isLoading = true;
    },
    [getSingleCoin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.singleCoin = action.payload;
    },
    [getSingleCoin.rejected]: (state) => {
      state.isLoading = false;
    },
    [getExchanges.pending]: (state) => {
      state.isLoading = true;
    },
    [getExchanges.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.exchanges = action.payload;
      let btc = state.coins.find((coin) => coin.id === "bitcoin");
      state.btcCurrentPrice = btc.current_price;
    },
    [getExchanges.rejected]: (state) => {
      state.isLoading = false;
    },
  },
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    updateFilter: (state, action) => {
      state.filters.coinName = action.payload;
      let tempCoins = [...state.coins];
      if (action.payload) {
        tempCoins = tempCoins.filter((coin) =>
          coin.name.toLowerCase().includes(action.payload)
        );
      }
      state.filteredCoins = tempCoins;
    },
    resetFilter: (state) => {
      state.filters.coinName = "";
    },
    updateSort: (state, action) => {
      const { name, value } = action.payload;
      state.sort = { name, value };
      let tempCoins = [...current(state.coins)];
      if (state.sort.name === "name" && state.sort.value === true) {
        state.filteredCoins = tempCoins.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (state.sort.name === "name" && state.sort.value === false) {
        state.filteredCoins = tempCoins.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      if (state.sort.name === "rank" && state.sort.value === true) {
        state.filteredCoins = tempCoins.sort((a, b) => {
          return a.market_cap_rank - b.market_cap_rank;
        });
      }
      if (state.sort.name === "rank" && state.sort.value === false) {
        state.filteredCoins = tempCoins.sort((a, b) => {
          return b.market_cap_rank - a.market_cap_rank;
        });
      }
      if (state.sort.name === "price" && state.sort.value === true) {
        state.filteredCoins = tempCoins.sort((a, b) => {
          return a.current_price - b.current_price;
        });
      }
      if (state.sort.name === "price" && state.sort.value === false) {
        state.filteredCoins = tempCoins.sort((a, b) => {
          return b.current_price - a.current_price;
        });
      }
      if (state.sort.name === "priceChange" && state.sort.value === true) {
        state.filteredCoins = tempCoins.sort((a, b) => {
          console.log(tempCoins);
          return a.price_change_percentage_24h - b.price_change_percentage_24h;
        });
      }
      if (state.sort.name === "priceChange" && state.sort.value === false) {
        state.filteredCoins = tempCoins.sort((a, b) => {
          return b.price_change_percentage_24h - a.price_change_percentage_24h;
        });
      }
      if (state.sort.name === "marketCap" && state.sort.value === true) {
        state.filteredCoins = tempCoins.sort((a, b) => {
          return a.market_cap - b.market_cap;
        });
      }
      if (state.sort.name === "marketCap" && state.sort.value === false) {
        state.filteredCoins = tempCoins.sort((a, b) => {
          return b.market_cap - a.market_cap;
        });
      }
      if (state.sort.name === "circSupply" && state.sort.value === true) {
        state.filteredCoins = tempCoins.sort((a, b) => {
          return a.circulating_supply - b.circulating_supply;
        });
      }
      if (state.sort.name === "circSupply" && state.sort.value === false) {
        state.filteredCoins = tempCoins.sort((a, b) => {
          return b.circulating_supply - a.circulating_supply;
        });
      }
    },
  },
});

export const {
  openSidebar,
  closeSidebar,
  updateFilter,
  resetFilter,
  updateSort,
} = mainSlice.actions;

export default mainSlice.reducer;
