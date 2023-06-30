import React from 'react';

const SvgCat = ({ fill, size }) => {

    return (
        <svg width={size} height={size} viewBox={`0 0 400 400`}>
            <g fill={fill}>
                <path d="M69.493 65.081 C 48.979 70.879,44.984 103.273,58.234 156.389 L 60.899 167.075 57.502 174.395 L 54.104 181.715 45.875 181.803 C 30.692 181.964,25.000 184.171,25.000 189.893 C 25.000 196.261,27.388 197.110,40.563 195.426 C 49.512 194.283,49.599 194.358,47.745 201.608 C 45.821 209.136,44.536 219.759,44.533 228.169 L 44.531 234.854 38.928 237.544 C 28.815 242.400,25.893 246.951,29.744 251.848 C 32.119 254.867,36.184 254.652,41.910 251.202 L 46.398 248.499 48.053 254.132 C 57.783 287.265,95.760 316.496,145.198 328.905 C 233.529 351.077,334.166 314.680,351.947 254.132 L 353.602 248.499 358.090 251.202 C 363.816 254.652,367.881 254.867,370.256 251.848 C 374.103 246.957,371.096 242.266,361.010 237.425 L 355.469 234.766 355.469 228.105 C 355.469 219.779,354.287 210.058,352.295 202.002 C 350.396 194.321,350.444 194.277,359.437 195.426 C 372.612 197.110,375.000 196.261,375.000 189.893 C 375.000 184.153,369.038 181.910,353.516 181.811 L 345.703 181.762 342.402 174.279 L 339.102 166.797 341.062 159.375 C 365.484 66.893,337.193 39.723,267.919 89.132 C 257.573 96.512,258.469 96.269,251.277 93.632 C 217.328 81.184,182.672 81.184,148.723 93.632 C 141.531 96.269,142.427 96.512,132.081 89.132 C 105.770 70.366,82.471 61.412,69.493 65.081 M88.644 80.242 C 97.276 83.324,107.230 88.762,119.774 97.249 C 139.655 110.700,141.085 111.082,153.733 106.334 C 157.291 104.999,160.344 103.906,160.519 103.906 C 160.694 103.906,160.947 110.090,161.082 117.649 C 161.360 133.186,161.838 134.375,167.810 134.375 C 173.786 134.375,174.219 133.106,174.219 115.582 L 174.219 100.185 177.810 99.281 C 179.785 98.784,184.180 98.163,187.576 97.901 L 193.750 97.425 193.750 125.717 C 193.750 142.678,194.056 154.581,194.515 155.438 C 196.339 158.847,203.661 158.847,205.485 155.438 C 205.944 154.581,206.250 142.678,206.250 125.717 L 206.250 97.425 212.424 97.901 C 215.820 98.163,220.215 98.784,222.190 99.281 L 225.781 100.185 225.781 115.472 C 225.781 133.023,226.232 134.375,232.081 134.375 C 238.177 134.375,238.639 133.246,238.918 117.649 C 239.053 110.090,239.306 103.906,239.481 103.906 C 239.656 103.906,242.709 104.988,246.267 106.310 C 259.000 111.042,260.233 110.712,280.249 97.222 C 305.113 80.465,323.848 73.838,330.006 79.621 C 338.334 87.441,337.823 118.048,328.777 153.125 C 325.122 167.300,325.157 169.281,329.214 177.823 C 330.781 181.123,331.968 183.888,331.852 183.968 C 331.736 184.048,327.949 185.267,323.438 186.676 C 308.438 191.361,289.168 201.443,287.496 205.480 C 284.373 213.017,291.935 217.008,300.027 212.093 C 309.528 206.322,326.379 199.172,334.807 197.338 L 337.192 196.818 338.922 203.683 C 342.348 217.277,343.325 230.907,340.820 230.174 C 333.947 228.165,315.068 226.745,307.609 227.677 C 301.712 228.414,299.645 230.130,299.645 234.288 C 299.645 239.932,301.547 241.000,311.145 240.748 C 319.060 240.540,329.453 241.484,336.943 243.090 L 340.769 243.910 340.235 246.755 C 337.874 259.343,323.978 278.041,308.297 289.728 C 238.279 341.920,110.705 328.910,68.354 265.260 C 63.850 258.491,60.688 251.677,59.763 246.746 L 59.228 243.891 63.403 243.035 C 71.408 241.393,80.136 240.591,88.531 240.727 C 98.576 240.889,100.355 239.921,100.355 234.288 C 100.355 230.130,98.288 228.414,92.391 227.677 C 84.932 226.745,66.053 228.165,59.180 230.174 C 56.675 230.907,57.652 217.277,61.078 203.683 L 62.808 196.818 65.193 197.338 C 73.203 199.081,89.558 206.063,101.550 212.859 C 110.506 217.933,117.359 209.155,109.648 202.486 C 105.361 198.778,86.227 189.613,76.563 186.639 C 72.051 185.250,68.264 184.048,68.148 183.968 C 68.032 183.888,69.219 181.123,70.786 177.823 C 74.804 169.364,74.880 167.147,71.589 154.688 C 61.036 114.731,61.678 80.857,73.047 77.871 C 75.830 77.139,83.013 78.232,88.644 80.242 M127.147 161.224 C 108.270 168.261,113.399 195.365,133.594 195.291 C 148.256 195.238,155.870 176.818,145.807 165.744 C 141.719 161.245,132.852 159.098,127.147 161.224 M262.495 160.841 C 241.868 167.595,247.295 197.050,268.807 195.099 C 289.619 193.212,289.425 162.108,268.592 160.516 C 266.315 160.342,263.572 160.488,262.495 160.841 M176.741 198.179 C 171.066 200.463,173.802 209.109,183.636 219.969 C 188.245 225.058,188.071 225.510,181.199 226.324 C 176.284 226.906,174.306 228.455,173.708 232.190 C 173.161 235.605,176.577 239.844,179.875 239.844 C 183.725 239.844,191.164 238.093,195.486 236.170 L 199.957 234.181 204.861 236.238 C 218.261 241.859,227.559 240.103,226.292 232.190 C 225.694 228.455,223.716 226.906,218.801 226.324 C 211.929 225.510,211.755 225.058,216.364 219.969 C 228.315 206.772,229.479 197.656,219.213 197.656 C 216.363 197.656,215.401 198.551,209.976 206.250 C 208.007 209.043,204.958 212.718,203.198 214.416 L 200.000 217.505 196.802 214.416 C 195.042 212.718,191.993 209.043,190.024 206.250 C 183.898 197.556,181.664 196.199,176.741 198.179 " stroke="none" fillRule="evenodd"></path>
            </g>
        </svg>
    );
}

export default SvgCat