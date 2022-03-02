import React from 'react';
import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(50000);
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetailsDisplay = await page.$eval(
      '.event .details',
      (el) => el.style.display
    );
    expect(eventDetailsDisplay).toBe('none');
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .showDetails');
    const eventDetailsDisplay = await page.$eval(
      '.event .details',
      (el) => el.style.display
    );
    expect(eventDetailsDisplay).toBe('block');
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .showDetails');
    const eventDetailsDisplay = await page.$eval(
      '.event .details',
      (el) => el.style.display
    );
    expect(eventDetailsDisplay).toBe('none');
  });
});
