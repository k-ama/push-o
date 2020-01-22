module.exports = {
    "modulePaths": [
        "src"
    ],
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "moduleNameMapper": {
        "^.+\\.(css|less|scss)$": "babel-jest"
    },
    "collectCoverageFrom": [
        "src/**/*.{js,jsx,ts,tsx}",
        "!**/node_modules/**",
        "!**/vendor/**",
        "!**/index.js",
        "!**/index.jsx",
        "!**/index.ts",
        "!**/index.tsx",
        "!**/react-app-end.d.ts",
        "!**/setupTests.tsx",
        "!**/serviceWorker.tsx"
    ],
    "coverageDirectory": "__coverage__",
    "coverageThreshold": {
        "global": {
            "branches": 100,
            "functions": 100,
            "lines": 100,
            "statements": 100
        }
    },
    "coverageReporters": [
        "json",
        "lcov",
        "text",
        "text-summary"
    ]
}

