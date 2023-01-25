'use strict';

var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var test = require('selenium-webdriver/testing');
var Page = require('./page');
var PageLaxMode = require('./pageLaxMode');
var TestOperations = require('./testOperations');
const prompt = require('prompt-sync')({sigint: true});

module.exports.todoMVCTest = function (frameworkName, baseUrl, speedMode, laxMode, browserName) {

	test.describe('TodoMVC - ' + frameworkName, function () {

		var TODO_ITEM_ONE = 'buy some cheese';
		var TODO_ITEM_TWO = 'feed the cat';
		var TODO_ITEM_THREE = 'book a doctors appointment';
		var browser, testOps, page;

		// a number of tests use this set of ToDo items.
		function createStandardItems(done) {
			page.enterItem(TODO_ITEM_ONE);
			page.enterItem(TODO_ITEM_TWO);
			return page.enterItem(TODO_ITEM_THREE)
				.then(function () {
					if (done instanceof Function) {
						done();
					}
				});
		}

		function launchBrowser(done) {
			var chromeOptions = new chrome.Options();
			chromeOptions.addArguments('no-sandbox');

			
			if (process.env.CHROME_PATH !== undefined) {
				chromeOptions.setChromeBinaryPath(process.env.CHROME_PATH);
			}

			browser = new webdriver.Builder()
				.withCapabilities({browserName: browserName})
				.setChromeOptions(chromeOptions)
				.build();

			

			browser.get(baseUrl);

			page = laxMode ? new PageLaxMode(browser) : new Page(browser);
			testOps = new TestOperations(page);
			
			return page.ensureAppIsVisibleAndLoaded()
				.then(function () {
					if (done instanceof Function) {
						done();
					}
				});
		}

		function printCapturedLogs() {
			var logs = browser.manage().logs();

			return logs.get('browser')
				.then(function (entries) {
					if (entries && entries.length) {
						console.log(entries);
					}
				});
		}

		async function  closeBrowser(done) {
			await prompt('Press enter once you have downloaded the logs');
			return browser
				.quit()
				.then(function () {
					if (done instanceof Function) { done(); }
				});
		}

		if (speedMode) {
			test.before(launchBrowser);
			test.after(closeBrowser);
			test.afterEach(function (done) {
				return browser.executeScript('window.localStorage && localStorage.clear(); location.reload(true);')
					.then(function () { done(); });
			});
		} else {
			test.beforeEach(launchBrowser);
			test.afterEach(function (done) {
				printCapturedLogs()
					.then(function () {
						return closeBrowser(done);
					});
			});
		}

		test.describe('New Todo', function () {

			test.it('standard set of commands', function () {
				console.log('step 1')
				page.enterItem('   ' + TODO_ITEM_ONE + '  ')
				page.enterItem(TODO_ITEM_TWO);
				page.enterItem(TODO_ITEM_THREE);

				console.log('step 2')
				page.clickMarkAllCompletedCheckBox();
				page.clickMarkAllCompletedCheckBox();

				console.log('step 3')
				page.toggleItemAtIndex(0);
				page.toggleItemAtIndex(1);
				page.toggleItemAtIndex(2);
				page.toggleItemAtIndex(2); //untick the third item

				console.log('step 4')
				page.toggleItemAtIndex(1); // untick the second item
				page.clickMarkAllCompletedCheckBox(); // mark all items as complete
				page.toggleItemAtIndex(1);
				page.toggleItemAtIndex(2);
				page.clickClearCompleteButton();

				console.log('step 5')
				page.doubleClickItemAtIndex(0)
				page.editItemAtIndex(0, ' buy some sausages ' + webdriver.Key.ENTER)
				page.toggleItemAtIndex(0)

				console.log('step 6')
				page.doubleClickItemAtIndex(0)
				page.editItemAtIndex(0, '' + webdriver.Key.ENTER)

				page.enterItem('   ' + TODO_ITEM_ONE + '  ')
				page.enterItem(TODO_ITEM_TWO);

				console.log('step 7')
				page.filterByActiveItems();
				page.toggleItemAtIndex();
				page.filterByCompletedItems();
				page.filterByAllItems();
				console.log('complete')
			});

		});

	});

};
