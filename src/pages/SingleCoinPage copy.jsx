import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleCoin } from "../store/features/mainSlice";
import styled from "styled-components";
import { Container } from "../components/Containers";
import { formatPrice } from "../utils/utils";
import Loading from "../components/Loading";

const SingleCoinPage = () => {
  const { singleCoin, isLoading } = useSelector((state) => state.main);
  const { coinId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleCoin(coinId));
  }, [dispatch, coinId]);
  const {
    id,
    name,
    market_cap_rank: rank,
    description: { en: desc },
    image: { small: img },
    links: { homepage },
    localization: { en: local },
    symbol,
    market_data: {
      ath: { usd: ath },
      atl: { usd: atl },
      current_price: { usd: currentPrice },
      high_24h: { usd: high24 },
      low_24h: { usd: low24 },
      market_cap: { usd: marketCap },
      price_change_percentage_24h: oneDayChange,
      price_change_percentage_7d: sevenDayChange,
      price_change_percentage_14d: fourteenDayChange,
      price_change_percentage_30d: oneMonthChange,
      price_change_percentage_1y: oneYearChange,
      circulating_supply,
    },
  } = singleCoin;

  console.log(singleCoin);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <StyledCoins>
      <Container>
        <article className='single-coin'>
          <div className='content'>
            <div className='content-main'>
              <p className='rank'>Rank #{rank}</p>
              <div className='img-container'>
                <img className='img' src={img} alt={name} />
                <p className='name'>{name}</p>
                <p className='symbol'>({symbol})</p>
              </div>
              <div className='price'>
                <h3 className='price-current'>
                  ${formatPrice(currentPrice, 0, 11)}
                </h3>
                <p className='price-day-change'>
                  {formatPrice(oneDayChange, 0, 2)}%
                </p>
              </div>
            </div>
            <div className='content-info'>
              <div className='content-info-item'>
                <p className='content-info-item-title'>Market Cap:</p>
                <p className='content-info-item-amount'>
                  ${formatPrice(marketCap)}
                </p>
              </div>
              <div className='content-info-item'>
                <p className='content-info-item-title'>Circulating Supply:</p>
                <p className='content-info-item-amount'>
                  {formatPrice(circulating_supply)}
                </p>
              </div>
              <div className='content-info-item'>
                <p className='content-info-item-title'> 24h High:</p>
                <p className='content-info-item-amount'>
                  ${formatPrice(high24, 0, 11)}
                </p>
              </div>
              <div className='content-info-item'>
                <p className='content-info-item-title'>24h Low:</p>
                <p className='content-info-item-amount'>
                  ${formatPrice(low24, 0, 11)}
                </p>
              </div>
              <div className='content-info-item'>
                <p className='content-info-item-title'>All Time High:</p>
                <p className='content-info-item-amount'>
                  ${formatPrice(ath, 0, 11)}
                </p>
              </div>
              <div className='content-info-item'>
                <p className='content-info-item-title'>All Time Low:</p>
                <p className='content-info-item-amount'>
                  ${formatPrice(atl, 0, 11)}
                </p>
              </div>
            </div>
          </div>
          <div className='table'>
            <h5>Price Change history</h5>
            <div className='table-heading'>
              <p>24h</p>
              <p>7d</p>
              <p>14d</p>
              <p>30d</p>
              <p>1y</p>
            </div>
            <div className='table-content'>
              <p>{formatPrice(oneDayChange, 0, 2)}%</p>
              <p>{formatPrice(sevenDayChange, 0, 2)}%</p>
              <p>{formatPrice(fourteenDayChange, 0, 2)}%</p>
              <p>{formatPrice(oneMonthChange, 0, 2)}%</p>
              <p>{formatPrice(oneYearChange, 0, 2)}%</p>
            </div>
          </div>
          <div className='about'>
            <h3>About</h3>
            <p
              className='desc'
              dangerouslySetInnerHTML={{ __html: `${desc}` }}
            ></p>
            <p className='site-address'>
              <a href={homepage[0]}>{homepage[0]}</a>
            </p>
          </div>
        </article>
      </Container>
    </StyledCoins>
  );
};

const StyledCoins = styled.main`
  padding: 4rem 0;
  .single-coin {
  }
  .content {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    place-items: center;
  }

  .content-main {
    width: 75%;
  }
  .content-info {
    width: 70%;
    background: var(--clr-grey-8);
    padding: 1rem;
    box-shadow: var(--light-shadow);
    border-radius: 8px;
    backdrop-filter: blur(100px);
  }
  .rank {
    font-weight: 600;
    font-size: 0.8rem;
    background: var(--clr-gunmetal);
    display: inline-block;
    color: var(--clr-grey-9);
    border-radius: 8px;
    padding: 0.1rem 0.75rem;
  }
  .img-container {
    display: flex;
    margin: 1rem 0;
    align-items: center;
    gap: 0.5rem;
    .img {
      width: 40px;
    }
  }
  .price {
    display: flex;
    gap: 1rem;
    align-items: center;
    .price-day-change {
      font-weight: bold;
    }
  }
  .content-info-item {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    margin-bottom: 0.25rem;
  }
  .content-info-item-title {
    font-weight: 400;
    color: var(--clr-grey-4);
  }
  .content-info-item-amount {
    font-weight: bold;
    color: var(--clr-grey-2);
  }
  .table {
    text-align: center;
    padding: 4rem 0;
    h5 {
      margin-bottom: 1.5rem;
      color: var(--clr-grey-2);
    }
  }
  .table-heading,
  .table-content {
    display: grid;
    width: 75%;
    grid-template-columns: repeat(5, 1fr);
    gap: 0 0.5rem;
    place-items: center;
    margin: 0.5rem auto;
    p {
      width: 100%;
      padding: 0.2rem;
      text-align: center;
      border: 1px solid #222;
      border-radius: 8px;
      box-shadow: var(--light-shadow);
      border: none;
    }
  }
  .table-heading {
    p {
      background: var(--clr-grey-5);
      font-weight: 600;
      font-size: 0.9rem;
      color: var(--clr-grey-9);
    }
  }
  .table-content {
    p {
      background: var(--clr-primary-8);
      font-weight: 600;
      font-size: 0.9rem;
      color: var(--clr-grey-9);
    }
  }
  .about {
    width: 90%;
    margin: 2rem auto;
    text-align: justify;

    h3 {
      margin-bottom: 1.5rem;
      color: var(--clr-grey-2);
    }
    .desc {
      font-size: 0.95rem;
      line-height: 1.7;
    }
    .site-address {
      text-align: center;
      width: fit-content;
      place-items: center;
      margin: 2rem auto;
      background: var(--clr-primary-5);
      font-size: 0.9rem;
      font-weight: bold;
      padding: 0.5rem 1rem;
      border-radius: 12px;
      border: 1px solid transparent;
      transition: var(--transition);
      box-shadow: var(--light-shadow);
      &:hover {
        background: var(--clr-grey-2);
        a {
        }
      }
      a {
        color: var(--clr-grey-9);
      }
    }
  }
  @media screen and (max-width: 768px) {
    .content {
      grid-template-columns: 1fr;
    }
    .content-main {
      margin-bottom: 2rem;
    }
    .content-info {
      width: 85%;
    }
    .table {
      padding: 2rem 0;
    }
    .table-heading,
    .table-content {
      p {
        font-size: 0.7rem;
      }
    }
    .about {
      margin: 1rem 1rem;

      .desc {
        font-size: 0.85rem;
      }
    }
  }
`;

// export default SingleCoinPage;
