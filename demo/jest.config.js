module.exports = {
	// Automatically clear mock calls and instances between every test
	clearMocks: true,
	collectCoverage: true ,
	coverageDirectory: 'coverage',
	// A list of reporter names that Jest uses when writing coverage reports
	coverageReporters: [
	  'text-summary',
	  'html',
	],
	testEnvironment: 'node',
	// An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
	testPathIgnorePatterns: ['/node_modules/'],
	// Indicates whether each individual test should be reported during the run
	verbose: true
};
