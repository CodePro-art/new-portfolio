import classNames from 'classnames';
import { useId } from 'hooks';
import './index.css';

function Monogram({ highlight, className, ...props }) {
  const id = useId();
  const clipId = `monogram-clip-${id}`;

  return (
    <svg
    aria-hidden
    className={classNames('monogram', className)}
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    height={70}
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      imageRendering: "optimizeQuality",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    viewBox="0 0 500 700"
    {...props}
  >
    <defs>
      <clipPath id={clipId}>
      <path d="M 250.5,0.5 C 339.277,-0.19137 410.444,34.4753 464,104.5 C 509.964,173.899 521.964,248.899 500,329.5 C 473.553,408.611 421.72,463.777 344.5,495  C 259.722,523.554 180.389,512.888 106.5,463 
          C 26.0962,400.974 -8.40384,319.141 3,217.5 C 11.4544,163.425 34.6211,116.925 72.5,78 C 83.954,72.9261 92.1206,76.0928 97,87.5 C 97.8869,92.0717 97.2202,96.405 95,100.5 
          C 45.3261,154.199 25.3261,217.533 35,290.5 C 46.3171,352.754 77.4838,402.254 128.5,439 C 173.19,469.506 222.524,482.173 276.5,477 C 237.572,454.398 198.905,431.398 160.5,408 
          C 179.867,411.237 193.034,403.737 200,385.5 C 200.167,332.83 200.667,280.164 201.5,227.5 C 244.909,283.32 288.075,339.32 331,395.5 C 345.793,411.233 361.793,412.566 379,399.5 
          C 382.941,395.214 385.608,390.214 387,384.5 C 387.667,299.833 387.667,215.167 387,130.5 C 385.417,123.499 381.917,117.666 376.5,113 C 403.167,127.333 429.833,141.667 456.5,156 
          C 421.441,89.297 366.774,48.9637 292.5,35 C 278.198,33.3017 263.865,31.9683 249.5,31 C 239.989,25.4663 237.489,17.633 242,7.5 C 244.441,4.54644 247.275,2.21311 250.5,0.5 
          Z M 186.5,9.5 C 202.074,8.90275 208.574,16.2361 206,31.5 C 199.819,40.8296 191.652,42.9963 181.5,38 C 173.938,29.9449 173.604,21.6116 180.5,13 
          C 182.432,11.5415 184.432,10.3748 186.5,9.5 Z M 129.5,34.5 C 145.36,36.2213 150.526,44.5547 145,59.5 C 136.706,68.4567 128.039,68.79 119,60.5 C 112.916,47.6931 116.416,39.0264 129.5,34.5 
          Z M 197.5,122.5 C 197.897,121.475 198.563,121.308 199.5,122 C 241.06,150.558 282.894,178.725 325,206.5 C 325.667,233.5 325.667,260.5 325,287.5 C 282.48,232.431 239.98,177.431 197.5,122.5 Z" />
      </clipPath>
    </defs>
    <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className="monogram__highlight" width="100%" height="100%" />
        </g>
      )}

  </svg>
  );
}

export default Monogram;