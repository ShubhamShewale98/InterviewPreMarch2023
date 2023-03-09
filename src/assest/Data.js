import Vector from '../assest/Images/Vector.svg';
import BinanceC from '../assest/Images/BinanceC.svg';
import BitcoinS from '../assest/Images/BitcoinS.svg';
import Ethereum from '../assest/Images/Ethereum.svg';
import Solana  from '../assest/Images/Solana .svg';
import SHIBA from '../assest/Images/SHIBA.svg';



export const data = [{
    name:'Bitcoin (BTC)',
    price:'$31,812.80',
    discount:'+10%',
    tvl:'$60,000',
    logo:BinanceC,
    pairs:[BitcoinS,Ethereum,Solana]

},
{
    name:'Solana (SOL)',
    price:'$32.83',
    discount:'-12.32%',
    tvl:'$60,000',
    logo:BitcoinS,
    pairs:[BinanceC,Ethereum,Solana]

},{
    name:'Ethereum (ETH)',
    price:'$1,466.45',
    discount:'-11.93%',
    tvl:'$60,000',
    logo:Ethereum,
    pairs:[BinanceC,BitcoinS,Solana]

},{
    name:'Binance USD (BUSD)',
    price:'$1.00',
    discount:'$1.00',
    tvl:'$1.00',
    logo:Solana ,
    pairs:[BinanceC,BitcoinS,Ethereum]

},{
    name:'Shiba Inu (SHIB)',
    price:'Shiba Inu (SHIB)',
    discount:'-8.1%',
    tvl:'$60,000',
    logo:SHIBA,
    pairs:[BinanceC,BitcoinS,Ethereum]

}]