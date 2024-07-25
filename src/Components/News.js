import React, { Component } from "react";
 
export class News extends Component {
  articles =
    [
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": "Reuters",
        "title": "Blast at Jose Cuervo plant in Mexico's Tequila kills at least five people - Reuters Canada",
        "description": "An explosion at a Jose Cuervo tequila plant in central Mexico killed at least five company workers and forced the evacuation of tourists from the area in the spirit's hometown of Tequila, the head of the state's emergency services said on Tuesday.",
        "url": "https://www.reuters.com/world/americas/blast-jose-cuervo-plant-mexicos-tequila-kills-least-two-people-2024-07-24/",
        "urlToImage": "https://www.reuters.com/resizer/v2/HZ57TTU63JM6HD5I7C3AU5ESSI.jpg?auth=037794a30373fe750e7ae8160aed7fb63ad705a3f672bed85b7d0e77647881b2&height=1005&width=1920&quality=80&smart=true",
        "publishedAt": "2024-07-24T03:58:23Z",
        "content": null
      },
      
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Clemente Duran-Ballen",
        "title": "Video: Why Trump’s FEC complaint against Harris is a ‘long shot’ according to Honig - CNN",
        "description": "CNN legal analyst Elie Honig breaks down the Trump campaign’s complaint about Vice President Kamala Harris’ access to campaign funds.",
        "url": "https://www.cnn.com/2024/07/23/politics/video/trump-fec-complaint-harris-biden-campaign-sot-digvid",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/still-20795029-1465960-still.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-07-24T03:04:27Z",
        "content": null
      },
      {
        "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
        },
        "author": "ET Online",
        "title": "What numbers tell: Elon Musk might need India now",
        "description": "Tesla CEO Elon Musk  earlier this year canceled a planned visit to India citing heavy obligations. Despite initial plans, Tesla hasn't re-engaged with India, reportedly due to capital issues. India's EV policy might shift focus to reward other investors.",
        "url": "https://economictimes.indiatimes.com/industry/renewables/what-numbers-tell-elon-musk-might-need-india-now-for-tesla/articleshow/112018945.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-112019191,width-1200,height-630,imgsize-152660,overlay-economictimes/photo.jpg",
        "publishedAt": "2024-07-25T13:12:14Z",
        "content": "In April, Tesla CEO Elon Musk traveled to China on an unexpected journey, ironically, a week before, he had cancelled a much-hyped trip to India citing \"very heavy Tesla obligations\". Musk was schedu… [+5016 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Investor's Business Daily"
        },
        "author": "Investor's Business Daily",
        "title": "Dow Jones Futures Reverse On GDP, Inflation Data; Nvidia Below Key Level",
        "description": "Key earnings movers include IBM, Chipotle and Royal Caribbean.",
        "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-sp500-nasdaq-gdp-inflation-nvidia-stock-nvda/",
        "urlToImage": "https://www.investors.com/wp-content/uploads/2017/03/stock-wallstreet-031317-shutter.jpg",
        "publishedAt": "2024-07-25T13:04:31Z",
        "content": "Dow Jones futures and the other major stock indexes reversed higher Thursday, as Wall Street digested the early release of stronger-than-expected GDP reading, along with inflation data. An early lose… [+7238 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Investopedia"
        },
        "author": "Nisha Gopalan",
        "title": "Stellantis Stock Sinks as Profit Plunges",
        "description": "Chrysler and Jeep maker Stellantis joined its rivals in posting underwhelming results, with earnings lagging even its own expectations as it struggles with excess inventory in North America.",
        "url": "https://www.investopedia.com/stellantis-stock-sinks-as-profit-plunges-8683390",
        "urlToImage": "https://www.investopedia.com/thmb/3omdH00kEEImxmOPcBuXBnSfxzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/INV_Stellantis_GettyImages-2148132052-250f1d1d629c40bc85ab029ce57fd1fa.jpg",
        "publishedAt": "2024-07-25T13:03:59Z",
        "content": "<ul><li>Stellantis shares are plunging after the automaker reported results that lagged both analysts' and its own expectations as it struggles with excess inventory in North America.</li><li>The own… [+1934 chars]"
        },
        
        {
        "source": {
        "id": null,
        "name": "Ambcrypto.com"
        },
        "author": "Samuel Edyme",
        "title": "Why Ethereum’s ETF launch didn’t stop its price crash",
        "description": "Ethereum's price has declined following the launch of spot Ethereum ETFs, despite initial high expectations. But why?",
        "url": "https://ambcrypto.com/why-ethereums-etf-launch-didnt-stop-its-price-crash/",
        "urlToImage": "https://ambcrypto.com/wp-content/uploads/2024/07/News-Articles-FI-Editors-34-1-1000x600.jpg",
        "publishedAt": "2024-07-25T13:00:15Z",
        "content": "<ul><li>Ethereum’s price falls by 10% post-ETF launch, contrary to bullish predictions.</li><li>Factors like market corrections and external economic pressures contribute to the downturn</li></ul>In … [+3225 chars]"
        },
        {
        "source": {
        "id": "fortune",
        "name": "Fortune"
        },
        "author": "Christiaan Hetzner",
        "title": "Big Tech’s $1 trillion dollar sell-off triggers worst day for stock markets since 2022",
        "description": "Excessive AI spending and geopolitical risks are prompting investors to cash in their chips.",
        "url": "https://fortune.com/2024/07/25/big-tech-tesla-google-alphabet-ai-microsoft-openai-stocks-election/",
        "urlToImage": "https://fortune.com/img-assets/wp-content/uploads/2024/07/GettyImages-2162688843-e1721910863412.jpg?resize=1200,600",
        "publishedAt": "2024-07-25T13:00:13Z",
        "content": "Has the day of reckoning finally arrived? Wednesdays rout in tech stocks led by Tesla and Google parent Alphabet wiped a collective $1 trillion in value off U.S. equities, signaling a broad-based cor… [+4150 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "FactCheck.org"
        },
        "author": "Brooks Jackson",
        "title": "Biden’s Numbers, July 2024 Update",
        "description": "As Biden enters the final months of his presidency, we look at various statistical measures of what's happened during his term.\nThe post Biden’s Numbers, July 2024 Update appeared first on FactCheck.org.",
        "url": "https://www.factcheck.org/2024/07/bidens-numbers-july-2024-update/",
        "urlToImage": "https://cdn.factcheck.org/UploadedFiles/biden_speaks_march2022.jpg",
        "publishedAt": "2024-07-25T13:00:10Z",
        "content": "Este artículo estará disponible en español en El Tiempo Latino.\r\nPresident Joe Biden isn’t running for reelection, but his record will still be on the ballot in the fall. Here we look at how the U.S.… [+38334 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ETF Daily News"
        },
        "author": "MarketBeat News",
        "title": "Tesla (NASDAQ:TSLA) Receives Outperform Rating from Wedbush",
        "description": "Wedbush reissued their outperform rating on shares of Tesla (NASDAQ:TSLA – Free Report) in a report published on Wednesday, Benzinga reports. Wedbush currently has a $300.00 price target on the electric vehicle producer’s stock. A number of other equities res…",
        "url": "https://www.etfdailynews.com/2024/07/25/tesla-nasdaqtsla-receives-outperform-rating-from-wedbush/",
        "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo.png?v=20221020135629&w=240&h=240&zc=2",
        "publishedAt": "2024-07-25T12:54:43Z",
        "content": "Wedbush reissued their outperform rating on shares of Tesla (NASDAQ:TSLA – Free Report) in a report published on Wednesday, Benzinga reports. Wedbush currently has a $300.00 price target on the elect… [+6156 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Quartz India"
        },
        "author": "William Gavin",
        "title": "Tesla, Ford, and Stellantis stocks are all sinking thanks to weak profits",
        "description": "Automaker stocks were sinking Thursday morning after Ford Motor Co. and Jeep-maker Stellantis reported weak profits for their latest earnings periods this week.Read more...",
        "url": "https://qz.com/ford-stellantis-tesla-weak-profits-q2-earnings-gm-evs-1851604592",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/4b08594411190bbfaf78202564469c3f.jpg",
        "publishedAt": "2024-07-25T12:35:00Z",
        "content": "Automaker stocks were sinking Thursday morning after Ford Motor Co. and Jeep-maker Stellantis reported weak profits for their latest earnings periods this week.\r\nFord said Wednesday that its net inco… [+2581 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Jalopnik"
        },
        "author": "Owen Bellwood",
        "title": "Tesla’s Reputation Is Tanking Thanks To Elon Musk’s Endless Support For Trump",
        "description": "Tesla boss Elon Musk has thrown his weight behind convicted felon Donald Trump in his bid to win the U.S. election in 102 days. He’s backed the ex-president for re-election and has even pledged funding to his cause in order to get Trump back in the White Hous…",
        "url": "https://jalopnik.com/tesla-s-reputation-is-tanking-thanks-to-elon-musk-s-end-1851604572",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/51ce1271b122538e448c9c8761d9fd65.jpg",
        "publishedAt": "2024-07-25T12:28:00Z",
        "content": "Tesla boss Elon Musk has thrown his weight behind convicted felon Donald Trump in his bid to win the U.S. election in 102 days. Hes backed the ex-president for re-election and has even pledged fundin… [+2079 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Business Standard"
        },
        "author": "Capital Market",
        "title": "Benchmarks slide for 5th session, Axis Bank slumps over 5%",
        "description": "The domestic equity benchmarks slipped for a fifth straight day, mirroring a global tech sell-off. The Nifty ended flattish after an early slump, with oil & gas and auto sectors shining while metals and banks lagged. Concerns over heightened valuations in cer…",
        "url": "https://www.business-standard.com/markets/capital-market-news/benchmarks-slide-for-5th-session-axis-bank-slumps-over-5-124072501112_1.html",
        "urlToImage": "https://www.business-standard.com/assets/web-assets/images/Business_Standard_685x385.jpg",
        "publishedAt": "2024-07-25T12:17:00Z",
        "content": "The domestic equity benchmarks slipped for a fifth straight day, mirroring a global tech sell-off. The Nifty ended flattish after an early slump, with oil &amp; gas and auto sectors shining while met… [+5438 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Semafor.com"
        },
        "author": "Jenna Moon",
        "title": "US stocks see biggest drop in two years on tech selloff",
        "description": "Analysts said the move highlighted Wall Street's vulnerability to fluctuations in Big Tech trade.",
        "url": "https://www.semafor.com/article/07/25/2024/us-stocks-see-biggest-drop-in-two-years-on-tech-selloff",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/APWRach5U8QB7MSPppkYCg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/semafor_310/5c75ae454db420a79670e49935298d77",
        "publishedAt": "2024-07-25T12:14:51Z",
        "content": "Insights from The Wall Street Journal, Nikkei Asia, Financial Times, Bloomberg, and CNN\r\nThe News\r\nUS stock markets plunged on Wednesday, recording their worst losses since 2022, after investors sold… [+2471 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Danielle Chemtob, Forbes Staff, \n Danielle Chemtob, Forbes Staff\n https://www.forbes.com/sites/daniellechemtob/",
        "title": "Forbes Daily: World’s Top Billionaires See Big Losses As Markets Stumble",
        "description": "Thursday's edition of Forbes Daily covers Elon Musk and other billionaires' net worths drop, bad day for Nasdaq and S&P, highest-paid Olympians, Airtable AI tool and more.",
        "url": "https://www.forbes.com/sites/daniellechemtob/2024/07/25/forbes-daily-worlds-top-billionaires-see-big-losses-as-markets-stumble/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66a16986cc49270d235e748f/0x0.jpg?format=jpg&crop=2998,1685,x0,y150,safe&height=900&width=1600&fit=bounds",
        "publishedAt": "2024-07-25T12:12:18Z",
        "content": "This is a published version of the Forbes Daily newsletter, you can sign-up to get Forbes Daily in your inbox here.\r\nGood morning,\r\nThe Paris Olympics is set to be a landmark event in more ways than … [+10369 chars]"
        },
      {
        "source": {
          "id": "espn",
          "name": "ESPN"
        },
        "author": "Todd Archer",
        "title": "Sources: Lamb not expected when Dallas opens up - ESPN",
        "description": "Dallas Cowboys wide receiver CeeDee Lamb, who has been unable to land the type of contract extension that other players at his position have, is not expected to report to training camp Wednesday with his team, sources told ESPN's Adam Schefter on Tuesday.",
        "url": "https://www.espn.com/nfl/story/_/id/40627475/ceedee-lamb-not-expected-report-training-camp",
        "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0724%2Fr1362382_1296x729_16%2D9.jpg",
        "publishedAt": "2024-07-24T00:56:00Z",
        "content": "OXNARD, Calif. -- Dallas Cowboys star CeeDee Lamb, who has been unable to land the type of contract extension that other wide receivers have, is not expected to report to training camp Wednesday with… [+2269 chars]"
      },
      
     ]
    async componentDidMount(){
      let url="https:newsapi.org/v2/everything?q=india&apiKey=c3c8952fb43546a2b453911a878f1e9e&page=2"
      let data=await fetch(url)
      let paresedata=await data.json()
      console.log(paresedata)
      this.setState({articles:paresedata.articles})
    }

  constructor(){
    super();
    console.log("I am a constructor")
    this.state={    
      articles:this.articles,
      loading:false
   }
} 
  

    handleprevclick=async()=>{
      let url=`https:newsapi.org/v2/everything?q=india&apiKey=c3c8952fb43546a2b453911a878f1e9e&page=${this.state.page - 1}`
      let data=await fetch(url)
      let paresedata=await data.json()
      console.log(paresedata)
        this.setState({
          page:this.state.page -1,        
          articles:paresedata.articles
        })
          
    }
    }
    handlenextclick=async()=>{
      let url=`https:newsapi.org/v2/everything?q=india&apiKey=c3c8952fb43546a2b453911a878f1e9e&page=${this.state.page+1}`
      let data=await fetch(url)
      let paresedata=await data.json()
      console.log(paresedata)
 
        this.setState({
        page:this.state.page +1,   
        articles:paresedata.articles
        })
    }
  
  render() {
    return (
      <div className="container my-4">
        <h2>TIMES OF INDIA Top-Headlines</h2>
        <div className="row ">
          {this.state.articles.map((element)=>{
            return<div className="col-md-4" key={element.url}>
                  {/* <NewItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/> */}
                  <NewItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,70):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
          })}  
        </div>
          <div className="container mx-3 d-flex justify-content-between">
          <button disabled={this.state.page<1} type="button" className="btn btn-dark" onClick={this.handleprevclick}>&larr;Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next&rarr;</button>
          </div>
      </div>
    );
  };

)

export default News;
