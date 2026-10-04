const candles = [
  { x: 70, o: 256, c: 232, h: 220, l: 268, up: true },
  { x: 125, o: 232, c: 196, h: 184, l: 244, up: true },
  { x: 180, o: 196, c: 220, h: 189, l: 237, up: false },
  { x: 235, o: 220, c: 148, h: 136, l: 227, up: true },
  { x: 290, o: 148, c: 160, h: 143, l: 182, up: false },
  { x: 345, o: 160, c: 124, h: 107, l: 165, up: true },
  { x: 400, o: 124, c: 136, h: 112, l: 150, up: false },
  { x: 455, o: 136, c: 93, h: 83, l: 143, up: true },
  { x: 510, o: 93, c: 112, h: 88, l: 124, up: false },
  { x: 565, o: 112, c: 76, h: 64, l: 117, up: true },
  { x: 620, o: 76, c: 88, h: 69, l: 100, up: false },
  { x: 675, o: 88, c: 52, h: 40, l: 93, up: true },
]

function CandlestickChart() {
  return (
    <svg
      viewBox="0 0 720 300"
      role="img"
      aria-label="Example candlestick chart with bullish and bearish candles"
      className="w-full rounded-xl border border-border bg-card p-2"
    >
      <line x1="40" y1="280" x2="700" y2="280" stroke="#a8a29e" strokeWidth="1" />
      {candles.map((c) => (
        <g key={c.x}>
          <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke={c.up ? '#16a34a' : '#dc2626'} strokeWidth="2" />
          <rect
            x={c.x - 12}
            y={Math.min(c.o, c.c)}
            width="24"
            height={Math.max(Math.abs(c.c - c.o), 2)}
            fill={c.up ? '#16a34a' : '#dc2626'}
          />
        </g>
      ))}
    </svg>
  )
}

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <header className="border-b border-border pb-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          ECE 5554 · Computer Vision · Project Proposal · Fall 2026
        </p>
        <h1 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          Candlestick Pattern Recognition: Can Computer Vision Predict Stock Price Movements?
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Team Members: [Your Name], [Partner Name]
        </p>
      </header>

      <figure className="my-10">
        <CandlestickChart />
        <figcaption className="mt-3 text-center text-sm text-muted-foreground">
          An example candlestick chart. Each candle summarizes one trading period (open, high,
          low, close); green candles closed higher (bullish) and red candles closed lower
          (bearish).
        </figcaption>
      </figure>

      <section className="mb-12">
        <h2 className="mb-4 font-serif text-2xl md:text-3xl">Problem Statement</h2>
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

      <section className="mb-12">
        <h2 className="mb-4 font-serif text-2xl md:text-3xl">Approach</h2>
        <div className="space-y-4 text-base leading-relaxed">
          <p>
            The project uses two parallel models that solve the same prediction task, one that
            looks at chart images and one that looks at numbers.
          </p>
          <p>
            <strong>Vision model:</strong> Historical daily market data (open, high, low, close,
            and volume) will be rendered into candlestick chart images, where each image shows a
            fixed window of consecutive trading days. A convolutional neural network (CNN) will
            then be trained to classify each chart image as bullish or bearish, based on whether
            the stock price moves up or down over a short horizon after the window ends. We plan
            to first train a small CNN from scratch and, if needed, compare it with a fine-tuned
            pretrained image classifier.
          </p>
          <p>
            <strong>Numerical model:</strong> A traditional machine learning model, such as
            logistic regression or gradient-boosted trees, will be trained on the same data
            windows represented as numerical features: raw OHLCV values and common technical
            indicators.
          </p>
          <p>
            Both models will be evaluated on the same held-out test period, so that the
            comparison directly measures whether the visual candlestick representation contains
            predictive information beyond what the raw numbers already provide.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 font-serif text-2xl md:text-3xl">Plans for Experiments</h2>
        <div className="space-y-4 text-base leading-relaxed">
          <p>
            <strong>Data:</strong> We plan to use publicly available historical daily market data
            for large-cap U.S. stocks (for example, S&amp;P 500 constituents), downloaded through
            the yfinance API. For each stock and each trading day, we will generate a candlestick
            chart image covering the previous N trading days, along with a binary label that
            indicates whether the closing price was higher (bullish) or lower (bearish) k trading
            days later. The data will be split chronologically, training on earlier years and
            testing on later years, to avoid look-ahead leakage.
          </p>
          <p>
            <strong>Experiments:</strong> We plan to run the following:
          </p>
          <ol className="list-decimal space-y-1 pl-6">
            <li>Naive baselines: always predict up, always predict down, and random guessing.</li>
            <li>CNN classification of candlestick chart images.</li>
            <li>Numerical models (logistic regression and gradient boosting) on the same windows.</li>
            <li>A parameter study varying the window size N and prediction horizon k.</li>
            <li>Qualitative inspection of correctly and incorrectly classified charts.</li>
          </ol>
          <p>
            <strong>Metrics:</strong> Accuracy, precision, recall, and F1 score, reported for all
            models on the same test period.
          </p>
          <p>
            <strong>Success criteria:</strong> The project is successful if the models clearly
            outperform the naive baselines, and if we can make a well-supported statement about
            whether the image-based approach is comparable to, better than, or worse than the
            numerical approach.
          </p>
          <p>
            <strong>Expected outcomes and uncertainties:</strong> Short-horizon stock movement is
            noisy, so there is a real chance that both models perform close to chance. That
            result would itself be informative: it would suggest that visual candlestick patterns
            do not carry reliable predictive signal beyond the numbers. We expect the experiments
            to show how much (if any) predictive information the chart representation adds.
          </p>
        </div>
      </section>

      <footer className="border-t border-border pt-6 text-sm text-muted-foreground">
        ECE 4554 / ECE 5554 · Computer Vision · Fall 2026
      </footer>
    </main>
  )
}
