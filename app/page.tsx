const datasets = [
  { name: 'SP500 Chart Dataset — GitHub', url: 'https://github.com/JaehyunAhn/SP500-Chart-Dataset' },
  {
    name: 'SP500 Chart Dataset — Hugging Face',
    url: 'https://huggingface.co/datasets/sogosonnet/SP500-Chart-Dataset',
  },
  { name: 'FinVQA-Chart — GitHub', url: 'https://github.com/LPOSP/FinVQA-Chart' },
  {
    name: 'Candlestick Dataset — Kaggle',
    url: 'https://www.kaggle.com/datasets/farshidhossain68/candle-stick',
  },
  {
    name: 'Candlestick Pattern Detection — Roboflow',
    url: 'https://universe.roboflow.com/candlestickpatterndataset/candle-stick-pattern-detection/browse?queryText=&pageSize=100&startingIndex=0&browseQuery=true',
  },
  {
    name: 'Chart Dataset — Roboflow',
    url: 'https://universe.roboflow.com/space307/chart-ct0xd/browse?queryText=&pageSize=100&startingIndex=0&browseQuery=true',
  },
]

export default function Page() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl bg-white px-6 py-12 text-[#333333] md:px-10 md:py-16">
      <header className="mb-8 border-b border-[#eeeeee] pb-6">
        <p className="mb-3 text-sm font-medium text-[#666666]">
          Fall 2026 · ECE 4554/5554 Computer Vision · Course Project Proposal
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Can Candlestick Charts Predict Stock Price Movements?
        </h1>
        <p className="mt-5 text-lg font-semibold">
          Eshan Agarwal · Brennen Woodruff
        </p>
        <p className="mt-1 text-base text-[#666666]">
          Virginia Tech · ECE 4554/5554 Computer Vision
        </p>
      </header>

      <section className="mb-10">
        <h2 className="mb-3 border-b border-[#eeeeee] pb-2 text-2xl font-semibold">Teaser Figure</h2>
        <figure className="my-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/image.png"
            alt="Twenty-day S&P 500 candlestick chart with moving averages, Bollinger Bands, and volume"
            className="mx-auto w-full max-w-lg"
          />
          <figcaption className="mt-3 text-center text-sm leading-relaxed text-[#666666]">
            A candlestick chart of a stock in a downtrend, with green (bullish) and red (bearish)
            daily candles.
            <br />
            Source:{' '}
            <a
              href="https://huggingface.co/datasets/sogosonnet/SP500-Chart-Dataset"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#003399] underline"
            >
              SP500-Chart-Dataset
            </a>{' '}
            (J. Ahn, 2025), CC BY 4.0.
          </figcaption>
        </figure>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 border-b border-[#eeeeee] pb-2 text-2xl font-semibold">Problem Statement</h2>
        <div className="space-y-4 text-base leading-relaxed">
          <p>
            Stock market traders often use candlestick charts to visually identify trends and
            patterns in a stock&apos;s price movement. However, the reliability of visual patterns
            to predict future price movements is unknown. Traditional machine learning models for
            stock market prediction rely on numerical market data, such as historical prices,
            trading volume, technical indicators, and other information stored in large datasets.
          </p>
          <p>
            The goal of this project is to train a computer vision model to identify bullish and
            bearish patterns in candlestick charts and determine whether these visual patterns can
            be used to predict future stock price movement within a reasonable accuracy. The
            performance of the computer vision model will then be compared with a traditional
            machine learning model that uses numerical market data directly. The aim is to
            determine whether candlestick charts contain useful predictive visual information and
            how an image approach compares against numerical methods.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 border-b border-[#eeeeee] pb-2 text-2xl font-semibold">Approach</h2>
        <div className="space-y-4 text-base leading-relaxed">
          <p>
            We plan to use two different approaches to predict future stock price movements and compare their performance. The first approach will use computer vision to analyze candlestick charts. A convolutional neural network, such as ResNet-18, will be trained on these images to learn visual features and patterns associated with bullish and bearish price movements. This will be compared to a traditional stock market prediction model that uses numerical market data from the same time periods to determine which approach is more accurate.
          </p>
          <p>
            The performance of both models will be evaluated using accuracy, precision, recall, F1-score, and confusion matrices. We will also use Grad-CAM with the computer vision model to visualize which areas of the candlestick chart have the greatest influence on its predictions. This will help us identify the visual patterns learned by the model and better understand how it determines what may happen to the stock next.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 border-b border-[#eeeeee] pb-2 text-2xl font-semibold">
          Plans for Experiments
        </h2>
        <div className="space-y-4 text-base leading-relaxed">
          <p>
            For our experiments, we plan to use the SP500 Chart Dataset, which contains
            candlestick chart images generated from real S&amp;P 500 market data. The dataset
            contains 1.37 million images from 501 stocks between 2010 and 2025. Each image
            represents 20 trading days and includes labels based on the stock&apos;s future price.
            We will also use the FinVQA-Chart dataset, which contains high-resolution candlestick
            charts from real market data between 2020 and 2024 and includes labeled candlestick
            patterns. Additional candlestick datasets from Kaggle and Roboflow will be used to help
            train or evaluate the identification of specific bullish and bearish patterns.
          </p>
          <div>
            <p className="font-semibold">Datasets:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              {datasets.map((d) => (
                <li key={d.url}>
                  {d.name}:{' '}
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all text-[#003399] underline"
                  >
                    {d.url}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p>
            We will implement the training and evaluation for the computer vision model ourselves.
            This will include preprocessing the chart images, training a CNN such as ResNet-18,
            generating predictions, and calculating accuracy, precision, recall, F1-score, and
            confusion matrices. We will use existing machine learning libraries such as PyTorch.
            Grad-CAM will also be used to visualize which portions of the candlestick charts have
            the greatest influence on the model&apos;s predictions.
          </p>
          <p>
            The experiments will be performed in multiple stages. The first experiment will focus
            on whether the computer vision model can recognize bullish and bearish candlestick
            patterns from chart images. Using labeled candlestick datasets, we will evaluate how
            accurately the model can correctly identify visual patterns and if it is correctly
            understanding candlestick charts.
          </p>
          <p>
            Once the model can reliably recognize candlestick patterns, the next experiments will
            test whether it can use the visual information it identifies to make useful decisions.
            We will begin with basic candlestick trading strategies, where known bullish or bearish
            patterns are used to predict whether the price is more likely to increase or decrease.
            The predicted movement can then be compared against the actual movement of the stock
            following the chart. This will allow us to determine whether the model can not only
            recognize patterns but also correctly use those patterns when analyzing market
            movement.
          </p>
          <p>
            Then we will train the computer vision model to predict future stock movement directly
            from chart images. We will experiment with different visual information, including
            candlesticks, trading volume, and technical indicators such as moving averages.
            Grad-CAM will be used to visualize which portions of the chart influence the
            model&apos;s predictions.
          </p>
          <p>
            Then the model will be compared against a traditional machine learning model using
            numerical stock market data from the same stock and time periods. Both models will
            attempt to predict the same future prices and allows us to see how accurate visual
            trading strategies are and if the bot can correctly interpret visual models of the
            stock market.
          </p>
          <p>
            If the model can correctly identify bullish and bearish then the model will be
            considered successful. If the model is able to then predict to a certain degree of
            accuracy the future price of a stock similar to a traditional stock market bot, then it
            will prove as a bonus and insight to how visual graphs can benefit stock traders.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 border-b border-[#eeeeee] pb-2 text-2xl font-semibold">
          Expected Outcomes
        </h2>
        <p className="text-base leading-relaxed">
          Pattern recognition using basic trading strategies are expected to work but will likely
          not beat a proven traditional AI bot that has historically done better. It may provide
          some insight if visual graphs are a factor at all in predicting the stock market.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 border-b border-[#eeeeee] pb-2 text-2xl font-semibold">References</h2>
        <ol className="list-decimal space-y-2 pl-6 text-sm leading-relaxed">
          {datasets.map((d) => (
            <li key={d.url}>
              {d.name}:{' '}
              <a
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-[#003399] underline"
              >
                {d.url}
              </a>
            </li>
          ))}
          <li>
            He et al. “Deep Residual Learning for Image Recognition,” CVPR 2016.{' '}
            <a
              href="https://arxiv.org/abs/1512.03385"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#003399] underline"
            >
              arXiv:1512.03385
            </a>
          </li>
          <li>
            Selvaraju et al. “Grad-CAM: Visual Explanations from Deep Networks via
            Gradient-Based Localization,” ICCV 2017.{' '}
            <a
              href="https://arxiv.org/abs/1610.02391"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#003399] underline"
            >
              arXiv:1610.02391
            </a>
          </li>
        </ol>
      </section>

      <section className="mb-8 border-t border-[#eeeeee] pt-6">
        <h2 className="mb-2 text-lg font-semibold">Website Tools and AI Assistance</h2>
        <p className="text-sm leading-relaxed text-[#666666]">
          We used a Vercel template and basic AI assistance to build and format this website and
          support its deployment on Vercel. The project idea and research towards the proposal
          were not assisted by AI.
        </p>
      </section>

      <footer className="border-t border-[#eeeeee] pt-5 text-sm text-[#666666]">
        © 2026 Eshan Agarwal · Brennen Woodruff · Virginia Tech
      </footer>
    </main>
  )
}
