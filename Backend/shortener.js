#!/usr/bin/env node
import axios from "axios";
import chalk from "chalk";
import dotenv from 'dotenv';
dotenv.config();
const inputUrl = process.argv[2]; 

if (!inputUrl) {
  console.log(chalk.red("Please provide a URL!"));
  process.exit(1);
}

async function shortenUrl() {
  try {
    const res = await axios.post(`${process.env.APP_URL}shorten`, {
      url: inputUrl,
    });

    console.log(chalk.green("Short URL:"), chalk.blue(res.data.shortUrl));
  } catch (err) {
    console.error(chalk.red("Error:"), err.message);
  }
}

shortenUrl();