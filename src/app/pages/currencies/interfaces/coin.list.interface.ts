export interface CoinList {
    Data: CoinListData;
    HasWarning: false;
    Message: string;
    RateLimit: any;
    Response: string;
    Type: number;
}

export type CoinListData = { 
    [key: string]: {
        Name: string;
        CoinName: string;
    };
}