import { Coin } from '../../currencies/interfaces/coin.interface';
import { Portfolio } from './portfolio.interface';
export interface LinePortfolioCoin {
    id: number;
    portfolioId: number;
    coinId: number;
    amount: number;
    coin: Coin;
    portfolio: Portfolio;
}